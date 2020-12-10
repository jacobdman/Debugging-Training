import React from "react";

const Test1 = props => {
  console.log(props);
  return <div>{props.names.map(name => `Hello ${name}`)}</div>;
};

export default Test1;
