import React from 'react';
import Header from '../../components/header';
const Mark = () => {
    return (
        <>
            <Header current="mark" />

            <section className="content-header" style={{ marginTop: '10em' }}>
                <h1 className="text-light-blue">
                    <b>Attendance & Mark</b>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-edit"></i> Attendance & Mark</a></li>
                    <li className="active"><a href="#">View</a></li>
                </ol>
            </section>

            <section className="content">

                <div className="row">
                    <div className="col-md-12">
                        <div className="box box-solid">
                            <div className="box-body">
                                <select className="form-control" name="sessions" id="sessions">
                                    <option value="rk6K5ZxpzcKZeZAipJZmDTaiKCufeVMYUBQl891UZCo9wOO%3E62PEXtt07UZ1s7aEnhtb0vGkkJQlGE9SuuCAuA%3D%3D">Jul 2019 - Nov 2019</option><option value="VwV4zouIVAQeFnCK5idg7hjM8232g3db72cEa0UpPus55QCrJiu9gNfmq7BqEZfV0vIPy3w2KvnCkKbn1rRdpA%3D%3D">Dec 2019 - Apr 2020</option><option value="RZN79W%3EUjf98MeOlev2cGq13JCC%3Ei1%3Ekn0Vo1oM6y7L51kpxJ5s6KPLaqs0k1LfhkZbgywCpBJ8xdlyYitKyfg%3D%3D">Aug 2020 - Nov 2020</option><option value="055q84w2h%3EX536EozKGrUbywIANl3BHWJ%3EBy135maUJiCC%2BAUk8jdwmccXIHACQ4p8h08x7yKmPx8ECdSEK7OQ%3D%3D">Dec 2020 - Apr 2021</option><option value="0sHEZiGFCo4rAT9kcI8oc1iKMmkutHq8WwemGAzvoM%3EHUqhxPOycilFrSYltMpV6m5Epn6EvZPQA%3EMWnnD3ncg%3D%3D">Jul 2021 - Nov 2021</option>                  </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="box box-primary">
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="form-group">
                                            <label className="col-md-12 control-label hidden-xs">Roll Number</label>
                                            <label className="visible-xs">Roll Number</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-8 col-sm-3">
                                        <div className="form-group">
                                            <label className="sr-only"></label>
                                            <input type="text" className="form-control input-sm" name="rollno" id="rollno" value="2019202063" readonly />
                                        </div>
                                    </div>
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="form-group">
                                            <label className="col-md-12 control-label hidden-xs">Name</label>
                                            <label className="visible-xs">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-8 col-sm-5">
                                        <div className="form-group">
                                            <label className="sr-only"></label>
                                            <input type="text" className="form-control input-sm" name="name" id="name" value="YUVARAJ T" readonly />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="form-group">
                                            <label className="col-md-12 control-label hidden-xs">Branch</label>
                                            <label className="visible-xs">Branch</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-8 col-sm-3">
                                        <div className="form-group">
                                            <label className="sr-only"></label>
                                            <input type="text" className="form-control input-sm" name="branch" id="branch" value="M.C.A MASTER OF COMPUTER APPLICATIONS (REGULAR)" readonly />
                                        </div>
                                    </div>

                                    <div className="col-xs-4 col-sm-2">
                                        <div className="form-group">
                                            <label className="col-md-12 control-label hidden-xs">Semester</label>
                                            <label className="visible-xs">Semester</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-8 col-sm-1">
                                        <div className="form-group">
                                            <label className="sr-only"></label>
                                            <input type="text" className="form-control input-sm" name="semester" id="semester" value="3" readonly />
                                        </div>
                                    </div>

                                    <div className="col-xs-4 col-sm-2">
                                        <div className="form-group">
                                            <label className="col-md-12 control-label hidden-xs">Regulations</label>
                                            <label className="visible-xs">Regulations</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-8 col-sm-2">
                                        <div className="form-group">
                                            <label className="sr-only"></label>
                                            <input type="text" className="form-control input-sm" name="regulation" id="regulation" value="2019" readonly />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="form-group">
                                            <label className="col-md-12 control-label hidden-xs">Campus</label>
                                            <label className="visible-xs">Campus</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-8 col-sm-3">
                                        <div className="form-group">
                                            <label className="sr-only"></label>
                                            <input type="text" className="form-control input-sm" name="campus" id="campus" value="COLLEGE OF ENGINEERING GUINDY" readonly />
                                        </div>
                                    </div>
                                </div>
                                <form className="form-horizontal">
                                    <div className="col-sm-12">
                                        <div className="nav-tabs-custom">
                                            <ul className="nav nav-tabs">
                                                <li className="active"><a href="#marks" data-toggle="tab">Marks</a></li>
                                                <li><a href="#profile" data-toggle="tab">Profile</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="active tab-pane" id="marks">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered table-condensed table-striped" id="student_subject">
                                                            <thead>
                                                                <tr>
                                                                    <th className="cell-blue">S.No.</th>
                                                                    <th className="cell-blue">Course Code</th>
                                                                    <th className="cell-blue">Course Name</th>
                                                                    <th className="cell-21">Att. 1</th>
                                                                    <th className="cell-21">Att. 2</th>
                                                                    <th className="cell-21">Att. 3</th>
                                                                    <th className="cell-21">Att.(%)</th>
                                                                    <th className="cell-28">Assess. 1</th>
                                                                    <th className="cell-28">Assess. 2</th>
                                                                    <th className="cell-28">Assess. 3</th>
                                                                    <th className="cell-28">I. Assess</th>
                                                                    <th className="cell-43">Grade</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="subjects">
                                                            </tbody>
                                                        </table>

                                                        <table className="table table-bordered table-condensed table-striped min-table">
                                                            <thead>
                                                                <tr className="cell-blue">
                                                                    <th>Grade Representation</th>
                                                                    <th>Not Published</th>
                                                                    <th>Published</th>
                                                                    <th>Break of Studies</th>
                                                                    <th>Withheld</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th className="cell-blue">Color</th>
                                                                    <td className="cell-3"></td>
                                                                    <td className="cell-38"></td>
                                                                    <td className="cell-37"></td>
                                                                    <td className="cell-4"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table className="table table-bordered table-condensed table-striped table-hover min-table">
                                                            <thead>
                                                                <tr className="cell-blue">
                                                                    <th>Letter Grade</th>
                                                                    <th>O</th>
                                                                    <th>A+</th>
                                                                    <th>A</th>
                                                                    <th>B+</th>
                                                                    <th>B</th>
                                                                    <th>RA</th>
                                                                    <th>SA</th>
                                                                    <th>-</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th className="cell-blue">Letter Grade</th>
                                                                    <td>Outstanding</td>
                                                                    <td>Excellent</td>
                                                                    <td>Very Good</td>
                                                                    <td>Good</td>
                                                                    <td>Above Average</td>
                                                                    <td>ReAppear</td>
                                                                    <td>Shortage of Attendance</td>
                                                                    <td>Withheld</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className="cell-blue">Grade Point</th>
                                                                    <td>10</td>
                                                                    <td>9</td>
                                                                    <td>8</td>
                                                                    <td>7</td>
                                                                    <td>6</td>
                                                                    <td>0</td>
                                                                    <td>0</td>
                                                                    <td>-</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div style={{ textAlign: "center", color: "green", opacity: "0.4" }}>
                                                            <h4>Disclaimer: Results are subject to change after verification.</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane" id="profile">

                                                    <div className="form-group">
                                                        <label className="control-label col-sm-2" for="email">Email</label>
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control input-sm" id="email" value="uv.yuvaraj21@gmail.com" readonly />
                                                        </div>

                                                        <label className="control-label col-sm-2" for="contact">Contact No.</label>
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control input-sm" id="contact" value="9551138588" readonly />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="control-label col-sm-2" for="pname">Parent's Name</label>
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control input-sm" id="pname" value="Thukkaraman.R" readonly />
                                                        </div>

                                                        <label className="control-label col-sm-2" for="contact">Parent's No.</label>
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control input-sm" value="8248305942" readonly />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="control-label col-sm-2" for="pname">Permanent Address</label>
                                                        <div className="col-sm-4">
                                                            <textarea className="form-control" rows="5" readonly>17/123rd street
                                                                Thazhangkuppam, Ennore
                                                                Chennai
                                                                600057</textarea>
                                                        </div>

                                                        <label className="control-label col-sm-2" for="contact">Communication Address</label>
                                                        <div className="col-sm-4">
                                                            <textarea className="form-control" rows="5" readonly>17/123rd Street
                                                                Thazhangkuppam, Ennore
                                                                Chennai
                                                                600057</textarea>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Mark;