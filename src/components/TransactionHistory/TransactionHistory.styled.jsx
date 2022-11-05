import styled from '@emotion/styled';

export const TableHead = styled.thead`
    text-transform: uppercase;

    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.secondary};
    background-color: ${p => p.theme.colors.table};
`;

export const Row = styled.tr`

`;

export const RowHead = styled.th`
    padding: ${p => p.theme.space[3]}px;
    :first-of-type {
        border-radius: ${p  => p.theme.radii.topRight};
        }
        :last-child {
        border-radius: ${p  => p.theme.radii.topLeft};
        }
`;    


export const Data = styled.tbody`
   text-align: center;

   font-size: ${p => p.theme.fontSizes.m}px;
   color: ${p => p.theme.colors.text};
   background-color: ${p =>{return p.line % 2 === 0 ? p.theme.colors.table : p.theme.colors.secondBackground}};
   box-shadow: ${p => p.theme.shadows.transaction};
`;
    
export const Type  = styled.td`
    text-transform: capitalize;

    padding: ${p => p.theme.space[3]}px;
`;

export const Amount  = styled.td`
    padding: ${p => p.theme.space[3]}px;
`;

export const Currency  = styled.td`
    padding: ${p => p.theme.space[3]}px;
  
`;
      