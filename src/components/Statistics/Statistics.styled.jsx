import styled from '@emotion/styled';

export const StatTitle = styled.h2`
    text-transform: uppercase;

    padding: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.title};    
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
    width: calc(100% / 5);

    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
    :first-of-type {
        border-radius: ${p  => p.theme.radii.topRight};
        }
        :last-child {
        border-radius: ${p  => p.theme.radii.topLeft};
        }
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
