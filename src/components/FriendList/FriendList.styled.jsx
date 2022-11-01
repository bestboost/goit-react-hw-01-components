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
   
    width: calc(100% - 20px * 2); 
    background-color: rgb(200, 150, 300);
    box-shadow: 0 0 5px 1px rgb(201, 199, 199);
`;

export const Status = styled.span`
    margin-right: 15px;
`;

export const FriendAvatar = styled.img`
    margin-right: 15px;
    border-radius: 4px;
    border: 1px solid rgb(199, 200, 201);
   
`;

export const FriendName = styled.p`
      font-size: 25px;
      font-weight: bolder;
`;