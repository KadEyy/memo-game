import React, {useState} from 'react';
import styled from 'styled-components';
import Tile from '@components/tile';
import {ThemeProvider} from 'styled-components';
import {MainContainer, AppContent, Title} from '@components/appCore';
import Footer from '@components/footer';
import SubTitle from '@components/subTitle';
import Menu from '@components/menu';
import FinishScreen from '@components/finsihScreen';
import Rules from '@components/rules';
import {useGameController} from './game';
import theme from './theme';
import tiles from './tiles';

const TileContainer = styled.div`
    display: flex;
    max-width: 700px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    position: relative;
`;

const App: React.FC = () => {

    const [randomizedTiles, randomizedColors, total, finished, flip, reset] = useGameController(tiles, theme.colors.tiles);
    const [rulesOpen, setRulesOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setRulesOpen(!rulesOpen);
    }

    return(
        <ThemeProvider theme={theme}>
            <MainContainer>
                <FinishScreen finished={finished} gameReset={reset} total={total}/>
                <AppContent>
                    <Title>Memo-game</Title>
                    <SubTitle count={total}/>
                    <TileContainer>
                        <Rules open={rulesOpen} toggleMenu={toggleMenu}/>
                        {randomizedTiles.map((tile, i) => <Tile background={randomizedColors[i]} onClick={flip} key={i} id={i} name={tile.name} image={tile.image} checked={tile.checked} flipped={tile.flipped}/>)}
                    </TileContainer>
                    <Menu rulesOpen={rulesOpen} gameReset={reset} toggleMenu={toggleMenu}/>
                </AppContent>
                <Footer/>
            </MainContainer>
        </ThemeProvider>
    )
}


export default App;