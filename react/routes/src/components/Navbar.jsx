import { Link } from "react-router-dom";

export default function Navbar () {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/post/1">Primer post</Link>
        </li>
      </ul>
    );
}