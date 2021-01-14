import React, {FC} from 'react';
import TileProps from '@myTypes/tile';
import {TileCore, TileInnerContainer, TileInnerBack, TileInnerFront} from './tileStyle';

interface Props extends TileProps{
    id: number;
    background: string;
    onClick(i: number): any;
}

const Tile: FC<Props> = ({id, image, flipped, checked, onClick, background}) => {
    return(
        <TileCore filpped={flipped} checked={checked} onClick={() => checked || flipped ? null : onClick(id)}>
            <TileInnerContainer background={background} filpped={flipped} checked={checked}>
                <TileInnerFront filpped={flipped} checked={checked}/>
                <TileInnerBack>
                    <img src={image}/>
                </TileInnerBack>
            </TileInnerContainer>
        </TileCore>
    )
}

export default Tile;