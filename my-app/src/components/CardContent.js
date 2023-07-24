export const CardContent = ({title, duration, price}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{duration}</p>
            <p><span>$</span>{price}</p>
        </div>
    )
}