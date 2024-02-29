import './figma.css';
import NavBar from './components/NavBar';
import Content1 from './components/Content1';
import MarketData from './components/marketData';
import Content2 from './components/Content2';
import Content3H from './components/Content3H';
import Content_3_Paragraph from "./components/Content_3_Paragraph";
import Content3_M_C from './components/Content3_M_C';
import Content4 from './components/Content4';
import Content5 from './components/Content5';
import Content6 from './components/Content6';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function Main() {
  return (
    <>

      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path='/'
            element={<><Content1 /></>}
          ></Route>
          <Route
            exact
            path='/Mark/Con2'
            element={<> <Content2 />,<MarketData /></>}
          ></Route>
          <Route
            exact
            path='/Mark/Con2/Con3'
            element={<><Content3H />,<Content_3_Paragraph />, <Content3_M_C /></>}
          ></Route>
          <Route
            exact
            path='/Mark/Con2/Con3/Con4/Con5'
            element={<><Content4 />,<Content5 /></>}
          ></Route>
          <Route
            exact
            path='/Mark/Con2/Con3/Con4/Con5/Con6'
            element={<><Content6 /></>}
          ></Route>

        </Routes>
        <Content1 />
        <MarketData />
        <Content2 />
        <Content3H />
        <Content_3_Paragraph />
        <Content3_M_C />
        <Content4 />
        <Content5 />
        <Content6 />
        <Footer />
      </Router>

    </>
  );
}

export default Main;
