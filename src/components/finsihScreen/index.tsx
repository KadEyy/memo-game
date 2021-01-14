import React, {FC, useState} from 'react';
import {FinishScreenCore, FinishScreenText, Button} from './finishScreenStyle';

interface Props{
    finished: boolean;
    total: number;
    gameReset(): void;
}

const FinsishScreen: FC<Props> = ({finished, total, gameReset}) => {

    return(
        <FinishScreenCore finished={finished}>
            <FinishScreenText>
                Gratulacje! Udało ci się połączyć wszystkie pary kafelków. Aby zapamięciać ich położe to zrobić odkryłeś je {total} razy!<br/>
                <Button onClick={() => gameReset()}>Resetuj grę</Button>
            </FinishScreenText>
        </FinishScreenCore>
    )
}

export default FinsishScreen;