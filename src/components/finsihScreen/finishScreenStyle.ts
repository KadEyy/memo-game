import styled, {keyframes} from 'styled-components';

interface Props{
    finished: boolean;
}

export const FinishScreenCore = styled.div<Props>`
    position: absolute;
    background: #d23be7;
    width: ${props => props.finished ? '100%' : '0'};
    height: ${props => props.finished ? '100%' : '0'};
    transition: 2.5s;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FinishScreenText = styled.p`
    font-size: 1.2em;
    margin: 0;
    padding: 0;
    text-align: center;
    color: ${({theme}) => theme.colors.content.background};
    width: 300px;
`;

export const Button = styled.div`
    user-select: none;
    cursor: pointer;
    padding: 6px 5px;
    font-size: 1.5em;
    margin: 20px 0;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.content.background};
    &:hover{
        background: ${({theme}) => theme.colors.content.background};
        color: #d23be7;
    }
`;

