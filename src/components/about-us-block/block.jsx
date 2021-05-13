import styled from "styled-components"

const SAboutUsScreen = styled.div`
    position: relative;
    width: 50%;
    /* filter: brightness(0.7); */

    & img {
        width: 100%;
        height: 100%;
    }

    &:after {
        content: '\f144';
        font-family: "FontAwesome";
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 4rem;
        transform: translate3d(-50%, -50%, 0);
        z-index: 20;
    }
`;

const SAboutUsScreenLogo = styled.div`
    position: absolute;
    width: 25%;
    top: 40%;
    left: 46%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 10;
    
    & img {
        width: 100%;
    }
`;

const SAboutUsScreenEraser = styled.div`
    position: absolute;
    width: 25%;
    height: 10%;
    top: 40%;
    left: 46%;
    background: white;
    transform: translate3d(-50%, -50%, 0);
    z-index: 5;
`;

const SAboutUsScreenDark = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #0000007d;
    z-index: 15;
`;

const SAboutUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem;
    width: 50%;
    color: white;
    background: #0ED193;
`;

const SAboutUsTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
`;

const SAboutUsText = styled.p`
    margin: 1rem 0;
`;

const SAboutUs = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;

    @media screen and (max-width: 700px) {
        & {
            flex-direction: column-reverse;
        }

        ${SAboutUsScreen} {
            width: 100%;
        }

        ${SAboutUsInfo} {
            width: 100%;
            padding: 2rem;
        }
    }
`;

export default function AboutUsBlock() {
    return (
        <SAboutUs>
            <SAboutUsScreen>
                <SAboutUsScreenDark />
                <SAboutUsScreenEraser />
                <SAboutUsScreenLogo>
                    <img src="/logo512.png" alt="logo" />
                </SAboutUsScreenLogo>
                <img src="/screen.png" alt="screen" />
            </SAboutUsScreen>

            <SAboutUsInfo>
                <SAboutUsTitle>Jetlend — надежный партнер</SAboutUsTitle>
                <SAboutUsText>
                    Спонсорство искажает бренд. Диктат потребителя, как принято считать, обычно правомочен. 
                    Стоит отметить, что управление брендом исключительно экономит потребительский conversion rate, отвоевывая свою долю рынка. 
                    Повышение жизненных стандартов притягивает опрос, учитывая современные тенденции. Повторный контакт, в рамках сегодняшних воззрений, версифицирован. 
                    Селекция бренда традиционно консолидирует рейтинг.
                </SAboutUsText>
            </SAboutUsInfo>
        </SAboutUs>
    )
}