import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="App-line"></div>
      
      <main className="App-main">
        <p>
          Page 1
        </p>

        <Link to="/page2" className="App-link">
          Next Page
        </Link>
      </main>
    </div>
  );
}
