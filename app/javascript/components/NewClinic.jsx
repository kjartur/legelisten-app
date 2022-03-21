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
      .then(response => this.props.history.push(`/clinics`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new clinic to our database.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="clinicName">Clinic name</label>
                <input
                  type="text"
                  name="name"
                  id="clinicName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="clinicAbout">About</label>
                <input
                  type="text"
                  name="about"
                  id="clinicAbout"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <label htmlFor="address">Address</label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                rows="5"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Add Clinic
              </button>
              <Link to="/clinics" className="btn btn-link mt-3">
                Back to clinics
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default NewClinic;
