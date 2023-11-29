import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-top">
      <div className="header-items">
        <Link to={`/`}>Blog</Link>
      </div>
      <div className="header-contact">
        <Link to={`/Contact`}>お問合せ</Link>
      </div>
    </div>
  );
};

export default Header;
