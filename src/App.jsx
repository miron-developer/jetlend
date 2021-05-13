
import styled from 'styled-components';
import AboutUsBlock from './components/about-us-block/block';
import AdvantagesBlock from './components/advantages-block/block';
import CalculateBlock from './components/calculate-block/block';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import HowGetBlock from './components/how-get-block/block';
import PreviewBlock from './components/preview-block/block';
import SponsorsBlock from './components/sponsors-block/block';

const SApp = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: calc(7vh + 2rem) 1fr max-content;
  flex-direction: column;
  min-height: 100vh;
`;

const SMain = styled.main`
  grid-area: main;
  overflow: hidden;
`;

const SMidBlocks = styled.div`
  position: relative;
`;

function App() {
  return (
    <SApp>
      <Header />
      <SMain>
        <PreviewBlock />
        <AdvantagesBlock />
        <SMidBlocks>
          <HowGetBlock />
          <CalculateBlock />
          <SponsorsBlock />
        </SMidBlocks>
        <AboutUsBlock />
      </SMain>
      <Footer />
    </SApp>
  );
}

export default App;
