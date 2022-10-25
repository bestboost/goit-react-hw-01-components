import PropTypes from 'prop-types';
import {Card, Description, Avatar, Username, Tag, Location, StatsList, Stats, Label, Quantity} from './Profile.styled';

export const Profile = ({username, tag, avatar, location, stats}) => {
    return (
    <Card>
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
    </Card>
);
};

Profile.propTypes = {
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired, 
   avatar: PropTypes.string.isRequired, 
   location: PropTypes.string.isRequired, 
   stats: PropTypes.object.isRequired

}