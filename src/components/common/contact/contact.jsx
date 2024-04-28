import React, { Component } from 'react';
import { SocialLinks } from '../socialLinks/index';
import axios from "axios";
import Joi from 'joi';
import {Validate ,ValidateProperty } from '../validation';

export class Contact extends Component {


    constructor(props) {
        super(props);

        this.state = {
            contact: {
                Name: "",
                Email: "",
                Message: ""
            },
            errors: []
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    schema = {
        Email: Joi.string().required().email({ tlds: false }).label("Email"),
        Name: Joi.string().required().label("Name"),
        Message: Joi.string().required().label("Message"),
    };

    onChange(e) {
        let { contact } = this.state;
        let name = e.target.name;
        let value = e.target.value;
        let error = ValidateProperty({ name, value },this.schema);

        let { errors } = this.state;

        errors[name] = error;

        this.setState({ errors: errors });
        contact[name] = value;
        this.setState({ contact: contact });

    }


    onSubmit(e) {
        e.preventDefault();
        let errors = Validate(this.state.contact,this.schema);
        this.setState({ errors: errors || {} });
        if (errors) return
        const { Name, Email,Message } = this.state.contact
        // login magic
        var self = this;
    }

    render() {
        const { errors } = this.state
        return (
            <section id="contact">
                <div className="container">
                    <div className="heading-wrapper">
                        <div className="heading">
                            <p className="title">Want to contact Me?</p>
                        </div>
                        <SocialLinks />
                    </div>
                    <form id="contact-form" onSubmit={this.onSubmit}>
                        <input placeholder="Name" name="Name" type="text"
                            value={this.state.contact.Name}
                            onChange={this.onChange} />
                        <span className="text-danger text-center">{errors["Name"]}</span>
                        <input placeholder="Email" name="Email" type="email"
                            value={this.state.contact.Email}
                            onChange={this.onChange} />
                        <span className="text-danger text-center">{errors["Email"]}</span>
                        <textarea placeholder="Message" type="text" name="Message"
                            value={this.state.contact.Message}
                            onChange={this.onChange} />
                        <span className="text-danger text-center">{errors["Message"]}</span>
                        <input className="button" type="submit" />
                    </form>
                </div>
            </section>
        );
    }
}

