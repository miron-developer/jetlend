import styled from 'styled-components';

const SAdvantagesTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
`;

const SAdvantagesCards = styled.div`
    display: flex;
`;

const SAdvantagesCard = styled.div`
    margin: 1rem;
    padding: 2rem;
    background: #F0F5F6;
`;

const SAdvCardText = styled.p`
    font-weight: 300;
`;

const SAdvantages = styled.div`
    padding: 2rem 5rem;

    @media screen and (max-width: 700px) {
        & {
            padding: 2rem;
        }

        ${SAdvantagesCards} {
            flex-direction: column;
        }
    }    
`;

export default function AdvantagesBlock() {
    return (
        <SAdvantages>
            <SAdvantagesTitle>Преимущества оборотного кредита в JetLend</SAdvantagesTitle>

            <SAdvantagesCards>
                <SAdvantagesCard>
                    <h3 className="adv-card-title">Решение за 10 секунд</h3>
                    <SAdvCardText>Просто загрузите два документы и мы оценим ваш бизнес почти моментально</SAdvCardText>
                </SAdvantagesCard>

                <SAdvantagesCard>
                    <h3 className="adv-card-title">Всё онлайн</h3>
                    <SAdvCardText>Без поездок в офис - оформите кредит в личном кабинете</SAdvCardText>
                </SAdvantagesCard>

                <SAdvantagesCard>
                    <h3 className="adv-card-title">Без залога</h3>
                    <SAdvCardText>Одобряем кредит для бизнеса на основании оборотов по расчетным счетам</SAdvCardText>
                </SAdvantagesCard>
            </SAdvantagesCards>
        </SAdvantages>
    )
}