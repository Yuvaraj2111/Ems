import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Input, StyledDiv } from "../styles/marks";
import data from "../api/studDetails.json";
import d from "../api/marks.json";
import Header from "./header";

const UploadMarks = () => {
    const [details, setDetails] = useState({
        reg: "0",
        name: "",
        branch: "",
        sem: "",
        regu: "",
        campus: "",
    });
    const [marks, setMarks] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    // if (marks) {
    //     const MarkInput = marks.map((i) => (
    //         <Row>
    //             <Col xs={2}>
    //                 <Input
    //                     margin
    //                     type="text"
    //                     className="form-control info"
    //                     id="register"
    //                     value={i.code}
    //                     readOnly
    //                     // onChange={handleChange}
    //                     name="regno"
    //                 />
    //             </Col>
    //         </Row>
    //     ));
    // }

    function grade(m) {
        return m >= 90
            ? "O"
            : m >= 80
                ? "A+"
                : m >= 70
                    ? "A"
                    : m >= 60
                        ? "B"
                        : m >= 50
                            ? "C"
                            : "RA";
    }
    const updateFieldChanged = (index) => (e) => {
        // console.log("index: " + index);
        // console.log("property name: " + e.target.name);
        let newArr = [...marks]; // copying the old datas array
        newArr[index].marks = e.target.value; // replace e.target.value with whatever you want to change it to
        let grd = grade(e.target.value);
        newArr[index].grade = grd;
        setMarks(newArr);
    };
    useEffect(() => {
        function fetchDetails() {
            let det = data.find((i) => i.reg === details.reg);
            if (det) {
                setDetails((prevState) => ({
                    ...prevState,
                    name: det.name,
                    branch: det.branch,
                    sem: det.sem,
                    regu: det.regu,
                    campus: det.campus,
                }));
            } else {
                setDetails((prevState) => ({
                    ...prevState,
                    name: "",
                    branch: "",
                    sem: "",
                    regu: "",
                    campus: "",
                }));
            }
        }
        fetchDetails();
    }, [details.reg]);

    useEffect(() => {
        function fetchCourse() {
            let det = d.find(
                (i) => i.reg === details.reg && i.sem === details.sem
            );
            setMarks(det?.courses);
        }
        fetchCourse();
    }, [details.sem, details.reg]);
    console.log("marks", marks);
    return (
        <>
            <Header current="uploadMarks" />
            <Container>
                <Row className="mt-5 p-4 border rounded">
                    <p>Details</p>
                    {/* <MarkInput /> */}
                    <Row>
                        <StyledDiv className="mb-1" width="small">
                            <label htmlFor="register">Register Number</label>
                            <Input
                                type="number"
                                className="form-control info"
                                id="register"
                                value={details.reg}
                                // readOnly
                                onChange={handleChange}
                                name="reg"
                            />
                        </StyledDiv>
                        <StyledDiv className="mb-1" width="med">
                            <label htmlFor="name">Student Name</label>
                            <Input
                                type="text"
                                className="form-control info"
                                id="name"
                                value={details.name}
                                readOnly
                                // onChange={handleChange}
                                name="name"
                            />
                        </StyledDiv>
                    </Row>
                    <Row>
                        <StyledDiv className="mb-1" width="small">
                            <label htmlFor="branch">Branch</label>
                            <Input
                                type="text"
                                className="form-control info"
                                id="branch"
                                value={details.branch}
                                readOnly
                                // onChange={handleChange}
                                name="branch"
                            />
                        </StyledDiv>
                        <StyledDiv className="mb-1" width="small">
                            <label htmlFor="register">Semester</label>
                            <Input
                                type="number"
                                className="form-control info"
                                id="register"
                                value={details.sem}
                                readOnly
                                // onChange={handleChange}
                                name="regno"
                            />
                        </StyledDiv>
                        <StyledDiv width="small" className="mb-1">
                            <label htmlFor="regu">Regulations</label>
                            <Input
                                type="number"
                                className="form-control info"
                                id="regu"
                                value={details.regu}
                                readOnly
                                // onChange={handleChange}
                                name="regno"
                            />
                        </StyledDiv>
                    </Row>
                    <Row>
                        <StyledDiv width="med" className="mb-1">
                            <label htmlFor="campus">Campus</label>
                            <Input
                                type="text"
                                className="form-control info"
                                id="campus"
                                value={details.campus}
                                readOnly
                                // onChange={handleChange}
                                name="regno"
                            />
                        </StyledDiv>
                    </Row>
                </Row>
                <Row className="mt-5 p-4 border rounded">
                    <p>Marks</p>
                    <Row>
                        <Col xs={2}>Course Code</Col>
                        <Col xs={4}>Subject Name</Col>
                        <Col xs={3}>Marks</Col>
                        <Col xs={3}>Grade</Col>
                    </Row>
                    {marks && (
                        <Row>
                            <Col xs={2}>
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[0]?.code}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[1]?.code}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[2]?.code}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[3]?.code}
                                    readOnly
                                />
                            </Col>
                            <Col xs={4}>
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[0]?.subName}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[1]?.subName}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[2]?.subName}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[3]?.subName}
                                    readOnly
                                />
                            </Col>
                            <Col xs={3}>
                                <Input
                                    margin
                                    type="number"
                                    className="form-control info"
                                    id="register"
                                    value={marks[0]?.marks}
                                    onChange={updateFieldChanged(0)}
                                    name="marks"
                                />
                                <Input
                                    margin
                                    type="number"
                                    className="form-control info"
                                    id="register"
                                    value={marks[1]?.marks}
                                    onChange={updateFieldChanged(1)}
                                    name="marks"
                                />
                                <Input
                                    margin
                                    type="number"
                                    className="form-control info"
                                    id="register"
                                    value={marks[2]?.marks}
                                    onChange={updateFieldChanged(2)}
                                    name="marks"
                                />
                                <Input
                                    margin
                                    type="number"
                                    className="form-control info"
                                    id="register"
                                    value={marks[3]?.marks}
                                    onChange={updateFieldChanged(3)}
                                    name="marks"
                                />
                            </Col>
                            <Col xs={3}>
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[0]?.grade}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[1]?.grade}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[2]?.grade}
                                    readOnly
                                />
                                <Input
                                    margin
                                    type="text"
                                    className="form-control info"
                                    value={marks[3]?.grade}
                                    readOnly
                                />
                            </Col>
                        </Row>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default UploadMarks;
