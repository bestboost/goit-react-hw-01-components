import css from './Profile.module.css'

export const Profile = ({users}) => {
  console.log(users)
    return <div className={css.profile}>
       {users.map(user => ( <p className={css.username} key={user.username}>
        {user.username}</p>))}|
    {/* <div className={css.description}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.username}>Petra Marica</p>
      <p className={css.tag}>@pmarica</p>
      <p className={css.location}>Salvador, Brasil</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.profileList}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>1000</span>
      </li>
      <li className={css.profileList}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>2000</span>
      </li>
      <li className={css.profileList}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>3000</span>
      </li>
    </ul> */}
  </div>
}

// Profile.propTypes = {
//   username: propTypes.string.isRequired,
//    tag: propTypes.string.isRequired, 
//    avatar: propTypes.string.isRequired, 
//    location: propTypes.string.isRequired, 
//    stats: propTypes.object.isRequired

// }