import logo from './logo.svg';
import './MyApp.css';


function HeaderComponent() {
    return (
      <header>
        <nav className="nav">
          <img src={logo} className="custom-img" alt="logo"></img>
          <label className='logoText'>ReactFacts</label>
          <label className='text-right'>React Course-Project 1</label>
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
  
  export {HeaderComponent,FooterComponent , MainContent};