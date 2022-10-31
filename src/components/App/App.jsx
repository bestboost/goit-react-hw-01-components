import { Profile } from 'components/profile/Profile';
import user from '../../user.json';
import { Container } from './App.styled';
import {Statistics} from 'components/profile/Statistics';
import data from '../../data.json';


export const App = () => {
  return (
    <Container>
      <Profile username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}
               />
      <Statistics title="Upload stats"
                  stats={data} />
    </Container>
  );
};
