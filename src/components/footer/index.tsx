import React, {FC} from 'react';
import {FooterCore, FooterParagraph} from './footerStyle';

const Footer: FC = () => {
    return(
        <FooterCore>
            <FooterParagraph>Jakub Mizera | 2021</FooterParagraph>
            <FooterParagraph>
                Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/free-icon/brain_2044597?term=memory&page=1&position=16&related_id=2044597&origin=search" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </FooterParagraph>
        </FooterCore>
    )
}

export default Footer;