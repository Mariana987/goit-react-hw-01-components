import Statistics from './Statistics'
import PropTypes from 'prop-types';
import s from './Statistics.module.css'
function StatisticsList({ title, items }) {
    return (
        <section className={s.container}>
            {title && <h2 >{title}</h2>}
            <ul className={s.list}>
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