import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let counter = 0;

setInterval(() => {
    const firstDigit = Math.floor((counter/1)%10);
    const secondDigit = Math.floor((counter/10)%10);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} firstDigit={firstDigit} secondDigit={secondDigit} />
)
counter++;
}, 1000)