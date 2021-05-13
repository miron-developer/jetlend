import styled from "styled-components";

const SCircle = styled.div`
    position: absolute;
    border: 1px solid #235660;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 5;
`;

const SCircle1 = styled(SCircle)`
    width: 10em;
    height: 10em;
`;

const SCircle2 = styled(SCircle)`
    width: 15em;
    height: 15em;
`;

const SCircle3 = styled(SCircle)`
    width: 20em;
    height: 20em;
`;

const SCircle4 = styled(SCircle)`
    width: 25em;
    height: 25em;
`;

const SCirclesContainer = styled.div`
    position: relative;
    z-index: 0;
    font-size: 1em;
`;

export default function Circles() {
    return (
        <SCirclesContainer>
            <SCircle1/>
            <SCircle2/>
            <SCircle3/>
            <SCircle4/>
        </SCirclesContainer>
    )
}