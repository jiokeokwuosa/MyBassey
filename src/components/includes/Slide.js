import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const image1 = require('../../assets/img/1.png');
const header1 = <h2>Oil &<br/> Gas Veteran</h2>;
const header2 = <h2>Health, Safety &<br/> Environmental Expert</h2>;
const header3 = <h2>Regulatory &<br/> Compliance Strategist</h2>;

const caption1 = <>Beauty meets proficiency.<br/> Successful at leading the oil<br/> and gas industry, DPR.</> ;
const caption2 = <>Dorothy with her team has<br/> led to the adherence of  regulatory<br/> requirement and laws<br/>  which ensure best oil field practices.</>;
const caption3 = <>Dorothy is your go-to-go <br/> person for advisory in waste <br/> management and environmental<br/> audit inspections.</>;


const items = [
  {
    src: [image1],
    altText: 'Slide 1',
    caption: [caption1],
    header: [header1],
    key: '1'
  },
  {
    src: [image1],
    altText: 'Slide 2',
    caption: [caption2],
    header: [header2],
    key: '2'
  },
  {
    src: [image1],
    altText: 'Slide 3',
    caption: [caption3],
    header: [header3],
    key: '3'
  }
];

const Slide = () => <UncontrolledCarousel items={items} />;

export default Slide;
