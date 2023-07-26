// export const Sidebar = ({ testObject, text, number, dog }) => {

//     return (
//      <>
//             <h1>Hello React</h1>
//             <h2>{}</h2>
//             <p>{text}{number}</p>
//             <p>{dog}</p>
//      </>
//     )
// }

// const myStyles = {
//     height: "257px",
//     width: "457px",
//     borderRadius: "30px",
//     background: "#fff",
//     boxShadow: "2px 6px 30px 0px rgba(0, 0, 0, 0.10)"
// }

import './Card.css';
import cardContentJson from '../data/CardContent.json';
import { CardContent } from './CardContent';

// const { title, duration, price } = cardContentJson;

export const Card = () => {
    return (
        <div className={`card-container card-border`}>
            <CardContent
                // title={title}
                // duration={duration}
                // price={price}
                {...cardContentJson}
            />
        </div>
    )
}