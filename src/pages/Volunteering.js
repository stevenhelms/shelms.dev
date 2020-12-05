import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>Volunteering</h2>
        <p>Serving the least of these</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <section>
            <h2>Kidz Konnect 4 Jesus</h2>
            <p>
              Kidz Konnect 4 Jesus (KK4Jesus) is long term, focused ministry
              that began in Belize, Central America in 2005. KK4Jesus is all
              about making disciples and growing meaningful, Christ based
              relationships between US &amp; Canadian Churches and Belizean
              villages (schools, churches and communities) in a true, long term
              partnership setting that focuses on developing disciples.
            </p>
            <p>
              My entire family of 7 spent a month in Belize in 2014 serving with
              KK4Jesus. They were wonderful hosts and we were able to engage the
              local communities and made many connections and friends in the
              process. We long to return to Belize.
            </p>
            <Link to="https://kidzkonnect4jesus.org/">
              https://kidzkonnect4jesus.org/
            </Link>
            <hr />
          </section>
          <section>
            <h2>Pathlight International</h2>
            <p>
              Pathlight empower children in Belize to receive a quality
              education, break free from poverty, and reach their God-given
              potential.
            </p>
            <p>
              Part of my family was able to spend time with Pathlight in 2014
              and serve the local schools while we were in the country learning
              more about not just the country, but the people and ongoing ways
              we could serve in a long term capacity.
            </p>
            <Link to="https://pathlight.org/">https://pathlight.org/</Link>
            <hr />
          </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
