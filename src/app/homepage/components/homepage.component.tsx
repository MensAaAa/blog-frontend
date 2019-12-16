import React from 'react';
import { Container } from 'reactstrap';
import SplitText from 'react-pose-text';

import '../styles/homepage.styles.scss';

const HomepageComponent = () => (
  <Container fluid={true} className="p-0">
    <section className="homepage">
      <div className="info d-flex flex-column flex-wrap justify-content-center align-items-center">
        <span>
          <SplitText initialPose="exit" pose="enter"  charPoses={{
            exit: { opacity: 0, y: 20 },
            enter: {
              opacity: 1,
              y: 0,
              delay: ({ charIndex }) => charIndex * 30
            }
          }}>Mirzeta Wohrl, pjesma neka, tekst ide i jos teksta, pa jos malo teksta...</SplitText>
        </span>
      </div>
    </section>
  </Container>
)

export default HomepageComponent;