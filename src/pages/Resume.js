import React from 'react';
import Layout from '../components/Layout';
import JobTitle from '../components/JobTitle';
import Education from '../components/Education';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>Resume</h2>
        <p>Professional History and Experience</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <section>
            <h2>Experience</h2>
            <JobTitle
              org="Adyptation"
              title="Lead Software Engineer"
              dates="July 2020 - present"
              location="Miamisburg, OH"
            />
            <p>
              Providing software and data analytics for healthcare providers to
              support patient health tracking and ongoing care management. We
              specialize in transforming data into insights for
              difficult-to-manage conditions like autoimmune disease and Air
              Force pilot readiness.
            </p>
            <p>
              Managing the technology architecture, overseeing software
              development, ensuring regulatory compliance, and mentoring other
              developers.
            </p>
            <hr />
            <JobTitle
              org="Bear State Gym"
              title="Nutrition Coach"
              dates="July 2020 - present"
              location="Bentonville, AR"
              type="Part-time"
            />
            <p>
              I am a nutrition coach who helps gym members, busy people and
              families who want to live healthy lifestyles but feel overwhelmed
              by information and lack of time. My aim is to not simply provide
              nutrition information but to become a trusted advisor who works
              diligently with my clients to establish sustainable habits and
              activities enabling them to reach their goals.
            </p>
            <hr />
            <JobTitle
              org="Bioinformatix"
              title="CTO and Cofounder"
              dates="April 2016 - present"
              location="Boston, MA"
            />
            <p>
              Provide both strategic and operational oversight over all the
              Bioinformatix technologies. This includes setting technology
              strategies, and assisting in daily operations and development
              efforts which are closely tied together. Bioinformatix IT is an
              Agile DevOps group that tightly integrates development and
              operations. The product release cycle is based on continuous
              delivery/integration (CD/CI) models with multiple product releases
              per day. Using modern programming development frameworks,
              centralized configuration management, and immutable container
              technologies the services scale rapidly and deploy seamlessly
              across numerous cloud providers. We comply and exceed most US
              HIPAA regulations by tokenizing patient data, encrypting all
              personally identifiable information at-rest and in-transit, and
              tightly control access to protected health information (PHI).
            </p>
            <ul>
              <li>
                Advanced a conceptual idea through the software development
                process into a full product solving complex medication adherence
                problems.
              </li>
              <li>
                Architected network and its requirements to provide a highly
                available and secure SaaS product.
              </li>
              <li>
                Established continuous delivery processes to allow for multiple
                software releases per day improving customer experiences.
              </li>
              <li>
                Oversee ongoing software design and development translating
                business requirements into development tasks.
              </li>
            </ul>
            <hr />
            <JobTitle
              org="Cadenrock Consulting LLC"
              title="Managing Partner"
              dates="June 2005 - present"
              location="Bentonville, AR"
            />
            <p>
              Started and operate small business to provide technical consulting
              and development services.
            </p>
            <ul>
              <li>
                Solve complex business problems reducing employee time and
                eliminating mistakes.
              </li>
              <li>
                Develop software products from concept, design, programming,
                testing, and release.
              </li>
              <li>
                Actively use Python, JavaScript, MySQL, noSQL, Linux and other
                technologies as projects dictate.
              </li>
              <li>
                Use latest DevOps strategies to improve software revision
                consistency and rollout.
              </li>
              <li>
                Apply machine learning (ML) algorithms to learn and predict
                future behaviors.
              </li>
            </ul>
            <hr />
            <JobTitle
              org="John Brown University"
              title="Director of Cybersecurity Programs"
              dates="June 2017 - June 2020"
              location="Siloam Springs, AR"
            />
            <p>
              Lead JBU cybersecurity graduate program initiative in educating
              students to earn a Master of Science in Cybersecurity. As
              director, time is spent in ongoing research of the cybersecurity
              field, course development, regular course and lab updates,
              continuous teaching and evaluation, and program marketing and
              recruiting.
            </p>
            <ul>
              <li>
                Develop courses aligning with NSA/DHS National Centers of
                Academic Excellence in Cyber Defense program.
              </li>
              <li>
                Create and design practical hands-on labs immediately usable in
                real-world scenarios.
              </li>
              <li>
                Provide Christian worldview in advising and teaching capacities.
              </li>
              <li>
                Advance the program through marketing, recruiting, and
                networking with business executives.
              </li>
            </ul>
            <hr />
          </section>

          <section>
            <h2>Education</h2>
            <Education
              org="Precision Nutrition"
              cert="Level 1 Certificate in Exercise Nutrition"
              dates="2018"
            />
            <Education
              org="National Restaurant Association"
              cert="ServSafe Food Protection Manager"
              dates="Dec 2018. Expires Dec 2023"
              text="Credential ID: 17235960"
            />
            <Education
              org="Liberty University"
              cert="Master of Science - Cyber Security"
              dates="2017 - 2018"
              text="Graduate with distinction. 3.9 GPA"
            />
            <Education
              org="(ISC)2"
              cert="Certified Information Systems Security Professional (CISSP)"
              dates="Dec 2000. Expired Dec 2010"
              text="Credential ID: 21986"
            />
            <Education
              org="Texas A&amp;M University - Mays Business School"
              cert="Bachelor of Business Administration (BBA), Management Information Systems
"
              dates="1993 - 1996"
              text="Student worker providing UNIX support for both undergraduate and graduate students covering multiple *NIX operating systems including Solaris, NextOS, HPUX, AIX, Linux, and others."
            />
          </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
