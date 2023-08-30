import { Link } from "react-router-dom";

import useAppContext from "../../contexts/AppContext";

import DetailsItem from "./components/DetailsItem";

const Card = ({
  uid,
  name,
  hair_color,
  cargo_capacity,
  population,
  max_atmosphering_speed,
}) => {
  const {
    store: { favorites },
    actions: { addToFavorites, removeFromFavorites },
  } = useAppContext();
  const isFavorite = favorites.some(items => items.uid === uid);

  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <DetailsItem title="Población: " detail={population} />
        <DetailsItem title="Color de pelo: " detail={hair_color} />
        <DetailsItem title="Cargo: " detail={cargo_capacity} />
        <DetailsItem
          title="velocidad máxima: "
          detail={max_atmosphering_speed}
        />
        <div className="d-flex justify-between">
          <Link to={`/${uid}`} className="block btn btn-primary">
            Ver más sobre {name}
          </Link>
          <button
            type="button"
            className="ms-auto btn btn-warning"
            onClick={
              isFavorite
                ? () => removeFromFavorites(uid)
                : () => addToFavorites(uid, name)
            }
          >
            {isFavorite ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
