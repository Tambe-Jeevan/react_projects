function addElement(createEle, mainContainer){
    /*const domElement = document.createElement(createEle.type);
    domElement.innerHTML = createEle.children;
    domElement.setAttribute("href", createEle.props.href);
    domElement.setAttribute("target", createEle.props.target);

    mainContainer.appendChild(domElement);*/

    const domElement = document.createElement(createEle.type);
    domElement.innerHTML = createEle.children;
    for (const prop in createEle.props) {
        if(prop === 'children') continue;
       domElement.setAttribute(prop, createEle.props[prop]);
    }

    mainContainer.appendChild(domElement);
}
const createEle = {
    type: 'a',
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    children:'Click me go to GOOGLE'
}
const mainContainer = document.querySelector('.root');

addElement(createEle, mainContainer);