// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
}

const ConnectedForm = () => {

    return (
        <form>
            <h2>Test</h2>
        </form>
    )
}

const Form = connect(
    null,
    mapDispatchToProps
  )(ConnectedForm);

export default Form