import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const CareeerBlockStyles = styled.div`
  display: grid;
  gap: 0.25rem;
  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }
  .gatsby-image-wrapper {
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 999rem;
  }
  .company {
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0;
  }
  .title {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
  .description {
    margin: 0;
  }
`;

export default function CareerBlock({ company, title, date, children, img }) {
  return (
    <CareeerBlockStyles>
      <div className="header">
        <Img fluid={img} alt={`${company} logo`} />
        <p className="company">{company}</p>
      </div>
      <div className="body">
        <p className="title">
          {title} / {date}
        </p>
        <p className="description">{children}</p>
      </div>
    </CareeerBlockStyles>
  );
}
