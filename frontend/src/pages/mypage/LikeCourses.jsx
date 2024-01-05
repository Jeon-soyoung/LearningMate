import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/Mypage/Sidebar';
import Header from '../../components/Header';

function LikeCourses() {
  return (
    <div>
      <Header />
      <Container fluid>
        <h1>LikeCourses</h1>
        <Row>
          <Col xs={2} id='sidebar'>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LikeCourses;
