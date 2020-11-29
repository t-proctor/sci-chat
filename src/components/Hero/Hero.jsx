import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Talk'}{' '}
            <span className="text-color-main">{name || 'science'}</span>
            {title || ', no BS'}{' '}

            {/* <br />

            {subtitle || "Just "}
            <span className="text-color-main">{name || 'science'}</span>
            {subtitle || ', no BS'}{' '} */}

          </h1>
          <h1 className = "hero-subtitle">There’s too much chatter about politics and entertainment. It's hard to find others to talk about the most impactful thing in the world, science. sci.chat pairs people who want to talk about science.</h1>
          <br/>
          {/* <h1 className = "hero-subtitle">$10 a month. First month free. No payment info required to start. </h1> */}

        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <a href="https://form.jotform.com/202908096099061">Sign Up</a>

              {/* <Link to="https://form.jotform.com/202908096099061" smooth duration={1000}>
                {cta || 'Sign Up'}
              </Link> */}
            </span>

            <span className="cta-btn cta-btn--hero">
              {/* <a href="mailto:contact@sci.chat">Contact</a> */}
              <a href="mailto:sci.chat.contact@gmail.com">Contact</a>


              {/* <Link to="mailto:contact@sci.chat" smooth duration={1000}>
                {cta || 'Contact'}
              </Link> */}
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
