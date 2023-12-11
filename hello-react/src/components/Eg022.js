import React, { useState } from 'react';
import img1 from './EG022-100P-Y.jpg';
import img2 from './EG022-100P-W.jpg';
import img3 from './EG022-100P-R.jpg';

function Eg022() {
  const [imagePath, setImagePath] = useState(img1);

  function changeImage(imageNumber) {
    switch (imageNumber) {
      case 1:
        setImagePath(img1); 
        break;
      case 2:
        setImagePath(img2);
        break;
      case 3:
        setImagePath(img3);
        break;
      default:
        setImagePath(img1);
    }
  }

  return (
    <div>
        
      <div id="imageContainer">
        <img id="displayedImage" src={imagePath} height="200" width="200" alt="Resim 1" />
      </div>

      <h1>Engagement Ring 5</h1>
      <h1>$101.00 USD</h1>
      <br></br>

      <button style={{ backgroundColor: 'gold', color: 'gold', borderRadius: '50%', width: '20px', height: '20px'  }} onClick={() => changeImage(1)}>a</button>
      <button style={{ backgroundColor: 'silver', color: 'silver' , borderRadius: '50%', width: '20px', height: '20px' }} onClick={() => changeImage(2)}>g</button>
      <button style={{ backgroundColor: 'pink', color: 'pink', borderRadius: '50%', width: '20px', height: '20px' }} onClick={() => changeImage(3)}>r</button>

      
    </div>
  );
}

export default Eg022;
