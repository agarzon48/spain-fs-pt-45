const CounterBG = ({children, color}) => {
    return (
        <div className={`bg-${color} row justify-content-center p-3`}>
            {children}
        </div>
    )
}

export default CounterBG;