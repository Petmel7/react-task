import dataFriendJson from '../data/Friends.json';
import FriendsCss from '../components/Style.css/FriendsList.module.css';

export const FriendsList = () => {
    return (
        <ul className={FriendsCss.friendList}>
            {dataFriendJson.map((item) => (
            <li className={FriendsCss.item} key={item.id}>
                <span className={item.isOnline ? "status-online" : "status-offline"}>
                {item.isOnline ? "Online" : "Offline"}</span>
                    <img className={item.isOnline ? "friend-online" : "friend-offline"}
                        src={item.avatar}
                alt="User avatar" width="48" />
                <p className={FriendsCss.name}>{item.name}</p>
            </li>
            ))}
        </ul>
    )
}