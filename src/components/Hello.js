import logo from '../Kali-7.svg';

function Hello(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Happy Hacking, {props.name} & {props.lname}!</h1>
          <h4>Coded by <a href="https://github.com/saramazal" target="_blank" rel="noreferrer">Sara Mazal</a> &copy; 2021</h4>
          </header>
      </div>
    );
  }
  
  export default Hello;