import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const ConnectedPosts = ({getData}) => {

    useEffect(() => {

        getData();

    },[])


    return (
       <>Test</>
    )
}

const Post = connect(
    null,
    {getData}
  )(ConnectedPosts);

export default Post