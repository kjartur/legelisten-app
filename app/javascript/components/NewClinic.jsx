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
}

export default NewClinic;
