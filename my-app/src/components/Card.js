
import './Card.css';
import cardContentJson from '../data/CardContent.json';
import StatsJson from '../data/Stats.json';
import dataFriendJson from '../data/Friends.json';
import TransactionJson from '../data/Transactions.json';
import { CardContent } from './CardContent';
import { Statistics } from './Statistics';
import { FriendsList } from './FriendsList';
import { TransactionHistory } from './TransactionHistory';

export const Card = () => {
    return (
        <div className={`card-container card-border`}>
            <CardContent {...cardContentJson} />
            <Statistics {...StatsJson} />
            <FriendsList {...dataFriendJson} />
            <TransactionHistory {...TransactionJson} />
        </div>
    )
}