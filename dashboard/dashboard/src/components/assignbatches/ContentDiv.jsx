import React from "react";
import styled from "styled-components";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');
</style>
const H1 = styled.h1`
  font-size: 7.5rem;
  font-family: 'Poppins', sans-serif;
    padding-left:5rem;
    padding-top:2rem;
    line-height: 140px;
`;
const Span=styled.span`
    color:#CC5500;
`
const P=styled.p`
    font-size:1.2em;
    font-family: 'Poppins', sans-serif;
    padding:5rem;
    padding-top:2.5rem;
    line-height:1.875rem;
    color:#676767;
    font-weight:500;
    
`
const ContentDiv = () => {
  return (
    <div id="contentDiv">
      <H1>
        Assign <br /> <Span>Batches</Span>
      </H1>
      <P>
        QSpiders is the world’s ace software training organization with an aim
        to bridge the gap between the demands of the industry and the curriculum
        of educational institutions. With centers across the Globe, the
        institute is a platform where young minds are given the opportunity to
        build successful careers. ”QSpiders is a place where businesses find
        talent and dreams take flight."
      </P>
    </div>
  );
};

export default ContentDiv;
