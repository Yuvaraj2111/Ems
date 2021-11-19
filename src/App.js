import React from 'react'
import { Card, Container } from 'react-bootstrap';
import student from './assets/img/student.jpg'
import teacher from './assets/img/teacher.jpg'
import { useHistory } from 'react-router';
const App = () => {
    let history = useHistory()
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: '100vh', width: '100%', background: '#eee' }}>
            <h1>EMS's</h1>
            <Card className="mx-5" style={{ borderRadius: '15%', padding: '1em' }} onClick={() => history.push('/studentLogin')}>
                <Card.Img src={student} alt=".." style={{ height: '30em', width: '30em', padding: 20 }} />
                <Card.Header style={{ fontSize: '2em', alignSelf: 'center' }}>
                    Student Login
                </Card.Header>
            </Card>
            <Card className="mx-5" style={{ borderRadius: '15%', padding: '1em' }} onClick={() => history.push('/staffLogin')}>
                <Card.Img src={teacher} alt=".." style={{ height: '30em', width: '30em', borderRadius: '15%' }} />
                <Card.Header style={{ fontSize: '2em', alignSelf: 'center' }}>
                    Teacher Login
                </Card.Header>
            </Card>
        </Container>
    )
}
export default App;