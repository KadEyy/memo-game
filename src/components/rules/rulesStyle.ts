import styled from 'styled-components';

interface Props{
    open: boolean;
}

export const RulesCore = styled.div<Props>`
    position: absolute;
    background: ${({theme}) => theme.colors.content.theme};
    width: calc(100% - 20px);
    height: ${props => props.open ? 'calc(100% - 20px)' : '0'};
    transition: 1s;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RulesTitle = styled.h1`
    color: ${({theme}) => theme.colors.content.background};
    padding: 0;
    margin: 0;
    font-size: 1.5em;
    text-align: center;
`;

export const RulesList = styled.ul`
    list-style-type: none;
    width: 300px;
    color: ${({theme}) => theme.colors.content.theme};
    padding: 0;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    & > li {
        padding: 5px 6px;
        margin: 5px 0;
        background: ${({theme}) => theme.colors.content.background};
        font-size: 0.8em;
    }
`;