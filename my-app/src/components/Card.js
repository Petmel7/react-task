
import './Card.css';
import cardContentJson from '../data/CardContent.json';
import StatsJson from '../data/Stats.json';
import dataFriendJson from '../data/Friends.json';
import { CardContent } from './CardContent';
// import { CardButton } from './CardButton';
import { NewPage } from './NewPage';
import { FriendList } from './FriendList';

// const { username, tag, location, avatar, stats } = cardContentJson;
const { avatar, name, isOnline, id } = dataFriendJson;

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
            <NewPage {...StatsJson} />
            
            <FriendList 
                avatar={avatar}
                name={name}
                // isOnline={isOnline}
                // isOnline={isOnline === false ? <h3>Online</h3> : <h3>Ofline</h3>}
                isOnline={<h3>{isOnline ? "Online" : "Offline"}</h3>}
                id={id}
            />
        </div>
    )
}