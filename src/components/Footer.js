import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footers = (props) => {
  return (
    <footer className="bg-dark">
       <Container>
            <Row className="show-grid">
                <Col xs={6} md={6}>
                    <div className="text-left col ">
                        <p className="social">
                            <iframe src="https://ghbtns.com/github-btn.html?user=angemort&amp;repo=nodejs-angemort&amp;type=star&amp;count=true" frameBorder="0" scrolling="0" width="100" height="20px" title="star"></iframe>
                            <iframe src="https://ghbtns.com/github-btn.html?user=angemort&amp;repo=nodejs-angemort&amp;type=fork&amp;count=true" frameBorder="0" scrolling="0" width="100" height="20px" title="fork"></iframe>
                        </p>
                    </div>
                </Col>
                <Col xs={6} md={6}>
                    <div className="text-right">
                        <p>© 2018 Copyright <a href="https://angemort.com">AngeMort.com</a></p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  );
};

export default Footers;