import React, {FC} from 'react';
import {SubTitleCore, SubTitleParagraph} from './subTitleStyle';

interface Props{
    count: number;
}

const SubTitle: FC<Props> = ({count}) => {
    return(
        <SubTitleCore>
            <SubTitleParagraph>Przetestuj swoją pamięć!</SubTitleParagraph>
            <SubTitleParagraph>Licznik kliknięć: {count}</SubTitleParagraph>
        </SubTitleCore>
    )
}

export default SubTitle;