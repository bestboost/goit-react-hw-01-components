import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 350px; 

    margin: ${p => p.theme.space[0]}; 
    padding: ${p => p.theme.space[0]}; 
    
    background-color: yellow;
`;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    width: calc(100% - 20px * 2); 

    margin-bottom: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[4]}px;  
    background-color: ${p => p.theme.colors.secondBackground};
    box-shadow: ${p => p.theme.shadows.friendList};
`;

export const Status = styled.span`
    margin-right: ${p => p.theme.space[4]}px;
`;

export const FriendAvatar = styled.img`
    margin-right: ${p => p.theme.space[4]}px;
    border-radius: ${p  => p.theme.radii.normal};
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
   
`;

export const FriendName = styled.p`
      font-size: ${p => p.theme.fontSizes.xl}px;
      font-weight: ${p => p.theme.fontWeights.bolder};
`;