import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserId from '../../components/Mypage/UserId';
import MyCalendar from '../../components/Mypage/Calendar';
import Sidebar from '../../components/Mypage/Sidebar';
import '../../components/Mypage/styles/Title.css';

function Mypage() {
  return (
    <div>
      <Container fluid>
        <h2 className='title'>내 일정 조회하기</h2>
        <Row>
          <Col xs={2} id='sidebar'>
            <Sidebar />
          </Col>
          <Col xs={10} id='content'>
            <UserId />
            <MyCalendar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mypage;
