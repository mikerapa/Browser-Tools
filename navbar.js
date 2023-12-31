// navbar.js
class CustomNavbar extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to the element.
        const shadowRoot = this.attachShadow({ mode: 'open' });
        
        // Populate the shadow root with the component's content and style.
        shadowRoot.innerHTML = `
            <style>
                #navbar {
                    background-color: #333;
                    overflow: hidden;
                }

                #navbar a {
                    float: left;
                    display: block;
                    color: white;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                }

                #navbar a:hover {
                    background-color: #ddd;
                    color: black;
                }
            </style>
            
            <div id="navbar">
                <a href="./index.html">Home</a>
                <a href="./elements.html">Elements</a>
                <a href="./source.html">Source</a>
                <a href="./console.html">Console</a>
                <a href="./storage.html">Storage</a>
                <a href="./memory.html">Memory</a>
                <a href="./network.html">Network</a>
                <a href="./performance.html">Performance</a>
                <a href="./sensors.html">Sensors</a>
                <a href="./animation.html">Animation</a>
            </div>
        `;
    }
}

// Define the new element.
customElements.define('app-navbar', CustomNavbar);
