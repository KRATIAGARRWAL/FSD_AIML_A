const parent=document.getElementById("root");
const element=React.createElement("h1",{},"This is new Heading");
const ele=React.createElement("h2",{},"Shopping cart");
const a=React.createElement("li",{},"Item1");
const b=React.createElement("li",{},"Item2");
const list=React.createElement("ul",{},a,b)
const para=<p>This is a new para</p>
const root=ReactDOM.createRoot(parent);
root.render([element,ele,list,para]);

