import styles from "./Contact.module.css";
import vkIcon from "../assets/vkicon.png";
import instaIcon from "../assets/instaicon.png";
import gitHubIcon from "../assets/github.png";
import telegramIcon from "../assets/telegram.png";
import emailIcon from "../assets/email.png";
import gmailIcon from "../assets/gmail.png";
import outlookIcon from "../assets/outlook.png";
export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contacts</h1>

      <p className={styles.subtitle}>Links to my social media and GitHub:</p>

      {/* Социальные сети */}
      <div className={styles.socialLinks}>
        <a href="https://vk.com/iskakov98" target="_blank">
          <img src={vkIcon} alt="VK" className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/iskakov98_/" target="_blank">
          <img src={instaIcon} alt="Instagram" className={styles.icon} />
        </a>
        <a href="https://github.com/Nurlan98Is" target="_blank">
          <img src={gitHubIcon} alt="GitHub" className={styles.icon} />
        </a>
        <a href="https://t.me/XnurQ" target="_blank">
          <img src={telegramIcon} alt="Telegram" className={styles.icon} />
        </a>
      </div>

      {/* Email контакты */}
      <div className={styles.emailContainer}>
        <p className={styles.subtitle}>Emails:</p>

        <div className={styles.emailItem}>
          <img src={gmailIcon} alt="Gmail" className={styles.emailIcon} />
          <span>Iskakov9821@gmail.com</span>
        </div>

        <div className={styles.emailItem}>
          <img src={emailIcon} alt="Yandex" className={styles.emailIcon} />
          <span>Iskakov98@yandex.ru</span>
        </div>

        <div className={styles.emailItem}>
          <img src={outlookIcon} alt="Outlook" className={styles.emailIcon} />
          <span>Iskakov9821@outlook.com</span>
        </div>
      </div>
    </div>
  );
};
