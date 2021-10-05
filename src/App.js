import Profile from './components/Profile/Profile';
import userInfo from './user.json';
import Sections from './components/Sections'
// import Statistics from './components/Statistics/Statistics'
import statisticalData from './statistical-data.json'
import StatisticsList from './components/Statistics/StatisticsList';
const data = userInfo;


export default function App() {
    return (
        <Sections>
            <div>
                <Profile
                    name={data.name}
                    tag={data.tag}
                    location={data.location}
                    avatar={data.avatar}
                    followers={data.stats.followers}
                    views={data.stats.views}
                    likes={data.stats.likes}
                /></div>,

            <div>
                <StatisticsList items={statisticalData} />
            </div></Sections>)

}