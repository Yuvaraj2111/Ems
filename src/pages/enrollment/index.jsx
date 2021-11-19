import React from 'react';
import Header from '../../components/header';
import '../../assets/css/enr.css'
const Enrollment = () => {
    return (
        <>
            <Header current="enroll" />
            <div className="container-fluid" style={{ marginTop: '10em' }}>
                <div classNameName="content-wrapper">

                    <section className="content-header">
                        <p className="h1">Timetable Slot and Staff Information</p>
                        <ol className="breadcrumb  ">
                            <li ><a href="https://acoe.annauniv.edu/sems/dashboard"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li className="active"><a href="#"><i className="fa fa-calendar"></i> Slot</a></li>
                        </ol>
                    </section>


                    <section className="content mt-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box box-solid">
                                    <div className="box-body">
                                        <select className="form-control h2" name="sessions" id="sessions">
                                            <option value="" disabled selected> Select Session</option>
                                            <option value="ldJIz8wRL4NfijcAUlzhXEXPtOvatUOPprS3Xppgdyj%2BYQVc%2BY1qpKdXDEhUU7WLuQ0uxGMiwhU%3EjRJMSgGc%2Bw%3D%3D" selected>Jul 2021 - Nov 2021</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mt-3 pt-3">
                                <div className="box box-primary pt-5">
                                    <div className="box-body no-padding table-responsive">
                                        <form action="#" id="slotbr_info" method="post" accept-charset="utf-8">

                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="h3">Campus</th>
                                                        <td>
                                                            <select className="form-control input-sm" name="campus" id="campus">
                                                                <option value="1" selected>COLLEGE OF ENGINEERING GUINDY</option>                          </select>
                                                        </td>
                                                        <th className="h3">Department</th>
                                                        <td><select className="form-control input-sm" name="dept" id="dept"></select></td>
                                                    </tr>
                                                </thead>
                                                <thead>
                                                    <tr>
                                                        <th className="h3">PRGM</th>
                                                        <th className="h3">Branch</th>
                                                        <th className="h3">Semester</th>
                                                        <th className="h3">Batch</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <td>
                                                        <select className="form-control input-sm" name="prgm" id="prgm"></select>
                                                    </td>
                                                    <td>
                                                        <select className="form-control input-sm" name="branch" id="branch"></select>
                                                    </td>
                                                    <td>
                                                        <select className="form-control input-sm" name="sem" id="sem"></select>
                                                    </td>
                                                    <td>
                                                        <select className="form-control input-sm" name="batch" id="batch">
                                                        </select>
                                                    </td>
                                                </tbody>
                                            </table>
                                        </form>                </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Timetable</h3>
                                        <div className="box-tools pull-right">
                                            <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                                        </div>
                                    </div>
                                    <div className="box-body no-padding table-responsive">
                                        <table className="table table-bordered table-condensed">
                                            <thead>
                                                <tr className="cell-blue">
                                                    <th>Day / Hour</th>
                                                    <th>1</th>
                                                    <th>2</th>
                                                    <th>3</th>
                                                    <th>4</th>
                                                    <th>5</th>
                                                    <th>6</th>
                                                    <th>7</th>
                                                    <th>8</th>
                                                </tr>
                                            </thead>
                                            <tbody id="slot_table">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-12">
                                <div className="box box-primary">
                                    <div className="box-body">
                                        <table id="offered-subject" className="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                                            <thead>
                                                <tr className="cell-blue">
                                                    <th data-priority="1">Slot</th>
                                                    <th data-priority="2">Subject Code</th>
                                                    <th data-priority="4">Subject Name</th>
                                                    <th data-priority="4">Type</th>
                                                    <th data-priority="3">Credit</th>
                                                    <th data-priority="4">Staff Name</th>
                                                    <th data-priority="4">Designation</th>
                                                    <th data-priority="4">Department</th>
                                                    <th data-priority="3">Availabity <br /> REG - REA - OTH</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <a className="btn cell-green btn-flat btn-block" href="https://acoe.annauniv.edu/sems/student/enrollment">Proceed to Enrollment</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}
export default Enrollment;