import styles from './LandingPage.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Button from '@mui/material/Button';
import { borderRadius } from '@mui/system';

export default function LandingPage() {
  return (
    <Parallax
      pages={1.2}
      style={{
        top: '0',
        left: '0',
        margin: '0',
        backgroundColor: '#230047',
      }}
    >
      <ParallaxLayer
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundSize: 'cover',
        }}
        speed={2}
        factor={2}
        className={styles.hero_block}
      >
        <div className={styles.hero_container}>
          {/* <h1 className={styles.hero_tagline}>COMING SOON</h1> */}
          <h1 className={styles.hero_tagline_header}>
            The First Fully Integrated Launchpad
          </h1>

          <p style={{ fontSize: '1.4rem' }}>
            An inclusive infrastructure to launch projects, NFTs, token baskets,{' '}
            <br />
            and derivatives with fair and accessible opportunities
          </p>
          <p style={{ fontSize: '1.3rem' }}>IDO Launchpad coming soon</p>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSdb33qv1h1lPLBJOmwQcg_-FQGemNxviQjhkUGOW1Y7PcywYQ/viewform'>
            <Button
              variant='contained'
              style={{
                marginTop: '20px',
                fontSize: '1.3rem',
                borderRadius: '30px',
              }}
            >
              APPLY
            </Button>
          </a>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
