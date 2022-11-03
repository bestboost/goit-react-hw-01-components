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
                <Status>{friend.isOnline}</Status>
                 <FriendAvatar src={friend.avatar} alt="User avatar" width="58" />
                  <FriendName>{friend.name}</FriendName>
             </FriendItem>
           ))}
      </Box>
    )
};

FriendList.propTypes = {
      friends: PropTypes.array.isRequired
};