import TransactionJson from "../data/Transactions.json";
import TransactionCss from '../components/Style.css/Transaction.module.css';

export const TransactionHistory = () => {
    return (
        <table className={TransactionCss.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {TransactionJson.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}