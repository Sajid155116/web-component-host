class MyDashboard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }); // Shadow DOM for encapsulation
    }
  
    connectedCallback() {
      this.render();
      this.attachEvents();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          button {
            padding: 10px;
            font-size: 16px;
            background: blue;
            color: white;
            border: none;
            cursor: pointer;
          }
        </style>
        <button id="helloBtn">Click Me</button>
        <p id="message"></p>
      `;
    }
  
    attachEvents() {
      this.shadowRoot.querySelector("#helloBtn").addEventListener("click", async () => {
        const message = await this.callAPI();
        this.shadowRoot.querySelector("#message").textContent = message;
      });
    }
  
    async callAPI() {
      // Simulating an API call (replace this with a real fetch call)
      return new Promise((resolve) => {
        setTimeout(() => resolve("Hello, World!"), 500);
      });
    }
  }
  
  // Registering the web component
  customElements.define("my-dashboard", MyDashboard);
  