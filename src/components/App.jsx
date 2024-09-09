import { useState } from "react";
import Cards from "./Cards";
import Form from "./Form";
import Back from "./Back";
import Front from "./Front";
import Thanks from "./Thanks";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const matches = useMediaQuery("(min-width: 1024px)");

  const [details, setDetails] = useState({
    name: "JANE APPLESEED",
    number: "0000 0000 0000 0000",
    mm: "00",
    yy: "00",
    cvc: "000",
  });
  const [submitted, setSubmitted] = useState(false);

  const resetDetails = () => {
    setSubmitted(false);
    setDetails({
      name: "JANE APPLESEED",
      number: "0000 0000 0000 0000",
      mm: "00",
      yy: "00",
      cvc: "000",
    });
  };

  return (
    <div className="app">
      <Cards matches={matches}>
        <Front details={details} />
        <Back details={details} />
      </Cards>
      <section>
        {!submitted && (
          <Form
            details={details}
            setDetails={setDetails}
            setSubmitted={setSubmitted}
          />
        )}
        {submitted && (
          <Thanks
            submitted={setSubmitted}
            setDetails={setDetails}
            resetDetails={resetDetails}
          />
        )}
      </section>
    </div>
  );
}

export default App;
