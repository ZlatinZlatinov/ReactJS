import TableRow from "./TableRow";

export default function Result({ result }) {
    console.log(result);

    return (
        <section>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>

                <tbody>
                    {result.map((row, i) => <TableRow key={i} row={row} />)}
                </tbody>
            </table>
        </section>
    );
}