import React from 'react'

function Header({ current }) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-red">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Staff login</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class={`nav-link scrollto ${current === "profile" && "active"}`} aria-current="page" href="/staff/profile">Staff Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link scrollto ${current === "uploadMarks" && "active"}`} href="/staff/uploadmark">Upload marks</a>
                        </li>

                        <li class="nav-item">
                            <a class={`nav-link scrollto ${current === "list" && "active"}`} href="/staff/studentlist">Students marks</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header
