import {useState, useCallback} from 'react';
import TileProps from '@myTypes/tile';

//Force update to re-render components
const useForceUpdate = () => {
    const [, setTick] = useState(0);
    const update = useCallback(() => {
      setTick(tick => tick + 1);
    }, [])
    return update;
}

//Randomize with new refferences so properties reset automatically
const randomizeArray = (array: TileProps[]): TileProps[] => JSON.parse(JSON.stringify(array)).sort(() => Math.random() - 0.5);
const randomizeColors = (colors: string[], length: number) => {
    const arr: string[] = [];
    for(let i = 0; i < length; i++){
        arr.push(colors[Math.round(Math.random() * (colors.length - 1))]);
    }
    return arr;
}

//randomizedTiles controller hook
export const useGameController = (tiles: TileProps[], colors: string[]) => {
    const forceUpdate = useForceUpdate();
    const [total, setTotal] = useState<number>(0);
    const [clicked, setClicked] = useState<number[]>([]);
    const [randomizedTiles, setRandomizedTiles] = useState<TileProps[]>([...randomizeArray(tiles)]);
    const [randomizedColors, setRandomizedColors] = useState<string[]>([...randomizeColors(colors, tiles.length)]);
    //Reset randomizedTiles controller
    const reset = () => {
        setRandomizedTiles([...randomizeArray(tiles)]);
        setRandomizedColors([...randomizeColors(colors, tiles.length)]);
        setTotal(0);
        setClicked([...[]]);
        forceUpdate();
    }
    //Tile flip function
    const tileFlip = (i: number) => {
        setTotal(total + 1);
        randomizedTiles[i].flipped = true;
        //Case 0 or 1 clicked elems
        if(clicked.length === 0 || 1) clicked.push(i);
        //Case 2 clicked elems
        if(clicked.length === 2){
            clicked.push(i);
            const clicked1 = clicked[0];
            const clicked2 = clicked[1];
            //Case same image tiles
            if(randomizedTiles[clicked1].name === randomizedTiles[clicked2].name){
                setTimeout(() => {
                    randomizedTiles[clicked2].flipped = false;
                    randomizedTiles[clicked1].flipped = false;
                    randomizedTiles[clicked2].checked = true;
                    randomizedTiles[clicked1].checked = true;
                    forceUpdate();
                }, 1000)
                setClicked([...[]]);
            }
            //Case not same image tiles
            else{
                setTimeout(() => {
                    randomizedTiles[clicked2].flipped = false;
                    randomizedTiles[clicked1].flipped = false;
                    forceUpdate();
                }, 3000)
                setClicked([...[]]);
            }
        }
    }
    //Check if randomizedTiles ended
    const finished = randomizedTiles.map(tile => tile.checked).indexOf(false) === -1;
    //Return hook readonly values
    return [randomizedTiles, randomizedColors, total, finished, tileFlip, reset] as const;
}
