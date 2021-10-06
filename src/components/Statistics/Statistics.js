import PropTypes from 'prop-types';
import s from './Statistics.module.css'
const Statistics = ({ label, percentage }) => {
    return (
        <li className={s.item}
            style={{ backgroundColor: randomColor() }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    )
}
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
    return `rgb(${randomIntegerFromInterval(0, 255)}, 
              ${randomIntegerFromInterval(0, 255)},
              ${randomIntegerFromInterval(0, 255)})`;
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default Statistics;

