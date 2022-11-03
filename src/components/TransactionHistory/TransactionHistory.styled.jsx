import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    width: 750px;
    box-shadow: ${p => p.theme.shadows.transaction}
`;

export const TableHead = styled.thead`
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.secondary};
    background-color: ${p => p.theme.colors.table};
`;

export const Row = styled.tr`

`;

export const RowHead = styled.th`
    padding: ${p => p.theme.space[3]}px;
`;    

export const Data = styled.tbody`
   text-align: center;

   font-size: ${p => p.theme.fontSizes.m}px;
   color: ${p => p.theme.colors.text};
   background-color: ${p => p.theme.colors.secondBackground}
`;
    
export const Type  = styled.td`
    padding: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[0]};
    padding-left: ${p => p.theme.space[0]};
`;

export const Amount  = styled.td`

`;

export const Currency  = styled.td`

`;
      