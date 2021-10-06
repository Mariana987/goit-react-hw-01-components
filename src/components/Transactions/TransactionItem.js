import PropTypes from 'prop-types';
import s from './Transactions.module.css'
function TransactionItem({ type, amount, currency }) {
    return (

        <tr>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
        </tr>

    )
}
TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem;