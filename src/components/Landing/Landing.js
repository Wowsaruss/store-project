import React from 'react';

import './Landing.css';
import Logo from '../../Assets/Logo.png';

class Child extends React.Component {
  render() {
    return (
      <div>
        <div>
        <img src={ Logo } alt='' />
          <h1>Hello! My name is Russ Hayes!

I am a freelance photographer based just outside of Phoenix, Arizona. I have a huge passion for collecting moments in time and I do this by taking an age-old film approach, photographing weddings and lifestyle using medium format and 35mm film cameras. By using film, it helps me to be more aware of every detail around, and forces me to put much more effort into each photograph. It is my aim to make sure every image I capture for you reflects the true authenticity of your unique and individual experience.</h1>
        </div>
      </div>
    )
  }
}

export default Child;