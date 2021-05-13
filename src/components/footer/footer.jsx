import { useState } from "react";

import SignBtn from "../sign-btn/btn";

import styled from "styled-components"

const SFooterInfos = styled.div`
    display: flex;

    & > div {
        font-size: .8rem;
        margin: 1rem;
    }
`;

const SFooterInfosMobile = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SFooterPullDown = styled.div`
    display: none;
`;

const SFooterInfoNavs = styled.div`
    display: ${props => props.isOpened ? 'flex' : 'none'};
    justify-content: center;
`;

const SFooterNavsDelimeter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;

    & span {
        font-size: .8rem;
    }
`;

const SFooterSignWrapper = styled.div``;

const SFooterCopyrights = styled.div`
    & span {
        font-size: .8rem;
    }
`;

const SFooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SFooterLinksSoc = styled.div`
    & i {
        margin: 1rem;
        font-size: 1.5rem;
    }
`;

const SFooter = styled.footer`
    grid-area: footer;
    padding: 3rem;
    color: white;
    background: black;

    @media screen and (max-width: 700px) {
        ${SFooterPullDown} {
            display: block;
        }

        ${SFooterInfos} {
            flex-direction: column;
        }

        ${SFooterSignWrapper} {
            display: none;
        }

        ${SFooterLinks} {
            flex-direction: column-reverse;
        }
    }
`;

export default function Footer() {
    const [isNavsOpened, setOpened] = useState(false);
    
    return (
        <SFooter>
            <SFooterInfos>
                <SFooterInfosMobile>
                    <div className="footer-infos-jetlogo">
                        <img src="/logo-invert.png" alt="jetlend logo" />
                    </div>

                    <SFooterPullDown onClick={() => setOpened(!isNavsOpened)} >
                        {isNavsOpened ?  <i class="fa fa-chevron-up" aria-hidden="true"></i> : <i class="fa fa-chevron-down" aria-hidden="true"></i>}
                    </SFooterPullDown>
                </SFooterInfosMobile>

                <SFooterInfoNavs isOpened={isNavsOpened}>
                    <SFooterNavsDelimeter>
                        <span>инвесторам</span>
                        <span>предпринимателям</span>
                        <span>партнерам</span>
                    </SFooterNavsDelimeter>
                    <SFooterNavsDelimeter>
                        <span>документы</span>
                        <span>о платформе</span>
                        <span>новости</span>
                    </SFooterNavsDelimeter>
                </SFooterInfoNavs>

                <div className="footer-info-address">Москва, территория инновационного центра «Сколково», ул. Нобеля, д. 5, эт/пом/раб 2/8/2</div>

                <SFooterSignWrapper>
                    <SignBtn />
                </SFooterSignWrapper>

                <SFooterCopyrights>
                    <span>© 2018 —2021 Все права защищены</span>
                    <span>ООО «ДжетЛэнд», официальный сайт</span>
                    <span>Лицензия ЦБ РФ №18</span>
                </SFooterCopyrights>
            </SFooterInfos>

            <SFooterLinks>
                <SFooterLinksSoc>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    <i className="fa fa-telegram" aria-hidden="true"></i>
                </SFooterLinksSoc>

                <div className="footer-links-bank">
                    <img src="/bank.png" alt="bank russian link" />
                </div>
            </SFooterLinks>
        </SFooter>
    )
}