
import React from "react";
import { Link } from "react-router-dom";

class Clinics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clinics: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/clinics/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network error");
      })
      .then(response => this.setState({ clinics: response }))
      .catch(() => this.props.history.push("/"));
}
render() {
    const { clinics } = this.state;
    const allClinics = clinics.map((clinic, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={clinic.image}
            className="card-img-top"
            alt={`${clinic.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{clinic.name}</h5>
            <Link to={`/clinic/${clinic.id}`} className="btn custom-button">
              View Clinic
            </Link>
          </div>
        </div>
      </div>
    ));
    const noClinic = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No registered clinics. <Link to="/new_clinic">Add clinic</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Legelisten</h1>
            <p className="lead text-muted">
              We work with the best medical professionals in the field.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/clinic" className="btn custom-button">
                Create New Clinic
              </Link>
            </div>
            <div className="row">
              {clinics.length > 0 ? allClinics : noClinic}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }

}
export default Clinics;