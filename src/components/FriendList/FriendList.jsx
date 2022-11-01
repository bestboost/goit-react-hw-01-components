import PropTypes from 'prop-types';
import { FriendItem, Status, FriendAvatar, FriendName} from './FriendList.styled';

export const FriendList = ({avatar, name, isOnline}) => {
    return (
        <FriendItem>
        <Status>{isOnline}</Status>
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </FriendItem>
    )
};

FriendList.PropTypes = {

};