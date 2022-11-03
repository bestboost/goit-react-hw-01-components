import PropTypes from 'prop-types';
import {TransactionTable, TableHead, Row, RowHead, Data, Type, Amount, Currency} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
//         <table>
 
//   <thead>
//     <tr>
//       <th>Train number</th>
//       <th>Route</th>
//       <th>Travel time</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>433</td>
//       <td>London - Paris</td>
//       <td>5 hours</td>
//     </tr>
//     <tr>
//       <td>701</td>
//       <td>New York - Chicago</td>
//       <td>7 hours</td>
//     </tr>
//     <tr>
//       <td>258</td>
//       <td>Oslo - Warsaw</td>
//       <td>4 hours</td>
//     </tr>
//   </tbody>
// </table>
        <TransactionTable>
  <TableHead>
    <Row>
      <RowHead>Type</RowHead>
      <RowHead>Amount</RowHead>
      <RowHead>Currency</RowHead>
    </Row>
  </TableHead>

  <Data>
    {items.map(item => (
      <Row key={item.id}>
        <Type>{item.type}</Type>
        <Amount>{item.amount}</Amount>
        <Currency>{item.currency}</Currency>
      </Row>
    ))}
  </Data>
</TransactionTable>

    );
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}