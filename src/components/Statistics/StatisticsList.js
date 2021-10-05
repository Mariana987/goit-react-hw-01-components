import Statistics from './Statistics'
import PropTypes from 'prop-types';
// import statisticalData from '.../statistical-data.json';
function StatisticsList({ items }) {
    return (
        <section>
            <h2 className="title">Upload stats</h2>
            <ul>
                {items.map(item => (

                    <li className="item"
                        key={item.id}>
                        <Statistics
                            label={item.label}
                            percentage={item.percentage}
                        />

                    </li>
                ))}

            </ul></section>
    )
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}

export default StatisticsList;