import styled from '@emotion/styled';

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    width: calc(100% - 20px * 2); 

    margin-bottom: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[4]}px;  
    background-color: ${p => p.theme.colors.secondBackground};
    box-shadow: ${p => p.theme.shadows.friendList};

    :last-of-type {
        margin-bottom: ${p => p.theme.space[0]};
    }
`;

// const setBgColor = p => {}

export const Status = styled.span`
    width: 5px;
    padding: 10px 7px;  
    margin-right: ${p => p.theme.space[4]}px;
    background-color: ${p => {return p.status ? p.theme.colors.online : p.theme.colors.offline}};
    border-radius: ${p => p.theme.radii.round}; 
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
      color: ${p => p.theme.colors.primary}
`;