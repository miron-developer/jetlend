import Circles from "../circles/circles";

import styled from "styled-components"

const SHowGetTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
`;

const SHowGetStepCirlce = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid;
    border-radius: 50%;
    z-index: 10;
`;

const SHowGetStepText = styled.span`
    text-align: center;
`;

const SHowGetStep = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    padding: 1rem;
    
    &:not(:first-child):after {
        content: '';
        position: absolute;
        top: calc(1rem + 30px);
        left: -50%;
        width: 100%;
        height: 5px;
        background: #0ED193;
        z-index: 5;
    }

    & ${SHowGetStepCirlce} {
        background: ${props => props.isActive ? '#0ED193' : 'black'};
        box-shadow: ${props => props.isActive ? '0 0 0px 10px rgb(14 209 147 / 25%)' : ''};
        border-color: ${props => props.isActive ? 'transparent' : '#0ED193'};
    }

    & ${SHowGetStepText} {
        font-weight: ${props => props.isActive ? '500' : '300'};
    }
`;

const SHowGetSteps = styled.div`
    position: relative;
    display: flex;
    margin: 4rem;
`;

const SCirlces = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);

    & * {
        font-size: 40px;
    }
`;

const SHowGet = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    padding-bottom: 15rem;
    color: white;
    background: radial-gradient(70.23% 381.6% at 6.53% 10.52%,#0A2E37 36.32%,#000000 100%);
    overflow: hidden;

    @media screen and (max-width: 700px) {
        & {
            padding: 2rem;
            padding-bottom: 20rem;
        }

        ${SHowGetSteps} {
            flex-direction: column;
            margin: 2rem;
        }

        ${SHowGetStep} {
            flex-direction: row;
            width: 100%;
        }

        ${SHowGetStep}:not(:first-child):after {
            left: calc(1rem + 30px);
            top: -50%;
            height: 100%;
            width: 5px;
        }

        ${SHowGetStepCirlce} {
            margin-right: 1rem;
            margin-bottom: 0;
        }

        ${SHowGetStepText} {
            text-align: left;
        }
    }
`;

export default function HowGetBlock() {
    return (
        <SHowGet>
            <SCirlces>
                <Circles/>
            </SCirlces>

            <SHowGetTitle>Как получить оборотный кредит</SHowGetTitle>

            <SHowGetSteps>
                <SHowGetStep isActive={true}>
                    <SHowGetStepCirlce>1</SHowGetStepCirlce>
                    <SHowGetStepText>Пройдите регистрацию</SHowGetStepText>
                </SHowGetStep>

                <SHowGetStep>
                    <SHowGetStepCirlce>2</SHowGetStepCirlce>
                    <SHowGetStepText>Получите предварительное решение</SHowGetStepText>
                </SHowGetStep>

                <SHowGetStep>
                    <SHowGetStepCirlce>3</SHowGetStepCirlce>
                    <SHowGetStepText>Пройдите верификацию и получите деньги</SHowGetStepText>
                </SHowGetStep>
            </SHowGetSteps>
        </SHowGet>
    )
}