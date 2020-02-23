import React, { useState, Children, useEffect } from 'react';
import styled from 'styled-components';

const GalleryDisplay = styled.div`
  display: flex;
  overflow: hidden;
  width: ${props => props.w}px;
  height: ${props => props.h}px;
  margin: 0 auto;
  position: relative;
`;

const GalleryContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
`;

const BackButton = styled.button`
  z-index: 1000;
  position: absolute;
  left: 0;
  height: 100%;
  width: 50px;
  opacity: 0;
  background: #333;
  border: none;
  :hover {
    opacity: .3;
  }
`;

const ForwardButton = styled(BackButton)`
  left: ${props => props.w - 50}px;
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

const Gallery = ({ children, interval, width = '400', height = '500' }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(.3);
  const [nextSlide, setNextSlide] = useState(2);
  const [prevSlide, setPrevSlide] = useState(0);
  const [slideArray, setSlideArray] = useState([]);
  const childrenArray = Children.toArray(children);


  const handleBack = () => {
    setCurrentSlide(currentSlide - 1);
  }

  const handleForward = () => {
    setCurrentSlide(currentSlide + 1);
  }

  useEffect(() => {
    setTranslate(currentSlide * width);
  }, [currentSlide])

  return (
    <GalleryDisplay w={width} h={height} >
      <BackButton onClick={() => handleBack()} />
      <GalleryContent translate={translate} transition={transition}>
        {childrenArray.map((el, i) => (<GallerySlide key={i} element={el} />))}
      </GalleryContent>
      <ForwardButton w={width} onClick={() => handleForward()} />
    </GalleryDisplay>
  )
}

export default Gallery;