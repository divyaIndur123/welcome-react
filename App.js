/* <div id="parent">
  <div id="child1">
    <h1>I m h1</h1>
     <h1>I m h1</h1>
  </div>
  <div id="child1">
    <h1>I m h1</h1>
    <h1>I m h1</h1>
  </div>
</div> */

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello reactjs from diffrent file"
// );

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I m h1"),
    React.createElement("h1", {}, "I m h1"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I m h1"),
    React.createElement("h1", {}, "I m h1"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
