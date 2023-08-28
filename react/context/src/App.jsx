import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import useCountContext from './contexts/CountContext'
import './App.css'

function App() {
  const { store, actions } = useCountContext();

  if (store.isLoading) {
    return(<p>Cargando...</p>)
  }

  if (!store.isLoggedIn) {
    return (
      <div>
        <p>Por favor, inicia sesión</p>
        <button onClick={actions.login}>Iniciar sesión</button>
      </div>
    );
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenido, {store.userName}</h1>
      <div className="card">
        <button onClick={actions.increment}>count is {store.count}</button>
        <button onClick={actions.logout}>Cerrar sesión</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App
