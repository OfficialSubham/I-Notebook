import React from "react";

const Tag = (props) => {
  return (
    <span className="badge rounded-pill text-bg-primary mx-1 my-1 ">
      {props.tag}
    </span>
  );
};

export default Tag;
