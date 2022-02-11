import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/index';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
