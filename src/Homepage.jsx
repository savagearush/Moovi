import { Movies } from "./Movies";
import "./homepage.css";

export const Homepage = () => {
  return (
    <div className="screen1">
      <h2 className="text-center m-3 text-white logo">
        Moovi - Book Movie Tickets
      </h2>
      <div className="movies">
        <Movies />
      </div>
    </div>
  );
};
