import styled from "styled-components"

const SBtn = styled.div`
    position: relative;
    padding: 1rem;
    margin: 1rem 0;
    width: max-content;
    color: white;
    background: #0ED193;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10;
    box-shadow: 4px 2px 5px 3px #071d164d;
    transition: .5s;

    &:hover {
        color: #0ED193;
        background: #09350b;
    }
`;

export default function GetCreditBtn() {
    return <SBtn>Получить кредит</SBtn>
}