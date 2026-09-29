import Image from "next/image";
import styles from "./Hero.module.css";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.hero__background}>
        <Image
          src="/background.png"
          alt="Sunset Sessions"
          fill
          priority
          className={styles.hero__backgroundImage}
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className={styles.hero__overlay} />

      {/* Content */}
      <div className={styles.hero__content}>
        <Image
          src="/logo.png"
          alt="Sunset Sessions"
          width={180}
          height={180}
          className={styles.hero__logo}
          priority
        />

        <p className={styles.hero__label}>Coming Soon</p>

        <div className={styles.hero__headline}>
          <span className={styles.hero__headlineLead}>Tickets for</span>
          <div className={styles.hero__logoWrapper}>
            <Image
              src="/Dasailing.png"
              alt="Dasailing"
              width={600}
              height={300}
              className={styles.hero__dasailingLogo}
              priority
            />
          </div>
          <span className={styles.hero__headlineTrail}>will be live soon</span>
        </div>

        <p className={styles.hero__subtext}>
          Join the community to be the first to know.
        </p>

        <div className={styles.hero__cta}>
          <WhatsAppButton href="https://chat.whatsapp.com/Lob05RalhB03obhhnnXDwT" />
        </div>
      </div>
    </section>
  );
}
