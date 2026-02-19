import Image from "next/image";
import styles from "./imageTextBlock.module.css";

interface Props {
  title?: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ImageTextBlock({
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
}: Props) {
  return (
    <div
      className={`${styles.wrapper} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.text}>
        {title && <h2>{title}</h2>}
        {children}
      </div>

      <div className={styles.image}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
}
