import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CountContextProvider } from './contexts/CountContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountContextProvider>
      <App />
  </CountContextProvider>
);
