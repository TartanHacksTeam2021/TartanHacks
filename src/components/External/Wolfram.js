import React, { Component, useState, useEffect } from "react";

function API() {
  const [setMsg] = useState(0);
  fetch("/.netlify/functions/node-fetch", {
    headers: { accept: "Accept: application/json" },
  })
    .then((x) => x.json())
    .then(({ msg }) => setMsg(msg));
  return <div>bruh</div>;
}

class Wolfram extends Component {
  render() {
    return <div>{API}</div>;
  }
}

export default Wolfram;
