import { images } from "../utils/data";

export default function Back({ details }) {
  return (
    <div className="back">
      <img src={images.back} alt="" />
      <div className="cvv">
        <p>{details.cvc}</p>
      </div>
    </div>
  );
}
