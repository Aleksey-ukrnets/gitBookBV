import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import MainWrapper from './pages/main_page';
import Main from './pages/Main';
import ComingSoon from './components/comingsoon';
import Gameplay from './pages/Gameplay';
import Docs from './pages/Docs';
import Lore from './pages/Lore';
import AboutProject from './pages/AboutProject';
import ComicsPosts from './components/Lore/Comics/ComicsPosts';
import ComicsPost from './components/Lore/Comics/ComicsPost';
import Comics from './components/Lore/Comics/Comics';
import GlossaryMain from './components/Lore/GlossaryMain';
import Media from './components/Lore/Media';

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutProject />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/lore" element={<Lore />}>
            <Route path="media" element={<Media />} />
            <Route path="glossary" element={<GlossaryMain />} />
            <Route path="comics" element={<Comics />} />
            <Route path="comics/:seasonId" element={<ComicsPosts />} />
            <Route
              path="comics/:seasonId/:episodeId"
              element={<ComicsPost />}
            />
          </Route>

          <Route path="/*" element={<ComingSoon />} />
          <Route path="/comics" element={<Navigate to="/" />}></Route>
          <Route path="/lore" element={<Navigate to="/lore/Media" />} />
        </Routes>
      </MainWrapper>
    </div>
  );
}

export default App;
