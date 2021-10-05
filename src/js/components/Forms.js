// src/js/components/Form.jsx
import React, { Component,useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
}

const ConnectedForm = ({addArticle}) => {

    const [theTitle,setTheTitle] = useState('')

    const handleSubmit = (v) =>{
        v.preventDefault();
        addArticle({id:'test',title:theTitle})
        setTheTitle('')
    }

    return (
        
       <form onSubmit={(v) => handleSubmit(v)}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={theTitle}
                    onChange={(e) => setTheTitle(e.target.value)}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>
       
    )
}

const Form = connect(
    null,
    mapDispatchToProps
  )(ConnectedForm);

export default Form