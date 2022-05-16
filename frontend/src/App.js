import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { NavBarAll } from "./components/NavBarAll";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }
  return (
    <BrowserRouter>
      <NavBarAll />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
