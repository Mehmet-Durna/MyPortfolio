import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="logo"> {"</Mehmet>"} </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mehmetdurna/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="linkedIn" />
              </a>
              <a
                href="https://github.com/Mehmet-Durna"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="github" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
