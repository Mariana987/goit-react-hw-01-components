import TransactionItem from "./TransactionItem";
import PropTypes from 'prop-types';
import s from './Transactions.module.css'
function TransactionHistory({ transactions }) {
    return (
        <table className={s.history}>
            <thead >
                <tr>
                    <th className={s.th}>Type</th>
                    <th className={s.th}>Amount</th>
                    <th className={s.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction => (
                    <TransactionItem
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;