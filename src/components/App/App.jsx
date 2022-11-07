import { Profile } from 'components/profile/Profile';
import user from '../../Data/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../../Data/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../../Data/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../Data/transactions.json';
import { Box } from '../Box';

export const App = () => {
  return (
    <Box  bg='background'
          p={7}
          m={0}
          display='flex'
          flexDirection='column' 
          justifyContent='center'
          alignItems='center'
          as='main'>
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
    </Box>
  );
};
