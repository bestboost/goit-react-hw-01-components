import css from './Profile.module.css'
import PropTypes from 'prop-types';

export const Profile = ({username, tag, avatar, location, stats}) => {
    return <div className={css.background}>
    <div className={css.profile} key={username}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.profileList}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.profileList}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.profileList}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
     
    </ul>
  </div>
  </div>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired, 
   avatar: PropTypes.string.isRequired, 
   location: PropTypes.string.isRequired, 
   stats: PropTypes.object.isRequired

}