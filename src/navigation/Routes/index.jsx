import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../../app';
import Mark from '../../pages/attendance';
import Auth from '../../pages/auth';
import Enrollment from '../../pages/enrollment';
import Fee from '../../pages/fee';
import Home from '../../pages/home'
import { StudentList, UploadMarks } from '../../teacher'
import StaffAuth from '../../teacher/auth';
import Profile from '../../teacher/components/profile';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/studentLogin" component={Auth} />
                <Route exact path="/staffLogin" component={StaffAuth} />
                <Route exact path="/studentHome" component={Home} />
                <Route path="/enrollment" component={Enrollment} />
                <Route path="/mark" component={Mark} />
                <Route path="/fee" component={Fee} />
                <Route path="/staff/studentlist" component={StudentList} />
                <Route path="/staff/uploadMark" component={UploadMarks} />
                <Route path="/staff/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;