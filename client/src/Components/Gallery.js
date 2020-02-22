import React, { useState, Children } from 'react';
import styled from 'styled-components';

const GalleryDisplay = styled.div`
  display: flex;
  overflow: hidden;
  width: ${props => props.w}px;
  height: ${props => props.h}px;
  margin: 0 auto;
  position: relative;
`;

const SlideButton = styled.button`
  position: absolute;
  left: 0;
  height: 100%;
  width: 50px;
  opacity: 0;
  background: #333;
  content: '<';
  :hover {
    opacity: .5;
  }
`;

const RightButton = styled(SlideButton)`
  left: ${props => props.w - 50}px;
  content: '>';
`;

const Slide = styled.div`

  `;

const GallerySlide = ({ element }) => {

  return (
    <Slide>
      {element}
    </Slide>
  )
}

const Gallery = ({ children, interval, width = '500', height = '300' }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [nextSlide, setNextSlide] = useState(2);
  const [prevSlide, setPrevSlide] = useState(0);
  const [slideArray, setSlideArray] = useState([]);
  const childrenArray = Children.toArray(children);


  const handleClick = (e) => {
    console.log(e.target);
  }

  return (
    <GalleryDisplay w={width} h={height}>
      <SlideButton />
      {childrenArray.map((el, i) => (<GallerySlide key={i} element={el} />))}
      <RightButton w={width} />
    </GalleryDisplay>
  )
}

export default Gallery;