import { Profile } from 'components/profile/Profile';
import userData from 'user.json';

export const App = () => {
  return (
    <div>
      <Profile users={userData}/>
    </div>
  );
};
