import PropTypes from 'prop-types';
import {Description, Avatar, Username, Tag, Location, StatsList, Stats, Label, Quantity} from './Profile.styled';
import { Box } from '../Box';

export const Profile = ({username, tag, avatar, location, stats}) => {
    return (
    <Box 
    display='flex'
    flexDirection='column' 
    alignItems='center'
    width={350}
    height={450}
    mb={7}
    borderRadius='normal'
    boxShadow='profile'
    as='div'>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"/>
      <Username>{username}</Username>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  
    <Stats>
      <StatsList>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsList>
      <StatsList>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsList>
      <StatsList>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsList>
     
    </Stats>
    </Box>
);
};

Profile.propTypes = {
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired, 
   avatar: PropTypes.string.isRequired, 
   location: PropTypes.string.isRequired, 
   stats: 
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired, })
};