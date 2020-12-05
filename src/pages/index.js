import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/hut-tree-min.jpg';
import pic2 from '../assets/images/chairs-beach-min.jpg';
import pic3 from '../assets/images/2020-BearState-Headshot1-750x530-min.jpg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Quick Snapshot</h2>
          <p>
            I am a child of God, missionary, life-long learner and
            problem-solver. Husband of one, father of five. Bachelor of Business
            in Information Systems, Master of Science in Cybersecurity. I lead
            by example, see the big picture and create strategies to succeed. I
            have been working with technology since 1988 in some form to
            accomplish those things.
          </p>
          <p>
            I want to serve people with my gifts. I develop apps to help people
            improve their health. I'm a nutrition coach, chef-in-training, and
            love food. Food is not only fuel for the body but builds
            relationships, and creates memories with friends and families. I
            strive to help others see the health benefits of whole,
            minimally-processed foods so they can live a high quality life.
          </p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>Tech History</h2>
          <ul>
            <li>Fledgling programmer - late '80s and early '90s</li>
            <li>UNIX administrator at Texas A&amp;M - '90s</li>
            <li>Firewall / routing administrator - late '90s</li>
            <li>Security consultant - 2000 to 2017</li>
            <li>Teacher/Professor - 2017 - 2020</li>
            <li>SaaS entrepreneur - 2000 - present</li>
            <li>Jack of all trades, master of none - always</li>
          </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Belize</h2>
          <p>
            I spent a month in Belize with my family in 2014 and grew to love
            the country during that time. We would love to have the opportunity
            to move there and serve the people we live with.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>Chef-In-Training + Nutrition</h2>
          <p>
            My own love of food lead me to being overweight, weighing in at
            240lbs. I've been on a long journey to master that relationship. I
            now weight in at 155lbs and am part of a great gym community. I
            serve that group by providing nutrition services through the gym and
            am certified by Precision Nutrition.
          </p>
          <p>
            I continue to study at Brightwater to hone my skills at cooking and
            hope to use the combination of those skills with nutrition to help
            people learn how to make healthy and delicious foods.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>The Things</h2>
          <p>
            There are specific things that define people and make them unique.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-heart">
            <h3>Family</h3>
            <p>
              As a husband and father, family is important. Some of my children
              are extremely challenging, but as a Christian, I believe God has a
              plan for each of their lives and my job is to point them the right
              direction and watch that unfold. There is too much I can not
              control to even attempt it.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Service</h3>
            <p>
              I genuinely have a desire to serve people and see them succeed.
              I've been around long enough to know there are people that will
              take advantage of that, but living a life of service to others is
              important and brings meaning to a world where there is a love of
              self without regard for others.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Technology</h3>
            <p>
              My analytical brain just "gets it" when it comes to all things
              tech. My professional career has been centered on technology and I
              love solving the problems that come along with it. Helping others
              simplify and improve their lives with technology is high on my
              list. However, using it wisely is critical. There are malicious
              people (the hackers and crackers) that aim to destroy for personal
              gain. Also, too much tech (i.e. social media) can lead to an
              imbalance with the realationships and people around you.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Code</h3>
            <p>
              I enjoy creating and often that looks like code. I've been
              programming in some form since my first PC back in 1986. It's been
              a journey from DOS based games in BASIC, to online text-based
              role-playing games (i.e. multi-user dungeons, MUDs) in C, to
              "real" business applications in Perl, PHP, JavaScript, and Python.
              There was some Fortran and COBOL along the way, but those have
              long been forgotten. Modern programming practices keep me sharp
              and the new tools continue to amaze me knowing what always had to
              be written from scratch in the past.
            </p>
          </li>
          <li className="icon fa-paper-plane">
            <h3>Travel</h3>
            <p>
              There are many places I would love to visit one day. I think that
              everyone should travel to Middle Earth and visit a hobbit hole
              (New Zealand) and "Go Slow" while relaxing on a small tropical
              island (Caye Caulker, Belize). If it's warm, sign me up.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Stay In Touch</h2>
          <p>
            If you're looking for help with your nutrition, or need help with
            technology, feel free to connect with me.
          </p>
        </header>
        <ul className="actions stacked">
          {/* <li>
            <a href="mailto:" className="button fit primary">
              Email Me
            </a>
          </li> */}
          <li>
            <a
              href="https://bearstategym.practicebetter.io/#/5f55848c2a90290740425407/bookings"
              className="button fit"
            >
              Nutrition Schedule
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
