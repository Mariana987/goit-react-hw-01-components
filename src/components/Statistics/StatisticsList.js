import Statistics from './Statistics'
import PropTypes from 'prop-types';
function StatisticsList({ items }) {
    return (
        <section>
            <h2 className="title">Upload stats</h2>
            {/* {title && <h2 >{title}</h2>} */}
            <ul>
                {items.map(item => (
                    <Statistics
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
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