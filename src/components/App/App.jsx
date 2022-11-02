import { Profile } from 'components/profile/Profile';
import user from '../../user.json';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../../data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../../friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';


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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </Container>
  );
};
