import dataFriendJson from '../data/Friends.json';

export const FriendList = () => {
    return (
        <ul class="friend-list">
            {dataFriendJson.map((item) => (
            <li class="item" key={item.id}>
                <span class="status">{item.isOnline}</span>
                <img class="friend-avatar" src={item.avatar}
                alt="User avatar" width="48" />
                <p class="name">{item.name}</p>
            </li>
            ))}
        </ul>
    )
}