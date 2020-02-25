import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';

//Elements 

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

const Gallery = ({ children, interval, width = '400', height = '500', speed = .3 }) => {
  const initialState = {
    currentSlide: 1,
    transition: speed,
    translate: width
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'next':
        return {
          currentSlide: state.currentSlide + 1,
          transition: speed,
          translate: (state.currentSlide + 1) * width
        };
      case 'prev':
        return {
          currentSlide: state.currentSlide - 1,
          transition: speed,
          translate: (state.currentSlide - 1) * width
        };
      case 'lastSlide':
        return {
          currentSlide: children.length,
          transition: 0,
          translate: (children.length) * width
        };
      case 'firstSlide':
        return {
          currentSlide: 1,
          transition: 0,
          translate: width
        }
      default:
        break;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentSlide, transition, translate } = state;

  const handleBack = () => {
    dispatch({ type: 'prev' });
    if (currentSlide === 1) {
      setTimeout(() => {
        dispatch({ type: 'lastSlide' });
      }, 250);
    }
  }

  const handleForward = () => {
    dispatch({ type: 'next' });
    if (currentSlide === children.length) {
      setTimeout(() => {
        dispatch({ type: 'firstSlide' });
      }, 250);
    }

  }

  return (
    <GalleryDisplay w={width} h={height} >
      <BackButton onClick={() => handleBack()} />
      <GalleryContent translate={translate} transition={transition}>
        <GallerySlide element={children[children.length - 1]} />
        {children.map((el, i) => (<GallerySlide key={i} element={el} />))}
        <GallerySlide element={children[0]} />
      </GalleryContent>
      <ForwardButton w={width} onClick={() => handleForward()} />
    </GalleryDisplay>
  )
}

export default Gallery;