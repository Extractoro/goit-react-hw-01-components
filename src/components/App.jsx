// Import Components
import { Container } from './Container/Container'
import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

// Import Data
import profile from '../data/user.json'
import stats from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <Container>

      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />

      <Statistics title='Upload stats' stats={stats} />
      
      <FriendList friends={friends}/>

      <TransactionHistory items={transactions} />
      
    </Container>
  );
};
