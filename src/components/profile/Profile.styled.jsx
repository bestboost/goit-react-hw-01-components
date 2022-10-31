import styled from '@emotion/styled';

export const Card = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    width: 350px;
    height: 450px;
    box-shadow: 0 0 5px 1px rgb(201, 199, 199);
    
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 99%;
    height: 85%;
    background-color: white;
    border: 1px solid rgb(201, 199, 199);
    border-radius: 4px 4px 0 0;
`;

export const Avatar = styled.img`
    margin-bottom: 0;
    width: 130px;
    border-radius: 50%;
    border: 1px solid rgb(199, 200, 201);
`;
 
export const Username = styled.p`
    margin-bottom: 0;
    font-size: large;
`;

export const Tag = styled.p`
    margin-bottom: 0;
    color: gray;
`;

export const Location = styled.p`
    margin-bottom: 0;
    color: gray;
`;

export const Stats = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 25%;
    background-color: rgb(236, 237, 241);
`;

export const StatsList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
     width: calc(100% / 3);
     border: 1px solid rgb(199, 200, 201);
 `;

export const Label = styled.span`
    color: gray;
`;

export const Quantity = styled.span`
    padding-top: 5px;
    font-weight: bold;
    font-size: 20px;
`;