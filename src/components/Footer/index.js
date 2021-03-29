import './style.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">&copy; {year} Kumiko Kashii</div>
  );
}

export default Footer;
