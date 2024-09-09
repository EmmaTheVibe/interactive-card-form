import { images } from "../utils/data";

export default function Front({ details }) {
  return (
    <div className="front">
      <img src={images.front} alt="" className="front-bg" />
      <div className="front-info">
        <img src={images.logo} alt="" className="svg" />
        <div>
          <p className="card-no">{details.number}</p>
          <div className="name-line">
            <div className="name-txt">
              <p>{details.name}</p>
            </div>
            <p>
              {details.mm}/{details.yy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
