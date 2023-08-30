import useAppContext from "../../../contexts/AppContext";

const Dropdown = () => {
  const {
    store: { favorites },
    actions: { removeFromFavorites },
  } = useAppContext();
  

    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
          <span className="badge text-bg-secondary">{ favorites.length }</span>
        </button>
        <ul className="dropdown-menu">
          {
            favorites.map(el => {
              return (
                <li key={ el.uid }>
                  <button
                    className="dropdown-item"
                    onClick={() => removeFromFavorites(el.uid)}
                  >
                    {el?.name}
                  </button>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
}

export default Dropdown;