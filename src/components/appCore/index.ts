import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    font-family: ${({theme}) => theme.fontFamily}, 'sans-serif';
    background: ${({theme}) => theme.colors.content.background};
    color: ${({theme}) => theme.colors.content.font};
`;

export const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    max-width: 740px;
    margin: auto;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    width: calc(100% - 20px);
    padding: 0 10px;
`;