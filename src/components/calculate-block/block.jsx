import { useState } from "react";

import GetCreditBtn from "../get-credit-btn/btn";

import styled, { css } from "styled-components";

const SCalculateTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
`;

const SCalculateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem;
`;

const SCalculateCalculator = styled.div`
    width: 75%;
`;

const SThumb = css`
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    box-shadow: -100vw 0 0 100vw #0ED193;
    z-index: 5;
`;

const STrack = css`
    height: 2px;
`;

const SCalculateInputThumb = styled.label`
    position: absolute;
    padding: 0;
    left: ${props => props.value + '%'};
    bottom: 0;
    width: 1rem;
    height: 1rem;
    border: 5px solid #0ED193;
    border-radius: 50%;
    box-shadow: 0 0 0px 10px rgb(14 209 147 / 25%);
    transform: translate3d(-50% , calc(50% - .5rem), 0);
    z-index: 0;
`;

const SCalculateInputLabel = styled.label`
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid #E4ECEE;
`;

const SCalculatorInput = styled.input`
    -webkit-appearance: none;
    position: relative;
    transform: translateY(-5px);
    outline: none;
    overflow: hidden;

    /* thumb */
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        transform: translateY(-50%);
        ${SThumb}
    }

    ::-moz-range-thumb{
        ${SThumb}
    }

    ::-ms-thumb {
        ${SThumb}
    }

    /* track */
    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        ${STrack}
    }

    &::-moz-range-track{
        ${STrack}
    }

    &::-ms-track {
        ${STrack}
    }
`;

const SCalculateOptionHint = styled.span`
    position: absolute;
    bottom: 0;
    left: ${props => props.isLeft ? 0 : ''};
    right: ${props => props.isLeft ? '' : 0};
    font-weight: 300;
    transform: translateY(100%);
`;

const SCalculatorOption = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
`;

const SCalculatorOptionTitle = styled.div`
    font-size: .9rem;
    font-weight: 500;
`;

const SCalculateSummary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SCalculateSummaryTitle = styled.span`
    font-size: .9rem;
    font-weight: 300;
`;

const SCalculateSummarySumm = styled.span`
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
`;

const SCalculateSummaryHR = styled.hr`
    width: 80%;
    height: 3px;
    background: black;
`;

const SCalculate = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin: 0 5rem;
    padding: 2rem;
    background: white;
    transform: translateY(-50%);

    @media screen and (max-width: 700px) {
        & {
            margin: 2rem;
            padding: 2rem;
            top: 40%;
        }

        ${SCalculateContainer} {
            flex-direction: column;
            margin: 0;
        }

        ${SCalculateCalculator},
        ${SCalculateSummary} {
            width: 100%;
        }
    }
`;

const onChangeRange = (e, upd = ()=>{}) => upd(e.target.value);

export default function CalculateBlock() {
    const [cash, setCash] = useState(1000000);
    const [month, setMonth] = useState(1);

    return (
        <SCalculate>
            <SCalculateTitle>Калькулятор заемщика</SCalculateTitle>

            <SCalculateContainer>
                <SCalculateCalculator>
                    <SCalculatorOption>
                        <SCalculateOptionHint isLeft={true}>500000 руб</SCalculateOptionHint>
                        <SCalculateOptionHint>10000000 руб</SCalculateOptionHint>

                        <SCalculatorOptionTitle>Желаемая сумма кредита</SCalculatorOptionTitle>
                        <SCalculateInputLabel htmlFor="calculator-cash">{cash} {"₽"}</SCalculateInputLabel>
                        <SCalculateInputThumb htmlFor="calculator-cash" value={parseInt(cash)/10000000 * 100} />
                        <SCalculatorInput type="range" id="calculator-cash" value={cash} min="0" max="10000000" onChange={e => onChangeRange(e, setCash)} />
                    </SCalculatorOption>

                    <SCalculatorOption>
                        <SCalculateOptionHint isLeft={true}>1 месяц</SCalculateOptionHint>
                        <SCalculateOptionHint>12 месяцев</SCalculateOptionHint>

                        <SCalculatorOptionTitle>Срок кредита</SCalculatorOptionTitle>
                        <SCalculateInputLabel htmlFor="calculator-month">{month} мес.</SCalculateInputLabel>
                        <SCalculateInputThumb htmlFor="calculator-month" value={parseInt(month)/12 * 100} />
                        <SCalculatorInput type="range" value={month} id="calculator-month" min="0" max="12" onChange={e => onChangeRange(e, setMonth)} />
                    </SCalculatorOption>
                </SCalculateCalculator>

                <SCalculateSummary>
                    <SCalculateSummaryTitle>Ежемесячный платеж</SCalculateSummaryTitle>
                    <SCalculateSummarySumm>{parseInt(parseInt(cash) / parseInt(month)) || cash} {"₽"}</SCalculateSummarySumm>
                    <SCalculateSummaryHR />
                    <GetCreditBtn />
                </SCalculateSummary>
            </SCalculateContainer>
        </SCalculate>
    )
}