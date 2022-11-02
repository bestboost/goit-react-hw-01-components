import styled from '@emotion/styled';

export const Card = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 450px;

    margin-bottom: ${p => p.theme.space[7]}px; 
    border-radius: ${p  => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.profile};
    
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85%;

    background-color: ${p => p.theme.colors.secondBackground};
    border-radius: ${p  => p.theme.radii.top};
`;

export const Avatar = styled.img`
    width: 130px;

    margin-bottom: ${p => p.theme.space[0]};
    background-color: ${p => p.theme.colors.itemBackground};
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
`;
 
export const Username = styled.p`
    margin-bottom: ${p => p.theme.space[0]};
    font-size: ${p => p.theme.fontSizes.l}px;
    font-weight: ${p => p.theme.fontWeights.bolder};
    color: ${p => p.theme.colors.primary}
`;

export const Tag = styled.p`
    margin-bottom: ${p => p.theme.space[0]}; 
    color: ${p => p.theme.colors.text};
`;

export const Location = styled.p`
    margin-bottom: ${p => p.theme.space[0]}; 
    color: ${p => p.theme.colors.text};
`;

export const Stats = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 25%;

    background-color: ${p => p.theme.colors.itemBackground};
    border-radius: ${p  => p.theme.radii.bottom};
`;

export const StatsList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
    border-radius: ${p  => p.theme.radii.bottom};
 `;

export const Label = styled.span`
    color: ${p => p.theme.colors.text};
`;

export const Quantity = styled.span`
    padding-top: ${p => p.theme.space[2]}px;
    font-weight: ${p => p.theme.fontWeights.bolder};
    font-size: ${p => p.theme.fontSizes.l}px;
    color: ${p => p.theme.colors.primary};
`;