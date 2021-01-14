import React, {FC} from 'react';
import LogoMenu from '@assets/logoMenu.svg';
import {MenuCore, Button} from './menuStyle';

interface Props{
    rulesOpen: boolean;
    gameReset(): void;
    toggleMenu(): void;
}

const Menu: FC<Props> = ({rulesOpen, gameReset, toggleMenu}) => {
    return(
        <MenuCore>
            <Button onClick={gameReset}>Restart gry</Button>
            <img src={LogoMenu}/>
            <Button onClick={toggleMenu}>{rulesOpen ? 'Zamknij zasady' : 'Otwórz zasady'}</Button>
        </MenuCore>
    )
}

export default Menu;