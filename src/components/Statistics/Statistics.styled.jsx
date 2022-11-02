import styled from '@emotion/styled';

export const StatCard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
 
    margin-bottom: ${p => p.theme.space[7]}px; 
    border-radius: ${p  => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.secondBackground};
`;
export const StatTitle = styled.h2`
    padding: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.primary};    
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center; 
    width: 100%;

    margin: ${p => p.theme.space[0]}; 
    padding: ${p => p.theme.space[0]};
    background-color: rgb(200, 150, 300);
    border-radius: ${p  => p.theme.radii.bottom};
`;

export const StatKey = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 4);

    padding: ${p => p.theme.space[4]}px;
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
    border-radius: ${p  => p.theme.radii.bottom};
`;
      

export const StatLabel = styled.span`
    padding-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.secondary};
`;

export const Percentage = styled.span`
    font-size: ${p => p.theme.fontSizes.xl}px;
    color: ${p => p.theme.colors.secondary};
`;
