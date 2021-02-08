import React, { FC } from 'react';
import { Container, Row, Col, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Button, H3, P } from 'bt/custom'
import detectives from '../assets/img/detectives.png';

const Error: FC = () => (
  <div className="notfound">
    <Container>
      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 0, offset: 1 }} className="content">
          <div>
            <H3 className="mb-3"> Uh oh. </H3>
            <P>Looks like the page you&apos;re looking for doesn&apos;t exist.</P>
            <P className="mb-3">Here are a couple of things you can do.</P>
            <ButtonToolbar>
              <ButtonGroup className="mr-2">
                <Button className="bt-btn-primary" href={{ as_link: "/catalog" }}>
                  Back to Catalog
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button className="bt-btn-inverted" href={{ as_link: "/bugs" }}>
                  Report a Bug
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={4} className="splash mb-3">
          <img src={detectives} alt='Searching for what you were looking for...' />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Error;
