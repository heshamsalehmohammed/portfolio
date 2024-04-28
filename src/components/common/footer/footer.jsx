import React, { Component } from 'react';
import Logo from "../../../images/logo.svg";

export class Footer extends Component {
    render() {
        return (
            <footer className="d-flex align-items-end justify-content-center text-center">
                <div className="row w-100 justify-content-center">
                    <div className="col-md-12">
                        <div className="flex-center p-5">
                            <img className="logo" alt="Hesham Saleh Logo" src={Logo} />
                            <div className="footer-copyright text-center p-3">© 2020 Copyright: <a href="https://google.com/"> HeshamSaleh.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

