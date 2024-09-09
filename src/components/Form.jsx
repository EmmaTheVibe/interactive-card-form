import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  splitNo,
  checkCvcLength,
  checkMonth,
  checkDateLength,
  checkNoLength,
  checkVal,
  checkYear,
} from "../utils/functions";

export default function Form({ setDetails, setSubmitted }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const registerOptions = {
    name: {
      required: "Can't be blank",
      pattern: {
        value: /^[A-Za-z ]+$/i,
        message: "Wrong format, letters only",
      },
    },
    number: {
      required: "Can't be blank",
      pattern: {
        value: /^[0-9 ]+$/,
        message: "Wrong format, numbers only",
      },
      validate: {
        correct: (v) => {
          const format = splitNo(v);
          if (!checkNoLength(v)) {
            setValue("number", format);
            return "Incomplete";
          } else if (v) {
            setValue("number", format);
            return true;
          }
        },
      },
    },
    mm: {
      required: "Can't be blank",
      pattern: {
        value: /^[0-9]+$/,
        message: "Invalid month",
      },
      validate: {
        correct: (v) => {
          if (!checkVal(v)) {
            return "Invalid month";
          } else if (!checkMonth(v)) {
            return "Invalid month";
          } else if (!checkDateLength(v)) {
            return "Incomplete";
          } else {
            return true;
          }
        },
      },
    },
    yy: {
      required: "Can't be blank",
      pattern: {
        value: /^[0-9]+$/,
        message: "Invalid year",
      },
      validate: {
        correct: (v) => {
          if (!checkDateLength(v)) {
            return "Incomplete";
          } else if (!checkYear(v)) {
            return "Invalid year";
          } else {
            return true;
          }
        },
      },
    },
    cvc: {
      required: "Can't be blank",
      pattern: {
        value: /^[0-9]+$/,
        message: "Invalid number",
      },
      validate: {
        correct: (v) => {
          if (!checkVal(v)) {
            return "Invalid number";
          } else if (!checkCvcLength(v)) {
            return "Incomplete";
          } else {
            return true;
          }
        },
      },
    },
  };

  const handleRegistration = () => {
    reset();
    setSubmitted(true);
  };

  const watchedName = watch("name");
  const watchedNumber = watch("number");
  const watchedMm = watch("mm");
  const watchedYy = watch("yy");
  const watchedCvc = watch("cvc");

  useEffect(() => {
    setDetails((prevState) => ({
      ...prevState,
      name: watchedName?.toUpperCase() || "JANE APPLESEED",
      number: watchedNumber || "0000 0000 0000 0000",
      mm: watchedMm || "00",
      yy: watchedYy || "00",
      cvc: watchedCvc || "000",
    }));
  }, [
    setDetails,
    setValue,
    watchedName,
    watchedNumber,
    watchedMm,
    watchedYy,
    watchedCvc,
  ]);

  return (
    <div className="container">
      <form action="" noValidate onSubmit={handleSubmit(handleRegistration)}>
        <label htmlFor="name" className="name">
          <p className="tag">CARDHOLDER NAME</p>{" "}
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            id="name"
            {...register("name", registerOptions.name)}
            style={{
              border: errors?.name && "1.3px solid hsl(0, 100%, 66%)",
            }}
          />
          <p>
            {errors?.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </p>
        </label>
        <label htmlFor="number" className="number">
          <p className="tag">CARD NUMBER</p>{" "}
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            id="number"
            {...register("number", registerOptions.number)}
            style={{
              border: errors?.number && "1.3px solid hsl(0, 100%, 66%)",
            }}
          />
          <p>
            {errors?.number && (
              <span className="error">{errors.number.message}</span>
            )}
          </p>
        </label>
        <div className="grid">
          <div className="carrier">
            <p className="tag">EXP. DATE (MM/YY)</p>{" "}
            <div className="exp">
              <label htmlFor="mm">
                <input
                  className="month-input"
                  type="text"
                  placeholder="MM"
                  id="mm"
                  maxLength={2}
                  {...register("mm", registerOptions.mm)}
                  style={{
                    border: errors?.mm && "1.3px solid hsl(0, 100%, 66%)",
                  }}
                />
                <p>
                  {errors?.mm && (
                    <span className="error">{errors.mm.message}</span>
                  )}
                </p>
              </label>
              <label htmlFor="yy" className="mm">
                <input
                  className="year-input"
                  type="text"
                  placeholder="YY"
                  id="yy"
                  maxLength={2}
                  {...register("yy", registerOptions.yy)}
                  style={{
                    border: errors?.yy && "1.3px solid hsl(0, 100%, 66%)",
                  }}
                />
                <p>
                  {errors?.yy && (
                    <span className="error">{errors.yy.message}</span>
                  )}
                </p>
              </label>
            </div>
          </div>

          <label htmlFor="cvc" className="cvc-label">
            <p className="tag">CVC</p>{" "}
            <input
              type="text"
              placeholder="e.g. 123"
              id="cvc"
              maxLength={3}
              {...register("cvc", registerOptions.cvc)}
              style={{
                border: errors?.cvc && "1.3px solid hsl(0, 100%, 66%)",
              }}
            />
            <p>
              {errors?.cvc && (
                <span className="error">{errors.cvc.message}</span>
              )}
            </p>
          </label>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
