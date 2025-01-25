import pic1 from '../../assets/images/hut-tree-min.jpg';
import pic2 from '../../assets/images/chairs-beach-min.jpg';
import pic3 from '../../assets/images/bearstate-headshot-min.jpg';

const Spotlight = () => {
  return (
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>Tech History</h2>
          <ul>
            <li>Fledgling programmer - late &apos;80s and early &apos;90s</li>
            <li>UNIX administrator at Texas A&amp;M - &apos;90s</li>
            <li>Firewall / routing administrator - late &apos;90s</li>
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
            I spent a month in Belize with my family in 2014 and grew to love the country during
            that time. We would love to have the opportunity to move there and serve the people we
            live with.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>Chef + Nutrition</h2>
          <p>
            My own love of food lead me to being overweight, weighing in at 240lbs. I&apos;ve been
            on a long journey to master that relationship. I now weigh in around leand and strong
            145lbs, and have learned to cook and eat healthy foods. I&apos;ve learned that food is
            not only fuel for the body but builds relationships and creates memories with friends
            and families. I strive to help others see the health benefits of whole,
            minimally-processed foods so they can live a high quality life. I am now a classically
            trained chef and a nutrition coach.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Spotlight;
