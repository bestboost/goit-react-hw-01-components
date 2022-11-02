import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    width: 750px;

    border-radius: ${p  => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.secondBackground};
    `;

export const TableHead = styled.thead`
   
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.secondary};
    background-color: ${p => p.theme.colors.table};
`;

export const Row = styled.tr`
    padding: ${p => p.theme.space[1]}px;
    margin: ${p => p.theme.space[8]};
`;

export const RowHead = styled.th`
display: flex;
`;

export const Data = styled.tbody`
display: flex;
`;
    
export const Type  = styled.td`
display: flex;
`;

export const Amount  = styled.td`
display: flex;
`;

export const Currency  = styled.td`
display: flex;
`;
      