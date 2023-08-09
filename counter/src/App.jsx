import CounterBG from "./components/CounterBG"
import Card from "./components/Card"

function App({ counter, firstDigit, secondDigit }) {
 return (
    <CounterBG color="black">
        <Card>
            0
        </Card>
        <Card>
            0
        </Card>
        <Card>
            0
        </Card>
        <Card>
            0
        </Card>
        <Card>
            0
        </Card>
        <Card>
            {secondDigit}
        </Card>
        <Card>
            {firstDigit}
        </Card>
    </CounterBG>
 )
}

export default App
