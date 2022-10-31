import "../styles/My.css";
import "../styles/nav.css";

const MyNav = ()=> {
  return (

      <nav>
        <a className="mylogo">mylogo</a>
        <ul className="nav_menu">
          <li> <a href="sid1">Html</a> </li>
          <li> <a href="sid2">Css</a>  </li>
          <li> <a href="sid3">JavaScript</a> </li>
          <li> <a href="sid4">React</a> </li>
        </ul>

        <ul className="nav_icon">
          <li>
          <a href="http://www.facebook.com">
            <i className="fa-brands fa-facebook" /> </a>
          </li>
          <li>
          <a href="https://www.instagram.com">
            <i className="fa-brands fa-square-instagram" /></a>
          </li>
          <li>
          <a href="https://www.github.com/">
            <i className="fa-brands fa-github" /></a>
          </li>
        </ul>
      </nav>
  );
}

export default MyNav;
