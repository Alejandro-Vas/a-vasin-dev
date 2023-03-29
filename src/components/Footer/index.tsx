function Footer() {
  const date = `© 2021-${new Date().getFullYear()} Aleksandr Vasin`;

  return (
    <footer>
      <div className="container">
        {date}
      </div>
    </footer>
  );
}

export default Footer;
