import CardCss from '../components/Style.css/CardContent.module.css';

export const CardContent = ({
  username,
  tag,
  location,
  avatar,
  stats, }) => {
  
    return (
        <div className={CardCss.cardContainer}>
          <div className="profile">
            <div className={CardCss.description}>
              <img
                src={avatar}
                alt="User avatar"
                className={CardCss.avatar}
              />
                <p className={CardCss.name}>{username}</p>
                <p className={CardCss.tag}>{tag}</p>
                <p className={CardCss.location}>{location}</p>
              </div>

              <ul class={CardCss.stats}>
                <li>
                  <span className={CardCss.label}>Followers</span>
                  <span className={CardCss.quantity}>{stats.followers}</span>
                </li>
                <li>
                  <span className={CardCss.label}>Views</span>
                  <span className={CardCss.quantity}>{stats.views}</span>
                </li>
                <li>
                  <span className={CardCss.label}>Likes</span>
                  <span className={CardCss.quantity}>{stats.likes}</span>
                </li>
            </ul>
          </div>
        </div>
    )
}