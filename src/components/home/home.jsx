import React, { Component } from "react";
import { Nav } from "../common/nav/index";
import Body from "./body";
import { Menu } from "../common/menu/index";
import { Sidebar } from "./sidebar";
import { Filter } from "./filter";
import $ from 'jquery/dist/jquery.min.js';


export class Home extends Component {

    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true
        let bodyContent = "home"
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn: loggedIn,
            menuState: false,
            bodyContent: bodyContent
        }
        this.onLogout = this.onLogout.bind(this)
        this.bodyContentChange = this.bodyContentChange.bind(this);
    }


    toggleMenu = (e) => {
        e.preventDefault();
        $("#close-sidebar").click();
        this.setState(state => ({
            menuState: !state.menuState
                ? 'active'
                : state.menuState === 'deactive'
                    ? 'active'
                    : 'deactive'
        }));
    };


    bodyContentChange(BContent) {
        this.setState({ bodyContent: BContent });
    }


    onLogout(e) {
        localStorage.removeItem("token");
        this.setState({ loggedIn: false });
    }

    render() {
        return (
            <div className="min-vh-100 container-fluid p-0 m-0 d-flex flex-column" style={{ background: "#181d23" }}>
                <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
                <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
                <div className="container-fluid p-0 m-0">
                    <div className="page-wrapper chiller-theme ">
                        <Sidebar bodyContentChange={this.bodyContentChange} />
                        <main className="page-content">
                            <div className="container-fluid" style={{ overflow: "hidden" }}>
                                <Filter />
                                <Body BodyContent={this.state.bodyContent} />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}


