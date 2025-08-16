/**How can you render a component called House in React?
root.render(<House>);
root.render(House);**/
root.render(<House />);  //answer

// Name the following React component "person".
function Person(props) {
  return <h2>Hi, I'm {props.name}</h2>;
}

// Complete this component which uses properties.
function Person(props) {
  return <h1>Hi, I'm {props.name}!</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Person name="Jesse"/>);