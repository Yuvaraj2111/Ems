import React from 'react';
import Header from '../../components/header';
const Fee = () => {
    return (
        <>
            <Header current="fee" />
            <div className="" style={{ marginTop: '10em' }}>

                <div className="">

                    <section className="content-header">
                        <h1> Exam Fee</h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li className="active">Examfee</li>
                        </ol>
                    </section>


                    <section className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box box-primary">
                                    <div className="box-body">
                                        <form className="form-horizontal">
                                            <div className="form-group">
                                                <label className="control-label col-md-1" for="regno">Regno</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control input-sm" name="regno" placeholder="Regno" id="regno" value="2019202063" readonly />
                                                </div>
                                                <label className="control-label col-md-1" for="name">Name</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control input-sm" name="regno" placeholder="Name" id="name" value="YUVARAJ T" readonly />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-1" for="branch">Branch</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control input-sm" placeholder="Branch" id="branch" value="M.C.A MASTER OF COMPUTER APPLICATIONS (REGULAR)" readonly />
                                                </div>
                                                <label className="control-label col-md-1" for="sem">Sem</label>
                                                <div className="col-md-2">
                                                    <input type="text" className="form-control input-sm" placeholder="Semester" id="sem" value="4" readonly />
                                                </div>
                                                <label className="control-label col-md-1" for="regulation">Regulation</label>
                                                <div className="col-md-2">
                                                    <input type="text" className="form-control input-sm" placeholder="regulation" id="regulation" value="2019" readonly />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-1" for="campus">Campus</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control input-sm" placeholder="Campus" id="campus" value="COLLEGE OF ENGINEERING GUINDY" readonly />
                                                </div>
                                                <label className="control-label col-md-1" for="session">Session</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control input-sm" name="sessions" id="sessions" placeholder="Exam Session" value="April / May - 2021" disabled />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-1" for="regno">Email</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control input-sm" name="email" placeholder="example@domain.com" id="email" value="uv.yuvaraj21@gmail.com" readonly />
                                                </div>
                                                <label className="control-label col-md-1" for="name">Mobile</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control input-sm" name="phone" placeholder="Mobile" id="phone" value="9551138588" readonly />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 text-red" id="block_msg">
                                <h4><b>Note - If the amount (exam fee) is debited (deducted) from your account and if you are not able to download the acknowledgement from ACOE website, please do not worry. Wait for 1 business day (1 working day of the bank).</b></h4>
                                <h4><b>If the "Waiting for Payment Status" button appears in your page, "Check payment status" button will appear in your page after an hour. Please Wait for 1 business day (1 working day of the bank), then click the button to know your payment status.</b></h4>
                            </div>
                            <div className="col-md-12">
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Examination Fee Payment Details</h3>
                                    </div>
                                    <div className="box-body">

                                        <form action="/" id="payment" className="form-horizontal" validated="" method="post" accept-charset="utf-8">
                                            <input type="hidden" name="key" id="key" value="" />
                                            <input type="hidden" name="txnid" id="txnid" value="" />
                                            <input type="hidden" name="amount" id="amount" value="" />
                                            <input type="hidden" name="firstname" id="firstname" value="YUVARAJ T" />
                                            <input type="hidden" name="email" id="email" value="uv.yuvaraj21@gmail.com" />
                                            <input type="hidden" name="phone" id="phone" value="9551138588" />
                                            <input type="hidden" name="productinfo" id="productinfo" value="Regular Exam Fee" />
                                            <input type="hidden" name="surl" id="surl" value="https://acoe.annauniv.edu/sems/txn/success" />
                                            <input type="hidden" name="furl" id="furl" value="https://acoe.annauniv.edu/sems/txn/fail" />
                                            <input type="hidden" name="hash" id="hash" value="" />
                                            <input type="hidden" name="udf1" id="udf1" value="2019202063" />
                                            <input type="hidden" name="udf2" id="udf2" value="CA5001-CA5013-CA5026-CA5401-CA5402-CA5403-CA5411-CA5412-CA5413" />
                                            <input type="hidden" name="udf3" id="udf3" value=" " /><input type="hidden" name="udf4" id="udf4" value=" " />
                                            <input type="hidden" name="udf5" id="udf5" value=" " />
                                            <input type="hidden" name="session" id="session" value="JeEpjnd6V1VqqardzvLp7rLI80H6fkZ5natI2jpqCfn%3ErwxeNNgR0urdbRyYI%3EouRPE1mM2QiPc109Sv4qu%3E%3Ew%3D%3D" />
                                            <input type="hidden" name="type" id="type" value="BjPbOUFZHhIU0fTu0HuqHkK6n7ZpCfW5GuBvNHD85i8wDj8y3LxHJjZC7GUIhK57EkixEwXuLTQWmG5DSkV%3EKw%3D%3D" />
                                            <table className="table table-bordered table-condensed table-striped">
                                                <thead className="cell-blue">
                                                    <tr>
                                                        <th>S. No.</th>
                                                        <th>Course Code</th>
                                                        <th>Course Name</th>
                                                        <th>Subtype</th>
                                                        <th>Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td>1</td><td>CA5401</td><td className="text-left">DATA SCIENCE</td><td>THEORY</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr><tr><td>2</td><td>CA5402</td><td className="text-left">EMBEDDED SYSTEMS AND INTERNET OF THINGS</td><td>THEORY</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr><tr><td>3</td><td>CA5403</td><td className="text-left">CLOUD COMPUTING</td><td>THEORY</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr><tr><td>4</td><td>CA5411</td><td className="text-left">DATA SCIENCE LABORATORY</td><td>LAB</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr><tr><td>5</td><td>CA5412</td><td className="text-left">INTERNET OF THINGS AND CLOUD LABORATORY</td><td>LAB</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr><tr><td>6</td><td>CA5413</td><td className="text-left">SYSTEM DEVELOPMENT LABORATORY</td><td>LAB</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr><tr><td>7</td><td>CA5001</td><td className="text-left">BLOCKCHAIN TECHNOLOGIES</td><td>THEORY</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr><tr><td>8</td><td>CA5013</td><td className="text-left">UNIX INTERNALS</td><td>THEORY</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr><tr><td>9</td><td>CA5026</td><td className="text-left">COMPUTER GRAPHICS</td><td>THEORY</td><td><i className="fa fa-inr" aria-hidden="true"></i> 450</td></tr>                      </tbody>
                                                <tfoot>
                                                    <tr className="cell-blue">
                                                        <th colspan="4">Total Fees</th>
                                                        <th><i className="fa fa-inr" aria-hidden="true"></i> <span id="total">4050</span></th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <div className="col-md-6">
                                                <a href="https://acoe.annauniv.edu/sems/student/exam_fee/ack/" className="btn btn-md btn-block cell-3" target="_blank">Acknowledgement</a>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="button" className="btn btn-md btn-block cell-green" disabled>Fees Paid</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>

                <footer className="main-footer">
                    <strong>Copyright &copy; 2021 <a href="#">SEMS</a>.</strong> All rights reserved.
                </footer>
            </div>
        </>
    )
}
export default Fee;