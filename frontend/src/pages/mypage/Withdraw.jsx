import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/Mypage/Sidebar';
import Header from '../../components/Mypage/Header';
import Footer from '../../components/Mypage/Footer';
import '../../components/Mypage/styles/Title.css';

function Withdraw() {
  return (
    <div>
      <Header />
      <Container fluid>
        <h2 className='title'>탈퇴하기</h2>
        <Row>
          <Col xs={2} id='sidebar'>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Withdraw;
