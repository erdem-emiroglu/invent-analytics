import { AppBar, Container, Toolbar } from '@mui/material';
import Link from 'next/link';

import { HeaderProps } from '@/components/Header/Header.types';

import styles from './Header.module.scss';

const Header = ({ children }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <AppBar className={styles.header} position="static">
        <Toolbar>
          <Container>
            <Link className={styles.homeButton} href="/">
              Home
            </Link>
          </Container>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Header;
