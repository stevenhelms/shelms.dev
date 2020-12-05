import React from 'react';

const Education = ({ org, cert, dates, location, text = null }) => (
  <>
    <header>
      <h4>{org}</h4>
      <p>
        {cert} - {dates}
      </p>
    </header>
    <p>{text ? text : null}</p>
  </>
);

export default Education;
