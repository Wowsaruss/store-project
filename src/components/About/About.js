import React from 'react';

import './About.css';
import Logo from '../../Assets/Logo.png';

class Child extends React.Component {
  render() {
    return (
      <div>
        <div>
        <img src={ Logo } alt='' />
          <h1>About Me</h1>
          <p>I'm Russ! I was born of a dad and a mom and my body slowly got bigger over the time span of about 25 years. During that time I learned many things about myself. The first being the fact that I will eat just about any food placed in front of me and I am capable of cleaning a plate faster than you can say the word “eat”. My favorite pastimes would include anything in the great outdoors from running through a set of sprinklers, to ascending a two hundred foot vertical rock wall; being outside inspires me. I don’t eat meat or dairy products. I have a unique sense of humor and most people come to find that it is far beyond the reaches of the average mind (meaning: I have a vault of endless 3rd grader jokes). I love creating music on my guitar and/or any musical instrument that has strings. I can’t stand the news or any television media for the most part; it’s full of negativity. I like to read whenever I get the chance and I love to peruse my dreams and passions.</p>
        </div>
      </div>
    )
  }
}

export default Child;