import styled from 'styled-components';

export const MenuCore = styled.div`
    width: calc(100% - 60px);
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
    background: ${({theme}) => theme.colors.content.font};
    & > img{
        height: 40px;
    }
`;

export const Button = styled.div`
    user-select: none;
    cursor: pointer;
    padding: 6px 5px;
    font-size: 1.3em;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.content.background};
    &:hover{
        background: ${({theme}) => theme.colors.content.background};
        color: ${({theme}) => theme.colors.content.font};
    }
`;