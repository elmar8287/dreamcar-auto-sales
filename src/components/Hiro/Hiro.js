import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container} from "react-bootstrap";
import "./Hiro.css";

function Hiro () {

  return (<div className="hiro">
  <Container className="hiro-content">
    <h1>Dreamcar Auto Sale</h1>
    <p className="hiden-p">
      We are a used cars diller
    </p>
    <p className="apply-button">
      <Button bsStyle="primary" size="lg"><a href="#cars">Get started</a></Button>
    </p>
  </Container>
</div>);

}

export default Hiro;
