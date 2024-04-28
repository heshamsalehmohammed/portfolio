import React, { Component } from "react";
import { Link , Navigate } from "react-router-dom";
import axios from "axios";
import Joi from 'joi';
import {Validate ,ValidateProperty } from '../common/validation';


export class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false

    this.state = {
      account: {
        UserEmail: "",
        Password: ""
      },
      loggedIn,
      errors: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  schema = {
    UserEmail: Joi.string().required().email({ tlds: false }).label("Email"),
    Password: Joi.string().required().min(4).label("Password")
  };


  onChange(e) {
    let { account } = this.state;
    let name = e.target.name;
    let value = e.target.value;
    let error = ValidateProperty({ name, value },this.schema);

    let { errors } = this.state;

    errors[name] = error;

    this.setState({ errors: errors });
    account[name] = value;
    this.setState({ account: account });

  }


  onSubmit(e) {
    e.preventDefault();
    let errors = Validate(this.state.account,this.schema);
    this.setState({ errors: errors || {} });
    if (errors) return
    const { UserEmail, Password } = this.state.account
    // login magic
    var self = this;

    axios.get('https://itworxelixir.ddns.net/ElixirUsers/LoginGetAction?UserEmail=' + UserEmail + '&Password=' + Password)
      .then(function (response) {
        debugger
        console.log(response)
        localStorage.setItem("token", response.data);
        self.setState({ loggedIn: true });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }



  render() {
    const { errors } = this.state
    if (this.state.loggedIn) {
      return <Navigate to="/home" />
    }
    return (
      <div className="base-container p-2" ref={this.props.containerRef}>
        <form onSubmit={this.onSubmit}>
          <div className="content text-left">
            <div className="form login">
              <div className="form-group">
                <label htmlFor="UserEmail">Email</label>
                <input type="email" className="form-control" name="UserEmail" placeholder="Email"
                  value={this.state.account.UserEmail}
                  onChange={this.onChange} />
              </div>
              <span className="text-danger text-center">{errors["UserEmail"]}</span>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" name="Password" placeholder="Password" autoComplete="on"
                  value={this.state.account.Password}
                  onChange={this.onChange} />
              </div>
              <span className="text-danger text-center">{errors["Password"]}</span>
            </div>
          </div>
          <div className="footer text-center">
            <button type="submit" className="btn">Login</button>
            <div>
             <Link to="/home" className="active">Continue as guest</Link> 
            </div>
          </div>
        </form>
      </div>
    );
  }
}




