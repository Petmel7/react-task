import "./CardContent.scss"

export const CardContent = ({ title, duration, price }) => {
    return (
        <div className="card-content-container">
            <h1 className="card-title">{title}</h1>
            <p>{duration}</p>
            <p><span>$</span>{price}</p>
        </div>
    )
}