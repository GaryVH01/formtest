import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <form name="contact" method="POST" netlify>
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>{" "}
    </div>
  );
}

export default App;
