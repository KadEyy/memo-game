import styled, {keyframes} from 'styled-components';

interface Props{
    filpped: boolean;
    checked: boolean;
    background?: string;
}

export const TileCore = styled.div<Props>`
    background-color: transparent;
    width: 120px;
    height: 120px;
    perspective: 1000px;
    margin: 10px;
`;

export const TileInnerContainer = styled.div<Props>`
    position: relative;
    width: 100%;
    height: 100%;
    transition: .4s;
    transform-style: preserve-3d;
    transform: ${props => props.filpped ? 'rotateY(180deg)' : props.checked ? 'rotateY(-360deg)' : ''};
    background-color: ${props => props.checked ? '#808080' : props.background};
`;

export const TileInnerFront = styled.div<Props>`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: ${props => props.filpped ? 'rotateY(180deg)' : props.checked ? 'rotateY(-360deg)' : ''};
`;

export const TileInnerBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & > img{
        width: 100px;
        height: auto;
    }
`;