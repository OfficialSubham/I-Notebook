import React from "react";

const Tag = (props) => {
    if(props.tag){
      let wholeTag = props.tag
      let tagArray = wholeTag.split(",")
      let allTag = tagArray.map((tag) => {
          let tagWithoutSpace = tag.trim()
          return <span className="badge rounded-pill text-bg-primary mx-1 my-1 " key={tagWithoutSpace + Math.floor(Math.random() * 100)}>{tagWithoutSpace}</span>;
      })
    return allTag;
    }
    return
   
};

export default Tag;
