import styled from "styled-components";

const SSign = styled.div`
    display: flex;
    align-items: center;
    background: #0ED193;
    padding: 1rem;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    box-shadow: 4px 2px 5px 3px #071d164d;
    transition: .5s;

    &:hover {
        color: #0ED193;
        background: #09350b;
    }

    & > * {
        margin: 0 5px;
    }
`;

export default function SignBtn() {
    return (
        <SSign>
            <span>Войти</span>
            <div>
                <img src="/sign.png" alt="sign in" />
            </div>
        </SSign>
    )
}