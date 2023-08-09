const Card = ({children}) => {
    
    return (
        <div className="card col m-2 text-center text-white p-1 bg-dark border border-secondary">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card;