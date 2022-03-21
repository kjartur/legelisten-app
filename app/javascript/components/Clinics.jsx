
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

}
export default Clinics;