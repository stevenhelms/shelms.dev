import React from 'react';
import { PopupText, PopupWidget } from 'react-calendly';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/hut-tree-min.jpg';
import pic2 from '../assets/images/chairs-beach-min.jpg';
import pic3 from '../assets/images/2020-BearState-Headshot1-750x530-min.jpg';
import pn1 from '../assets/images/pn1-coach-blue.png';
// import config from '../../config';

const calendlyStyles = {
  // backgroundColor: 'rgba(144, 144, 144, 0.25)',
  backgroundColor: 'transparent',
  width: '100%',
  borderBottomColor: 'transparent',
  borderRadius: '3px',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  textTransform: 'uppercase',
  padding: '0 2.75em',
  display: 'inline-block',
  maxWidth: '30em',
  fontSize: '0.8em',
  fontWeight: '600',
  boxShadow: 'inset 0 0 0 2px #fff',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  lineHeight: '3.125em',
  letterSpacing: '0.225em',
};

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>Nutrition Coaching</h2>
        <p>Be the Best for your Family!</p>
        <ul className="actions special">
          <li>
            {/* <a
              href="https://calendly.com/brickbybricknutrition"
              className="button fit"
            >
              Schedule a Free Intro
            </a> */}
            <PopupText
              url="https://calendly.com/brickbybricknutrition"
              text="Schedule a Free Intro"
              styles={calendlyStyles}
            />
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1">
      <div className="inner">
        <header className="major">
          <h2>Life is too short to be unhealthy.</h2>
        </header>
        <section>
          <div className="row">
            <div className="col-6 col-12-medium">
              <h3>
                Too many diet options.
                <br />
                Too little time.
              </h3>
              <p>
                Struggling to find a good life balance? Don’t leave your health
                to the convenient fast food kitchens. Without support and
                guidance, it’s easy to slip into what is convenient rather than
                what is good for you. What is convenient today may shorten your
                life span or reduce your quality of life.
              </p>
            </div>
            <div
              className="col-6 col-12-medium"
              style={{ borderLeft: '3px solid rgba(0, 0, 0, 0.125)' }}
            >
              <ul>
                <li>Do you want to feel better?</li>
                <li>Do you need to lose a few pounds?</li>
                <li>Do you run out of energy after lunch?</li>
                <li>Overwhelmed and confused by popular diets?</li>
                <li>No time to cook?</li>
                <li>Don’t like to cook?</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>Finding a Nutritious Balance Should be Easy!</h2>
          <h4>And I'm Here to Help!</h4>
          <p>
            By learning some key practices and skills, you can be set to reach
            your health goals. Let us help you on your journey and keep you on
            track to succeed.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>My Approach</h2>
          <p>
            Food is only part of the equation when learning to live a healthy
            lifestyle for the long haul. We will work together to form new
            skills, practices, and habits that will help you become a better
            version of you and sustain those skills for years to come.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>Honest Results</h2>
          <p>
            My own love of food lead me to being overweight, weighing in at
            240lbs. I've been on a several decade long journey to master that
            relationship. I now weight in at 155lbs and found a sustainable
            lifestyle and foods I can eat to live a long and healthy life. It’s
            my goal to serve others and help them do the same.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>
            Don’t wait to live better. Live like today is your last.
            <br />
            Get started now.
          </h2>
        </header>
        <ul className="features">
          <div className="image">
            <img src={pn1} alt="" />
          </div>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header class="major">
          <h2>Stay In Touch</h2>
          <p>
            If you're looking for help with your nutrition, connect with me and
            we'll get started.
          </p>
        </header>
        <section
          className="actions special features"
          style={{ border: 'none' }}
        >
          <div>
            <PopupText
              url="https://calendly.com/brickbybricknutrition"
              text="Schedule a Free Intro"
              styles={calendlyStyles}
            />
          </div>
        </section>
      </div>
      <PopupWidget
        url="https://calendly.com/brickbybricknutrition"
        text="Schedule a Free Intro"
      />
    </section>
  </Layout>
);

export default IndexPage;
