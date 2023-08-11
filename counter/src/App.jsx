import CounterBG from "./components/CounterBG"
import Card from "./components/Card"

function App({ counter, firstDigit, secondDigit }) {
 const digits = counter.toString().padStart(6, '0').split('');
 return (
    <CounterBG color="black">
        {digits.map((digit, index) => (
            <Card key={index}>
                {digit}
            </Card>
        ))}
    </CounterBG>
 )
}

export default App
