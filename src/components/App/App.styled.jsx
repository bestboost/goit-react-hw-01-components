import styled from '@emotion/styled'; 

export const Container = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // width: 1250px;

        padding: ${p => p.theme.space[7]}px;
        margin: ${p => p.theme.space[0]}px;
        background: ${p => p.theme.colors.background};

`;