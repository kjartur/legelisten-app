import React from "react";
import { Link } from "react-router-dom";

class NewClinic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      about: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/clinics/create";
    const { name, address, about } = this.state;

    if (name.length == 0 || address.length == 0 || about.length == 0)
      return;

    const body = {
      name,
      address,
      about
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/clinic/${response.id}`))
      .catch(error => console.log(error.message));
  }
}

export default NewClinic;
