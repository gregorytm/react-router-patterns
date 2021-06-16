import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Dogs up for adoption</h1>
      <div>
        {dogs.map((d) => (
          <div key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3>
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
