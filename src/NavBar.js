import './NavBar.css';

function NavBar(props) {

  return (
    <nav>
      <ol>
        <li><a onClick={() => props.onSelection('home')}>Home</a></li>
        <li><a onClick={() => props.onSelection('writing')}>Writing</a></li>
        <li><a onClick={() => props.onSelection('art')}>Art</a></li>
        <li><a onClick={() => props.onSelection('contact')}>Contact</a></li>
      </ol>
    </nav>
  );
}

export default NavBar;