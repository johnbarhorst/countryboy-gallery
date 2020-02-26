import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import GalleryList from './GalleryList';

const Img = styled.img`
  width: 600px;
`;



const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(GalleryList.gallery);

  }, []);
  return (
    <div className="App">
      <Header />
      <Gallery width={600} >
        {images.map((img, i) => (
          <Img src={`./img${img.url}`} alt={img.altText} key={i} />
        ))}
      </Gallery>
    </div>
  );
}

export default App;
