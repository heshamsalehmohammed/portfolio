import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Joi from 'joi';
import {Validate} from '../common/validation';


export class Register extends Component {
  constructor(props) {
    super(props);

    let loggedIn = false

    this.state = {
      user: {
        UserCountry: 175,
        UserFirstName: "",
        UserLastName: "",
        UserMobileNumber: "",
        UserRegEmail: "",
        BirthDate: "",
        UserGender: "",
        UserCity: "",
        UserUsedPass: "",
        confirmUserUsedPass: "",
        IsCovidHealedPerson: "",
        UserBloodTypeRh: "",
        IsCovidHealedPerson: "",
        HasAntiBodiesTestOrSwab: "",
        LastBloodDonationDate: "",
        UserWeight: ""
      },
      loggedIn,
      errors: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    axios.get("https://itworxelixir.ddns.net/Countries/GetCitiesOfCountry?lang=en&ofCountry=175")
      .then(response => {
        this.setState({ "cities": response.data });
      })
      .catch(error => console.log(error.response));
    axios.get("https://itworxelixir.ddns.net/ElixirUsers/GetBloodTypes")
      .then(response => {
        this.setState({ "bloodTypes": response.data });
      })
      .catch(error => console.log(error.response));
  }

  Donner_Schema = {
    UserFirstName: Joi.string().required().label("First Name"),
    UserLastName: Joi.string().required().label("Last Name"),
    UserMobileNumber: Joi.string().required().label("Mobile Number"),
    UserRegEmail: Joi.string().email({ tlds: false }).required().label("Email"),
    BirthDate: Joi.string().required().label("BirthDate"),
    UserGender: Joi.string().required().label("Gender"),
    UserCity: Joi.string().required().label("City"),
    UserUsedPass: Joi.string().min(6).required().label("Password"),
    confirmUserUsedPass: Joi.string().equal(Joi.ref("UserUsedPass")).required().label("Confirm Password")
      .error((errors) => {
        return errors.map(error => {
          switch (error.type) {
            case "any.allowOnly":
              return { message: "\"Confirm Password\" and \"Password\" are not matched" };
            case "any.empty":
              return { message: "\"Confirm Password\" is not allowed to be empty" };
          }
        })
      }),
    UserBloodTypeRh: Joi.string().required().label("Blood Type"),
    IsCovidHealedPerson: Joi.string().required().label("Blood Type"),
    HasAntiBodiesTestOrSwab: Joi.string().label("Have Swap").required(),
    LastBloodDonationDate: Joi.string().label("Last Donation Date").required(),
    UserWeight: Joi.number().label("Body Weight").required()
  };

  Reciever_Schema = {
    UserFirstName: Joi.string().required().label("First Name"),
    UserLastName: Joi.string().required().label("Last Name"),
    UserMobileNumber: Joi.string().required().label("Mobile Number"),
    UserRegEmail: Joi.string().email({ tlds: false }).required().label("Email"),
    BirthDate: Joi.string().required().label("BirthDate"),
    UserGender: Joi.string().required().label("Gender"),
    UserCity: Joi.string().required().label("City"),
    UserUsedPass: Joi.string().min(6).required().label("Password"),
    confirmUserUsedPass: Joi.string().equal(Joi.ref("UserUsedPass")).required().label("Confirm Password")
      .error((errors) => {
        return errors.map(error => {
          switch (error.type) {
            case "any.allowOnly":
              return { message: "\"Confirm Password\" and \"Password\" are not matched" };
            case "any.empty":
              return { message: "\"Confirm Password\" is not allowed to be empty" };
          }
        })
      }),
    UserBloodTypeRh: Joi.string().required().label("Blood Type"),
    IsCovidHealedPerson: Joi.string().required().label("Blood Type"),
    HasAntiBodiesTestOrSwab: Joi.string().label("Have Swap"),
    LastBloodDonationDate: Joi.string().label("Last Donation Date"),
    UserWeight: Joi.number().label("Body Weight")
  };

  schema = () => {
    return this.state.IsCovidHealedPerson ? this.Donner_Schema : this.Reciever_Schema;
  }


  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: (this.schema())[name] };
    if (name === "confirmUserUsedPass") {
      obj.UserUsedPass = this.state.user.UserUsedPass;
      schema.UserUsedPass = (this.schema())["UserUsedPass"];
    }
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }



  onChange(e) {
    let { user } = this.state;
    let name = e.target.name;
    let value = e.target.value;
    if (name === "UserUsedPass") {
      if (0 === value.length) {
        document.getElementById("confirmUserUsedPass").disabled = true;
      }else{
        document.getElementById("confirmUserUsedPass").disabled = false;
      }
    }
    let error = this.validateProperty({ name, value });

    let { errors } = this.state;

    errors[name] = error;

    this.setState({ errors: errors });
    user[name] = value;
    this.setState({ user: user });
  }

  onSubmit(e) {
    e.preventDefault();
    let errors = Validate(this.state.account, this.schema());
    this.setState({ errors: errors || {} });
    if (errors) return

    const { user } = this.state
    // login magic
    var self = this;

    localStorage.setItem("token", user);
    self.setState({ loggedIn: true });

    /*     axios({
          url: "https://itworxelixir.ddns.net/ElixirUsers/RegisterNewUser",
          type: "POST",
          data: user
        }).then(function (response) {
          console.log(response)
          localStorage.setItem("token", response.token);
          self.setState({ loggedIn: true });
        }); */
  }

  render() {

    const { cities } = this.state;
    const { bloodTypes } = this.state;
    const { IsCovidHealedPerson } = this.state.user;
    const { errors } = this.state;
    if (this.state.loggedIn) {
      return <Navigate to="/home" />
    }
    return (
      <div className="base-container  p-2" ref={this.props.containerRef}>
        <form onSubmit={this.onSubmit}>
          <div className="content text-left">
            <div className="form signup">

              <div className="form-row justify-content-center">
                <div className="form-group p-1">
                  <label htmlFor="UserFirstName">First Name</label>
                  <input type="text" className="form-control" name="UserFirstName" placeholder="First Name" value={this.state.user.UserFirstName} onChange={this.onChange} />
                </div>
                <span className="text-danger text-center">{errors["Password"]}</span>
                <div className="form-group p-1">
                  <label htmlFor="UserLastName">Last Name</label>
                  <input type="text" className="form-control" name="UserLastName" placeholder="Last Name" value={this.state.user.UserLastName} onChange={this.onChange} />
                </div>
              </div>
              <span className="text-danger text-center">{errors["UserFirstName"]}</span>
              <span className="text-danger text-center">{errors["UserLastName"]}</span>
              <div className="form-row justify-content-center">
                <div className="form-group p-1">
                  <label htmlFor="UserMobileNumber">Phone Number</label>
                  <input type="text" className="form-control" name="UserMobileNumber" placeholder="Phone Number" autoComplete="on" value={this.state.user.UserMobileNumber} onChange={this.onChange} />
                </div>
                <div className="form-group p-1">
                  <label htmlFor="UserRegEmail">Email</label>
                  <input type="email" className="form-control" name="UserRegEmail" placeholder="Email" value={this.state.user.UserRegEmail} onChange={this.onChange} />
                </div>
              </div>
              <span className="text-danger text-center">{errors["UserMobileNumber"]}</span>
              <span className="text-danger text-center">{errors["UserRegEmail"]}</span>

              <div className="form-row justify-content-center">
                <div className="form-group p-1">
                  <label htmlFor="UserBloodTypeRh">blood Type</label>
                  <select className="form-control" name="UserBloodTypeRh" value={this.state.user.UserBloodTypeRh} onChange={this.onChange}  >
                    <option key="" value="">Select Blood Group</option>
                    {bloodTypes &&
                      bloodTypes.length > 0 &&
                      bloodTypes.map(bt => {
                        return <option key={bt.id} value={bt.id}>{bt.type}</option>;
                      })}
                  </select>
                </div>
                <div className="form-group p-1">
                  <label htmlFor="BirthDate">Birthdate</label>
                  <input type="date" className="form-control" name="BirthDate" placeholder="Birthdate" value={this.state.user.BirthDate} onChange={this.onChange} />
                </div>
              </div>
              <span className="text-danger text-center">{errors["UserBloodTypeRh"]}</span>
              <span className="text-danger text-center">{errors["BirthDate"]}</span>

              <div className="form-row justify-content-center">
                <div className="form-group p-1">
                  <label htmlFor="UserGender">Gender</label>
                  <select className="form-control" name="UserGender" value={this.state.user.UserGender} onChange={this.onChange}  >
                    <option value="">Select Your Gender</option>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                  </select>
                </div>
                <div className="form-group p-1">
                  <label htmlFor="UserCity">city</label>
                  <select className="form-control" name="UserCity" value={this.state.user.UserCity} onChange={this.onChange}  >
                    <option key="" value="">Select Your City</option>
                    {cities &&
                      cities.length > 0 &&
                      cities.map(city => {
                        return <option key={city.cityID} value={city.cityID}>{city.cityNameWithUserLang}</option>;
                      })}
                  </select>
                </div>
              </div>
              <span className="text-danger text-center">{errors["UserGender"]}</span>
              <span className="text-danger text-center">{errors["UserCity"]}</span>

              <div className="form-row justify-content-center">
                <div className="form-group p-1">
                  <label htmlFor="UserUsedPass">Password</label>
                  <input type="password" className="form-control" name="UserUsedPass" placeholder="password" value={this.state.user.UserUsedPass} onChange={this.onChange} autoComplete="new-password" />
                </div>
                <div className="form-group p-1">
                  <label htmlFor="confirmUserUsedPass">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmUserUsedPass" name="confirmUserUsedPass" placeholder="Confirm Password" value={this.state.user.confirmUserUsedPass} onChange={this.onChange} autoComplete="new-password" disabled/>
                </div>
              </div>

              <span className="text-danger text-center">{errors["UserUsedPass"]}</span>
              <span className="text-danger text-center">{errors["confirmUserUsedPass"]}</span>

              <div className="form-group text-center" onChange={this.onChange.bind(this)} value={this.state.user.IsCovidHealedPerson} >
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="AmDoner" name="IsCovidHealedPerson" className="custom-control-input" value="1" />
                  <label className="custom-control-label" htmlFor="AmDoner" >I am a Doner</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="AmReciever" name="IsCovidHealedPerson" className="custom-control-input" value="0" />
                  <label className="custom-control-label" htmlFor="AmReciever">I am a Receiver</label>
                </div>
              </div>

              <span className="text-danger text-center">{errors["IsCovidHealedPerson"]}</span>


              {(IsCovidHealedPerson === "1") && (
                <div className="form-row donerExtraSection pt-4 pb-3 pl-2 pr-2 mb-2 justify-content-center p-1">
                  <div className="form-group text-center" onChange={this.onChange.bind(this)} value={this.state.user.HasAntiBodiesTestOrSwab} >
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="HasAntiBodiesTestOrSwab" id="HasAntiBodiesTestOrSwab" />
                      <label className="custom-control-label" htmlFor="HasAntiBodiesTestOrSwab">Do You Have AntiBodies Test Or Swap ? </label>
                    </div>
                  </div>
                  <span className="text-danger text-center">{errors["HasAntiBodiesTestOrSwab"]}</span>
                  <div className="form-row justify-content-center">
                    <div className="form-group p-1">
                      <label htmlFor="UserWeight">Body Weight</label>
                      <input type="number" className="form-control" name="UserWeight" placeholder="Body Weight" value={this.state.user.UserWeight} onChange={this.onChange} />
                    </div>
                    <div className="form-group p-1">
                      <label htmlFor="LastBloodDonationDate">Last Donation Date</label>
                      <input type="date" className="form-control" name="LastBloodDonationDate" placeholder="Last Donation Date" value={this.state.user.LastBloodDonationDate} onChange={this.onChange} />
                    </div>
                  </div>
                  <span className="text-danger text-center">{errors["UserWeight"]}</span>
                  <span className="text-danger text-center">{errors["LastBloodDonationDate"]}</span>
                </div>
              )}

            </div>
          </div>
          <div className="footer text-center">
            <button type="submit" className="btn">Register</button>
          </div>
        </form>

      </div>
    );
  }
}


