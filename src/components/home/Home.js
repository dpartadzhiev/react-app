import React from "react";
import Profile from "../profile/Profile";
import { Container } from "reactstrap";

const Home = (props) => {
  return (
    <>
      <Profile {...props} />
      <Container>
        <h3>React App - Home</h3>
      </Container>
    </>
  );
};

export default Home;
