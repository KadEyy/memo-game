import React, {FC} from 'react';
import LogoMenu from '@assets/logoMenu.svg';
import {MenuCore, Button} from './menuStyle';

interface Props{
    gameReset(): void;
}

const Menu: FC<Props> = ({gameReset}) => {
    return(
        <MenuCore>
            <Button onClick={gameReset}>Reset</Button>
            <img src={LogoMenu}/>
            <Button>Zasady</Button>
        </MenuCore>
    )
}

export default Menu;