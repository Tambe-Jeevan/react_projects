// Render a <p> element without using JSX.
const paragraph = React.createElement('p', {}, 'This is a paragraph.');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(paragraph);

// Render a <p> element using JSX.
const paragraph1 = <p>This is a paragraph using JSX!</p>;
const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(paragraph1);

// Complete this statement that renders a JavaScript expression inside JSX.
const myelement = <h1>React is {10 * 10} times better with JSX!</h1>;


// Complete this expression to include a class attribute the way JSX supports.
const title = <h1 className="primary">Hello World!</h1>;

