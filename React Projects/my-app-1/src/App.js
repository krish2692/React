import logo from './logo.svg';
//import './index.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

function HeaderComponent() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="custom-img" alt="logo"></img>
         <ul className='nav-items'>
          <li>Contact</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function FooterComponent() {
  return (
    <footer>
      <small>
        © 2022 KRISH development. All rights reserved.
      </small>
    </footer>
  )
}

function MainContent() {
  return (
    <div className="mainContent">
      <h1>
        Fun facts about React
      </h1>
      <ul className='nav-items'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export {App, HeaderComponent,FooterComponent , MainContent};*/
/*<nav className="nav">
        <img src={logo} className="custom-img" alt="logo"></img>
        <label className='logoText'>ReactFacts</label>
        <label className='text-right'>React Course-Project 1</label>
      </nav>*/


function HeaderComponent() {
  return (
      <nav>
            <img src={logo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
  )
}

function FooterComponent() {
  return (
    <footer>
      <small>
        © 2022 KRISH development. All rights reserved.
      </small>
    </footer>
  )
}

function MainContent() {
  return (
    <div className="mainContent">
      <h1>
        Fun facts about React
      </h1>
      <ul className='nav-items'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export {HeaderComponent,FooterComponent , MainContent};
