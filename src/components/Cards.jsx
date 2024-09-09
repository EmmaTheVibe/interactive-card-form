import { images } from "../utils/data";

export default function Cards({ matches, children }) {
  return (
    <div
      className="cards"
      style={{
        backgroundImage: `url(${matches ? images.desktop : images.mobile})`,
      }}
    >
      <div className="container">{children}</div>
    </div>
  );
}
