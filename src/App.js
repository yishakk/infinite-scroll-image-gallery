import React, {useState, useEffect} from 'react';
import {Heading} from './components/Heading';
import {Loader} from './components/Loader';
import {UnsplashImage} from './components/UnsplashImage';
import axios from 'axios';
import Styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

//style
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  background-color: #557f57;
}
`;

const WrapperImages = Styled.section`
max-width: 70rem;
margin: 4rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-auto-rows: 300px;

`;


function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
  fetchImages();
}, [])

const fetchImages = (count = 10) => {
  const apiRoot = "https://api.unsplash.com";
  const accessKey = '9MHPU_IKZ0MoNg41OnM-h9A4PQn-e_b5KN6gODtmyYU';
  console.log(accessKey)
  axios
   .get(`${apiRoot}/photos?client_id=${accessKey}&count=&{count}`)
   .then(res => {
     console.log(res);
     setImages([...images, ...res.data]);
   })
   .catch(err => {
     console.log(err)
   })

}


  return (
    <div>
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader />}

      >
      

      </InfiniteScroll>

      <WrapperImages>
      {images.map((image, index) => (
        <UnsplashImage url={image.urls.regular} key={index} />
      ))}
      </WrapperImages>
            
    </div>
  );
}

export default App;
