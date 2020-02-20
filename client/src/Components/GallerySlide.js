import React from 'react';
import styled from 'styled-components';


const GallerySlide = ({ url, altText, description }) => {
  return (
    <div>
      <div>
        <img src={url} alt={altText} />
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

export default GallerySlide;