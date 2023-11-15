import styles from '../page.module.css';
import { Box } from '@mui/material';

interface HomeProps {
  reference: React.RefObject<HTMLDivElement>;
}

export default function Home({ reference }: HomeProps): JSX.Element {

  return (
    <Box className={styles.wrapper} ref={reference}>
      <Box className={styles.containerHome}>
      <h1 className={styles.h1} children='Hi, My Name Is Kendrick' />
      <h1 className={styles.h1} children='I Engineer Software & Automate Processes' />
      </Box>
    </Box>
  );
};