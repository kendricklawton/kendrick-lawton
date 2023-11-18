import styles from '../styles/page.module.css'

interface HomeProps {
  reference: React.RefObject<HTMLDivElement>;
}

export default function Home({ reference }: HomeProps): JSX.Element {

  return (
    <div className={styles.wrapper} ref={reference}>
      <div className={styles.containerFull}>
      <h1 className={styles.h1}>Hi, My Name Is Kendrick</h1>
      <h1 className={styles.h1}>I Engineer Software & Automate Processes</h1>
      </div>
    </div>
  );
};