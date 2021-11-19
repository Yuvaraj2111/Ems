import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Header from './header';
import img1 from '../../assets/img/teacher.jpg'
const Profile = () => {
    return (
        <>
            <Header current="profile" />
            <Container>
                <Row>
                    <Col xs={3} style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image src={img1} alt=".." height={200} width={200} />
                        <h1>Dr A.B.de Villiers</h1>
                    </Col>
                    <Col className="mt-5">
                        <h1>Contact Information</h1>
                        <div className="mt-5">
                            <b style={{ width: '4em' }}>Email :</b><span className="h4 mx-5">deVillers@annauniv.edu</span>
                        </div>
                        <div className="mt-5">
                            <b style={{ width: '4em' }}>Phone no. :</b><span className="h4 mx-5">044-23456789</span>
                        </div>
                        <div className="mt-5">
                            <b style={{ width: '4em' }}>Mobile :</b><span className="h4 mx-5">9874561230</span>
                        </div>
                        <h1 className="mt-5">Staff information</h1>
                        <div className="mt-5">
                            <b style={{ width: '4em' }}>Designation :</b><span className="h4 mx-5">Assistant Professor</span>
                        </div>
                        <div className="mt-5">
                            <b style={{ width: '4em' }}>Department :</b><span className="h4 mx-5">Information Science And Technology</span>
                        </div>
                        <div className="mt-5">
                            <b style={{ width: '4em' }}>Specilization :</b><span className="h4 mx-5">Computer Application</span>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Profile;