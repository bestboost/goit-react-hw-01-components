import PropTypes from 'prop-types';
import {TableHead, Row, RowHead, Data, Type, Amount, Currency} from './TransactionHistory.styled';
import { Box } from '../Box';

export const TransactionHistory = ({items}) => {
    return (
        <Box
        width={650}
        border-radius='normal'
        as='table'>
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
</Box>

    );
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}