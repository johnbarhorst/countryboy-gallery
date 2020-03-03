import React, { useReducer } from 'react';
import { motion } from 'framer-motion';
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

`;

const BackButton = styled.button`
  cursor: pointer;
  outline: none;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 2px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid black;
  opacity: 0.1;
  background: #ddd;
  border: none;
  :hover,
  :active {
    opacity: .7;
  }
`;

const ForwardButton = styled(BackButton)`
  left: ${props => props.w - 52}px;
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

const Gallery = ({ children, interval, width = '400', height = '500', speed = .3, isVertical = false }) => {
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
    <GalleryDisplay w={width} h={height}>
      <BackButton onClick={() => handleBack()} />
      <motion.div
        initial={{
          x: '-' + width + 'px'
        }}
        animate={{
          x: '-' + translate + 'px'
        }}
        transition={{
          duration: transition
        }}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          display: 'flex'
        }}
      >
        <GallerySlide element={children[children.length - 1]} height={height} width={width} />
        {children.map((el, i) => (<GallerySlide key={i} element={el} height={height} width={width} />))}
        <GallerySlide element={children[0]} height={height} width={width} />
      </motion.div>
      <ForwardButton w={width} onClick={() => handleForward()} />
    </GalleryDisplay>
  )
}

export default Gallery;