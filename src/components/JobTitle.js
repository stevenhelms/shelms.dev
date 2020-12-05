import React from 'react';

const JobTitle = ({ org, title, dates, location, type = null }) => (
  <header>
    <h4>
      {org} - {title}
    </h4>
    <p>
      {dates}
      {type ? ' (' + type + ')' : null}, {location}
    </p>
  </header>
);

export default JobTitle;
