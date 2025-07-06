import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faDev,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./style.module.css";

const Footer = () => (
  <footer className="py-6 generic-container mt-10">
    <nav>
      <ul className={styles.icons}>
        <li>
          <a
            href="https://twitter.com/theliftingdev"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Kieran Venisons X, formerly Twitter account"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kieranmv95"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Kieran Venisons X GitHub account"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kieran-venison/"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Kieran Venisons LinkedIn account"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/theliftingdev/"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Kieran Venisons Instagram account"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/kieranmv95"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Kieran Venisons DevTo account"
          >
            <FontAwesomeIcon icon={faDev} />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
