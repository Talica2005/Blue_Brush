import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { NavBarAll } from "./components/NavBarAll";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBarAll />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
