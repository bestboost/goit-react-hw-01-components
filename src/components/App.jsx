import { Profile } from 'components/profile/Profile';
import userData from '../../src/user.json';

export const App = () => {
  return (
    <div>
      <Profile 
      username={userData}
      // , tag, avatar, location, stats}
      />
    </div>
  );
};
