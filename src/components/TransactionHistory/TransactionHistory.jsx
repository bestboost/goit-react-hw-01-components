import PropTypes from 'prop-types';
import {TransactionTable, TableHead, Row, RowHead, Data, Type, Amount, Currency} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
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