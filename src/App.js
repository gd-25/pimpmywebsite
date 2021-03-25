import logo from './logo.svg';
import './styles/index.css';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/views/Landing'
import Run from './components/views/Run'

import Navbar from './components/utils/Navbar'
import Footer from './components/utils/Footer'
import Overview from './components/views/Overview';
import Contact from './components/views/Contact';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
   return (
      <>
         <ScrollToTop />
         <Switch>
            <Route exact path="/" component={Run}></Route>
            <Route path="/home" component={Landing}></Route>
            <Route path="/overview" component={Overview}></Route>
            <Route path="/contact" component={Contact}></Route>
         </Switch>
         <Footer />
      </>
   );
}

export default App;
