import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;

    width: 350px; 
    height: 100%;
    background-color: yellow;
`;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 20px;
   
    width: 100%; 
    background-color: rgb(200, 150, 300);
`;

export const Status = styled.span`
`;

export const FriendAvatar = styled.img`
`;

export const FriendName = styled.p`
`;