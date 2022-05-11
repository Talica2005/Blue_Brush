import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 254 }}
    >
      <Card style={{ width: 760, backgroundColor: "#F0F8FF" }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-4" placeholder="Email" />
          <Form.Control className="mt-3" placeholder="Password" />

          <Button variant={"success"} className="mt-3">
            {isLogin ? "Login" : "Registration"}
          </Button>

          {isLogin ? (
            <div className="mt-2">
              No account?<NavLink to={REGISTRATION_ROUTE}> Registraion</NavLink>
            </div>
          ) : (
            <div className="mt-2">
              Have an account?<NavLink to={LOGIN_ROUTE}> Login</NavLink>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
};
