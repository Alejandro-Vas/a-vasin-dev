function Footer() {
  return (
    <footer>
      <div className="container">
        © 2021-
        {new Date().getFullYear()}
        {' '}
        Aleksandr Vasin
      </div>
    </footer>
  );
}

export default Footer;
