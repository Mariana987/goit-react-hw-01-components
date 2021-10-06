import Sections from './components/Sections'
import Profile from './components/Profile/Profile';
import userInfo from './user.json';

import statisticalData from './statistical-data.json'
import StatisticsList from './components/Statistics/StatisticsList';

import FriendsList from './components/FriendList/FriendList';
import friends from './friends.json'

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './transactions.json'
const data = userInfo;


export default function App() {
    return (
        <Sections>

            <Profile
                name={data.name}
                tag={data.tag}
                location={data.location}
                avatar={data.avatar}
                followers={data.stats.followers}
                views={data.stats.views}
                likes={data.stats.likes}
            />
            <StatisticsList items={statisticalData} />
            <FriendsList elements={friends} />
            <TransactionHistory transactions={transactions} />
        </Sections>)

}