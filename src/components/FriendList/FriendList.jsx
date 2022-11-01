import PropTypes from 'prop-types';
import { List, FriendItem, Status, FriendAvatar, FriendName} from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <List>
           {friends.map(friend => (
             <FriendItem key={friend.id}>
                <Status>{friend.isOnline}</Status>
                 <FriendAvatar src={friend.avatar} alt="User avatar" width="58" />
                  <FriendName>{friend.name}</FriendName>
             </FriendItem>
           ))}
      </List>
    )
};

FriendList.propTypes = {
      friends: PropTypes.array.isRequired
};