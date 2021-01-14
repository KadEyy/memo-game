import React, {FC} from 'react';
import {RulesCore, RulesList, RulesTitle} from './rulesStyle';

interface Props{
    open: boolean;
    toggleMenu(): void;
}

const Rules: FC<Props> = ({open, toggleMenu}) => {
    return(
        <RulesCore open={open}>
            <RulesTitle>Zasady</RulesTitle>
            <RulesList>
                <li>Na planszy mamy 20 pól, do których przypisane są obrazki</li>
                <li> Po kliknięciu pola obrazek się odsłania. Po kliknięciu drugiego pola - jeśli trafiliśmy na taki sam obrazek, pola pozostają odkryte i stają się nieaktywne, w przeciwnym przypadku oba obrazki są widoczne przez 5 sekund (lub do ponownego kliknięcia), po czym się zakrywają</li>
                <li>Gra toczy się do "oczyszczenia" całej planszy</li>
                <li>dostępny jest przycisk restartujący grę - wówczas wszystkie obrazki zostają zakryte i ponownie umieszczone losowo na planszy</li>
            </RulesList>
        </RulesCore>
    )
}

export default Rules;