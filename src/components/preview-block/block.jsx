import GetCreditBtn from "../get-credit-btn/btn";
import Circles from "../circles/circles";

import styled from "styled-components"

const SNavContainter = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

const SNavItem = styled.span`
    position: relative;
    margin: 0 2rem;
    color: white;
    border-bottom: 2px solid transparent;
    transition: .5s;
    cursor: pointer;

    &.active,
    &:hover {
        border-bottom: 2px solid #0ED193;
    }
`;

const SDelimeter = styled.span`
    height: 100%;
    width: 2px;
    background: #0ED193;
`;

const SBankLogo = styled.div`
    width: 12rem;
    transform: translateY(-100%);

    & img {
        width: 100%;
        height: 100%;
    }
`;

const SNavAndBank = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    word-break: break-word;
    z-index: 10;
`;

const SCreditText = styled.h1`
    font-size: 5rem;
    font-weight: 500;
`;

const SCreditHints = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
        display: flex;
        align-items: center;
    }

    & span::before {
        content: '';
        width: 1rem;
        height: 1rem;
        margin: 5px;
        display: block;
        border-radius: 50%;
        background: #0ED193;
    }
`;

const SCredit = styled.div`
    position: relative;
    width: 60%;
    color: white;
    z-index: 10;
`;

const SCirlces1 = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    & * {
        font-size: 25px;
    }
`;

const SCirlces2 = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    & * {
        font-size: 30px;
    }
`;

const SPreviewMan = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 80%;
    transform: translateX(25%);

    & img {
        width: 100%;
        height: 100%;
    }
`;

const SPreviewContainer = styled.div`
    position: relative;
    padding: 5rem;
    background: radial-gradient(70.23% 381.6% at 6.53% 10.52%, #0A2E37 36.32%, #000000 100%);
    overflow: hidden;

    @media screen and (max-width: 700px) {
        & {
            padding: 3rem;
        }

        ${SCirlces1}, 
        ${SCirlces2} {
            * {
                font-size: 1rem;
            }
        }

        ${SNavAndBank} {
            flex-direction: column-reverse;
            align-items: flex-end;
        }

        ${SNavContainter} {
            width: 100%;
        }

        ${SNavItem} {
            margin: 0;
            font-size: 1.5rem;
        }

        ${SBankLogo} {
            transform: none;
        }

        ${SCreditText} {
            font-size: 3rem;
        }

        ${SCreditHints} {
            flex-direction: column;
            align-items: flex-start;
        }
    }
`;

export default function PreviewBlock() {
    return (
        <SPreviewContainer>
            <SCirlces1>
                <Circles/>
            </SCirlces1>

            <SCirlces2>
                <Circles/>
            </SCirlces2>

            <SPreviewMan>
                <img src="/preview-man.png" alt="preview man" />
            </SPreviewMan>

            <SNavAndBank>
                <SNavContainter>
                    <SNavItem className="active">Обзор</SNavItem>
                    <SDelimeter>|</SDelimeter>
                    <SNavItem>Условие</SNavItem>
                    <SDelimeter>|</SDelimeter>
                    <SNavItem>Вопросы</SNavItem>
                </SNavContainter>

                <SBankLogo>
                    <img src="/bank.png" alt="bank logo" />
                </SBankLogo>
            </SNavAndBank>

            <SCredit>
                <SCreditText>Кредит на пополнение оборотных средств</SCreditText>
                <SCreditHints>
                    <span>Сумма до 5 000 000 ₽</span>
                    <span>Ставка от 11% годовых</span>
                    <span>Срок до 12 месяцев</span>
                </SCreditHints>
            </SCredit>

            <GetCreditBtn />
        </SPreviewContainer>
    )
}