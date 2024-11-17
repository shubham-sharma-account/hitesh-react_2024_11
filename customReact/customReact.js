function customRender(reactEle, container) {
    const domEle =  document.createElement(reactEle.type)
    domEle.innerHTML = reactEle.children
    domEle.setAttribute('href', reactEle.props.href)
    domEle.setAttribute('target', reactEle.props.target)
    container.appendChild(domEle)    
}

const reactEle = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: "Click me to visit Google"
}

const mainContainer = document.querySelector("#root")

customRender(reactEle, mainContainer)