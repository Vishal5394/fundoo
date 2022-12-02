import logo from './logo.svg';
import './App.css';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import Header from './components/header/header';
import TakeNote1 from './components/takeNote1/takeNote1';
import TakeNote2 from './components/takeNote2/takeNote2';
import Dashboard from './components/Dashboard/dashboard';
import TakeNote3 from './components/takenote3/takenote3';
import MiniDrawer from './components/drawaer/drawer';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import PrimarySearchAppBar from './components/headermui';
import Router1 from './components/router/router';

function App() {
  return (
    <div className="App">
      {/* <MiniDrawer/> */}
      {/* <Dashboard/> */}
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <Header/> */}
      {/* <TakeNote1/> */}
      {/* <TakeNote2/> */}
      {/* <TakeNote3 /> */}

      <Provider store={store}>
        {/* <Dashboard /> */}
        <Router1/>
      </Provider>
      {/* <PrimarySearchAppBar/> */}
    </div>
  );
}

export default App;
