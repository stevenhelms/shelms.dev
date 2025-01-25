import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const socialLinks = [
  {
    style: 'brands',
    icon: <LinkedInIcon fontSize="large" />,
    name: 'Linkedin',
    url: 'https://linkedin.com/in/stevenhelms'
  },
  {
    style: 'brands',
    icon: <GitHubIcon fontSize="large" />,
    name: 'Github',
    url: 'https://github.com/stevenhelms'
  },
  {
    style: 'solid',
    icon: <EmailIcon fontSize="large" />,
    name: 'Email',
    url: 'mailto:steve@shelms.dev'
  }
];

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="icons">
        {socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style}`}>
                {icon}
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy;{new Date().getFullYear()} Steve Helms</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
