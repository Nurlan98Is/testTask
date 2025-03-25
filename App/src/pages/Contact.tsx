import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contacts</h1>

      <p className={styles.subtitle}>Links to my social media and GitHub:</p>

      {/* Социальные сети */}
      <div className={styles.socialLinks}>
        <a href="https://vk.com/iskakov98" target="_blank">
          <img src="src/assets/vkicon.png" alt="VK" className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/iskakov98_/" target="_blank">
          <img
            src="src/assets/instaicon.png"
            alt="Instagram"
            className={styles.icon}
          />
        </a>
        <a href="https://github.com/Nurlan98Is" target="_blank">
          <img
            src="src/assets/github.png"
            alt="GitHub"
            className={styles.icon}
          />
        </a>
        <a href="https://t.me/XnurQ" target="_blank">
          <img
            src="src/assets/telegram.png"
            alt="Telegram"
            className={styles.icon}
          />
        </a>
      </div>

      {/* Email контакты */}
      <div className={styles.emailContainer}>
        <p className={styles.subtitle}>Emails:</p>

        <div className={styles.emailItem}>
          <img
            src="src/assets/gmail.png"
            alt="Gmail"
            className={styles.emailIcon}
          />
          <span>Iskakov9821@gmail.com</span>
        </div>

        <div className={styles.emailItem}>
          <img
            src="src/assets/email.png"
            alt="Yandex"
            className={styles.emailIcon}
          />
          <span>Iskakov98@yandex.ru</span>
        </div>

        <div className={styles.emailItem}>
          <img
            src="src/assets/outlook.png"
            alt="Outlook"
            className={styles.emailIcon}
          />
          <span>Iskakov9821@outlook.com</span>
        </div>
      </div>
    </div>
  );
};
