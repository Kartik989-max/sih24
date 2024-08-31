import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/hero.json';

const LottieAnimation = () => {
  return <Lottie animationData={animationData} loop={true}  style={{ height: 500, position:"absolute", top:"5rem" }}/>;
};

export default LottieAnimation;
