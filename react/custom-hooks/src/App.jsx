import useUserInput from './hooks/useUserInput';
import useGetResources from "./hooks/useGetResources";
import './App.css'
import { ToastContainer } from "react-toastify";

function App() {
  const [userInput, handleUserInput, resetFields] = useUserInput({
    username: "",
    password: "",
    source: "",
  });
  const [
    creditCardInput,
    handleUpdateCreditCard
   ] = useUserInput({
    username: "",
   });
  
  const [people, PeopleIsLoading] = useGetResources("https://www.swapi.tech/api/people");
  const [planets, planetsAreLoading] = useGetResources("https://www.swapi.tech/api/planets");


  if (PeopleIsLoading || planetsAreLoading) {
    return <p>Cargando...</p>;
  }
    return (
      <>
        {people.results &&
          people.results.map((person) => <p key={person.uid}>{person.name}</p>)}
        {planets.results &&
          planets.results.map((planet) => <p key={planet.uid}>{planet.name}</p>)}
        <button onClick={resetFields}>Limpiar formulario</button>
        <form>
          <div>
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleUserInput}
              value={userInput.username}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleUserInput}
              value={userInput.password}
            />
          </div>
          <div>
            <label htmlFor="source">¿Cómo nos has conocido?</label>
            <input
              type="source"
              id="source"
              name="source"
              onChange={handleUserInput}
              value={userInput.source}
            />
          </div>
        </form>
        <form>
          <div>
            <label htmlFor="username">Nombre de usuario CARD</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleUpdateCreditCard}
              value={creditCardInput.username}
            />
          </div>
        </form>
        <div>
          <p>Username: {userInput.username}</p>
          <p>Contraseña: {userInput.password}</p>
          <p>Origen del lead: {userInput.source}</p>
          <p>CARD Username {creditCardInput.username}</p>
        </div>
        <ToastContainer />
      </>
    );
}

export default App
