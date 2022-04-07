const Header = (props) => {
  return (
    <div>
      <div className="container">
        <h3 className="text-left">{props.title}</h3>
      </div>
      <hr className="mx-2"/>
    </div>
  );
}

export default Header;