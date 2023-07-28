
import './Card.css';
import cardContentJson from '../data/CardContent.json';
import StatsJson from '../data/Stats.json';
import { CardContent } from './CardContent';
// import { CardButton } from './CardButton';
import { NewPage } from './NewPage';

// const { username, tag, location, avatar, stats } = cardContentJson;

export const Card = () => {
    return (
        <div className={`card-container card-border`}>
            <CardContent
                
            // username={username}
            // tag={tag}
            // location={location}
            // avatar={avatar}
            // stats={stats}
            
                {...cardContentJson}
            />
            {/* <CardButton /> */}
            <NewPage
                {...StatsJson}
            />
        </div>
    )
}