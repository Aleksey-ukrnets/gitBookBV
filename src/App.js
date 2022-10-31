import './App.css';

import { Routes, Route } from 'react-router-dom';
import Main from './pages/main_page';
import About from './pages/About';
import ComingSoon from './components/comingsoon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
