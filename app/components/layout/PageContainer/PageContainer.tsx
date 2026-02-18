import styles from "./pageContainer.module.css";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
