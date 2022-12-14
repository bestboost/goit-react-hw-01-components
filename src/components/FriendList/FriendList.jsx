import PropTypes from 'prop-types';
import { FriendItem, Status, FriendAvatar, FriendName} from './FriendList.styled';
import { Box } from '../Box';

export const FriendList = ({friends}) => {
    return (
        <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between' 
        alignItems='center'
        width={350}
        m={0}
        mb={7}
        p={0}
        as='ul'>
           {friends.map(friend => (
             <FriendItem key={friend.id}>
                <Status status={friend.isOnline}>{friend.isOnline}</Status>
                 <FriendAvatar src={friend.avatar} alt="User avatar" width="58" />
                  <FriendName>{friend.name}</FriendName>
             </FriendItem> 
           ))}
      </Box>
    )
};

FriendList.propTypes = {
      friends: PropTypes.arrayOf( 
        PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired}))
};