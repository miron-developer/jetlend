import { useState } from "react"

import styled from "styled-components";

const SSponsorsTitles = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SSponsorsTitle = styled.div`
    margin: 1rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: ${props => props.isActive ? '#0ED193' : 'black'};
    border-bottom: 2px dashed;
    border-color: ${props => props.isActive ? '#0ED193' : 'transparent'};
    cursor: pointer;
`;

const SSponsorsLogos = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const SSponsorLogo = styled.div`
    padding: 2rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc((100% / 7) - 2rem);
    background: white;
    transition: 1s;

    & img {
        width: 100%;
    }

    &:hover {
        background: #0ED193;
    }
`;

const SSponsors = styled.div`
    padding: 5rem;
    padding-top: 15rem;
    background: #E5E5E5;

    @media screen and (max-width: 700px) {
        & {
            padding-top: 20rem;
        }

        ${SSponsorLogo} {
            width: calc(50% - 2rem);
        }
    }
`;

export default function SponsorsBlock() {
    const [isSMI, setSMI] = useState(false);
    return (
        <SSponsors>
            <SSponsorsTitles>
                <SSponsorsTitle isActive={isSMI} onClick={() => setSMI(true)}>СМИ о нас</SSponsorsTitle>
                <SSponsorsTitle isActive={!isSMI} onClick={() => setSMI(false)}>Наши партнеры</SSponsorsTitle>
            </SSponsorsTitles>

            <SSponsorsLogos>
                <SSponsorLogo isActive={true}>
                    <img src="/forbes.png" alt="forbes" />
                </SSponsorLogo>
                <SSponsorLogo>
                    <img src="/comers.png" alt="comers" />
                </SSponsorLogo>
                <SSponsorLogo>
                    <img src="/rbk.png" alt="rbk" />
                </SSponsorLogo>
                <SSponsorLogo>
                    <img src="/vedomosty.png" alt="vedomosti" />
                </SSponsorLogo>
                <SSponsorLogo>
                    <img src="/vk.png" alt="vc" />
                </SSponsorLogo>
                <SSponsorLogo>
                    <img src="/republic.png" alt="republic" />
                </SSponsorLogo>
                <SSponsorLogo>
                    <img src="/banki.png" alt="banki" />
                </SSponsorLogo>
            </SSponsorsLogos>
        </SSponsors>
    )
}