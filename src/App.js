import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/header";
import { HomePage } from "./pages/home-page/home-page";
import { store } from "./redux";
import GamePage from './pages/game-page/game-page';
import OrderPage from "./pages/order-page/order-page";


function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/app/:title" element={<GamePage />} />
            <Route exact path="/order" element={<OrderPage />} />
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
