import { Box, Typography } from '@mui/material';

const Things = () => {
  return (
    <Box variant="section" id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>The Things</h2>
          <p>There are specific things that define people and make them unique.</p>
        </header>
        <ul className="features">
          <li className="icon fa-heart">
            <h3>Family</h3>
            <p>
              As a husband and father, family is important. Some of my children are extremely
              challenging, but as a Christian, I believe God has a plan for each of their lives and
              my job is to point them the right direction and watch that unfold. There is too much I
              can not control to even attempt it.
            </p>
          </li>
          <li className="icon fa-flag">
            <Typography variant="h3">Service</Typography>
            <Typography variant="p">
              I genuinely have a desire to serve people and see them succeed. I&apos;ve been around
              long enough to know there are people that will take advantage of that, but living a
              life of service to others is important and brings meaning to a world where there is a
              love of self without regard for others.
            </Typography>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Technology</h3>
            <p>
              My analytical brain just &quot;gets it&quot; when it comes to all things tech. My
              professional career has been centered on technology and I love solving the problems
              that come along with it. Helping others simplify and improve their lives with
              technology is high on my list. However, using it wisely is critical. There are
              malicious people (the hackers and crackers) that aim to destroy for personal gain.
              Also, too much tech (i.e. social media) can lead to an imbalance with the
              realationships and people around you.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Code</h3>
            <p>
              I enjoy creating and often that looks like code. I&apos;ve been programming in some
              form since my first PC back in 1986. It&apos;s been a journey from DOS based games in
              BASIC, to online text-based role-playing games (i.e. multi-user dungeons, MUDs) in C,
              to &quot;real&quot; business applications in Perl, PHP, JavaScript, and Python. There
              was some Fortran and COBOL along the way, but those have long been forgotten. Modern
              programming practices keep me sharp and the new tools continue to amaze me knowing
              what always had to be written from scratch in the past.
            </p>
          </li>
          <li className="icon fa-paper-plane">
            <h3>Travel</h3>
            <p>
              There are many places I would love to visit one day. I think that everyone should
              travel to Middle Earth and visit a hobbit hole (New Zealand) and &quot;Go Slow&quot;
              while relaxing on a small tropical island (Caye Caulker, Belize). If it&apos;s warm,
              sign me up.
            </p>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Things;
