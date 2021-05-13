import { useState } from "react";

import styled from "styled-components"
import SignBtn from "../sign-btn/btn";

const SMobileBtn = styled.div`
    display: none;
    position: relative;
    width: 25px;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SMobileBtnPeace = styled.span``;
const SLogo = styled.div``;

const SNavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`;

const SNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SNavItem = styled.span`
    margin: 1rem;
    text-transform: lowercase;
    border-bottom: 2px solid transparent;
    transition: .5s;
    cursor: pointer;

    &.active,
    &:hover {
        border-bottom: 2px solid #0ED193;
    }
`;

const SHeader = styled.header`
    grid-area: header;
    position: relative;
    left: 0;
    right: 0;
    padding: 3rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 30;

    @media screen and (max-width: 700px) {
        & {
            position: fixed;
            height: 7vh;
        }
        
        ${SNavWrapper} {
            position: absolute;
            top: 100%;
            left: ${props => props.isOpened ? '0' : '100vw'};
            width: 100vw;
            height: 100vh;
            padding: 1rem;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background: #000000b8;
            transition: 1s;
            z-index: 20;
        }

        ${SNav} {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
        }

        ${SNavItem} {
            padding: 1rem;
            margin: 1rem 0;
            width: calc(100% - 4rem);
            color: white;
            background: #268264;
            border-radius: 5px;
        }

        ${SMobileBtn} {
            display: flex;
        }

        ${SMobileBtnPeace} {
            &::before {
                content: '';
                top: -400%;
            }
            &::after {
                content: '';
                top: 400%;
            }
            &,
            &::before,
            &::after {
                position: absolute;
                display: block;
                height: 2px;
                width: 100%;
                background: #0ED193;
            }
        }
    }
`;

export default function Header() {
    const [isOpened, setOpened] = useState(false);

    return (
        <SHeader isOpened={isOpened}>
            <SLogo>
                <img src="/logo192.png" alt="jetlend logo" />
            </SLogo>

            <SMobileBtn onClick={() => setOpened(!isOpened)}>
                <SMobileBtnPeace />
            </SMobileBtn>

            <SNavWrapper>
                <SNav>
                    <SNavItem>инвесторам</SNavItem>
                    <SNavItem className="active">предпринимателям</SNavItem>
                    <SNavItem>о платформе</SNavItem>
                    <SNavItem>новости</SNavItem>
                </SNav>

                <SignBtn />
            </SNavWrapper>
        </SHeader>
    )
}