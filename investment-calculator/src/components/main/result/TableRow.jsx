import { formatter } from "../../../util/investment";

export default function TableRow({ row }) {
    // console.log(row);
    // {formatter.format(row.totalInterest)}
    return (
        <tr>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
        </tr>
    );
}