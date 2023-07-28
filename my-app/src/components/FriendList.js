import dataFriendJson from '../data/Friends.json';

export const FriendList = () => {
    return (
        <ul className="friend-list">
            {dataFriendJson.map((item) => (
            <li className="item" key={item.id}>
                <span className={item.isOnline ? "status-online" : "status-offline"}>
                {item.isOnline ? "Online" : "Offline"}</span>
                <img className={item.isOnline ? "friend-online" : "friend-offline"} src={item.avatar}
                alt="User avatar" width="48" />
                <p className="name">{item.name}</p>
            </li>
            ))}
        </ul>
    )
}