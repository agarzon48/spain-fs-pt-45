import useCountContext from "../contexts/CountContext";

export default function Footer() {
  const { store, actions } = useCountContext();
  return (
    <>
      <p onClick={actions.increment}>
        This is the footer. The counter is {store.count}
      </p>
      <button
        onClick={() =>
          actions.saveUserInLocalStorage({
            uid: 1,
            username: "Raspas",
            userRole: "Admin",
            lastLogin: new Date(),
          })
        }
      >
        Guardar usuario
      </button>
      <button onClick={actions.getUserFromLocalStorage}>Obtener usuario</button>
      <button onClick={actions.deleteUserFromLocalStorage}>
        Eliminar usuario
      </button>
    </>
  );
}