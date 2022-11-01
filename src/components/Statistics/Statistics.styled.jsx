import styled from '@emotion/styled';

export const StatCard = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    width: 400px;
    height: 200px;
    background-color: yellow;
`;
export const StatTitle = styled.h2`
    padding: auto;
    margin: auto;
    color: rgb(120, 120, 120);
    
`;

export const StatList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 45%;
    background-color: rgb(200, 150, 300);
`;

export const StatKey = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

 width: calc(100% / 4);
 border: 1px solid rgb(199, 200, 201);
`;
      

export const StatLabel = styled.span`
    padding-bottom: 10px;
    font-size: 15px;
    color: white;
`;

export const Percentage = styled.span`
    font-size: 25px;
    color: white;
`;
