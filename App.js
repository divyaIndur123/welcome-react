import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

// JSX
// - its html like syntax not html inside javascript
// - jsx => createElement by babel -js object =>htmlElement by babel and then rendered by render method

const heading = <h1>Welcome to react</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
