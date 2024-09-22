import React from "react";

const Tag = (props) => {

    let wholeTag = props.tag
    let tagArray = wholeTag.split(",")
    let allTag = tagArray.map((tag) => {
        let tagWithoutSpace = tag.trim()
        return <span className="badge rounded-pill text-bg-primary mx-1 my-1 ">{tagWithoutSpace}</span>;
    })
  return allTag;
};

export default Tag;
