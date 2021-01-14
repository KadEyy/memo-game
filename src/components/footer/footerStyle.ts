import styled from 'styled-components';

export const FooterCore = styled.div`
    background: ${({theme}) => theme.colors.content.font};
    width: 100%;
    height: 50px;
    color: ${({theme}) => theme.colors.content.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 0;
`;

export const FooterParagraph = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 0.7em;
    & > a, a:visited{
        text-decoration: none;
        color: ${({theme}) => theme.colors.content.theme};
    }
`;