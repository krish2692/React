import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    <nav className="nav">
      <img src="/assets/air-bnb-logo.png" alt='Airbnb logo'></img>
    </nav>
  );
}

function GridIntro() {
  return (
    <div className='grid-intro' id='grid'>
      <img src='/assets/img-grid.png' alt='grid image'></img>
      <div className='intro-text'>
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className='cards'>
      <img className='person' src='/assets/img-person1.png' alt='person image'></img>
      <div className='rating-reviews'>
        <img className='stars' src='/assets/star 1.png' alt='rating'></img>
        <span className='rating'>5.0</span>
        <span className='reviews'>(6)</span>
        <span className='country-info'>-USA</span>
      </div>
      <span className='title'>
        Life Lessons with Katie
      </span>
      <div>
        <span className='price'>
          From $136 /
        </span>
        <span className='title'>
          person
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className='flex'>
      <Card />
      <Card />
    </div>
  );
}
  export { Navbar, GridIntro, Card, Hero };
