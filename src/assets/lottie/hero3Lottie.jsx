import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/hero3.json';

const LottieAnimation2 = () => {
  return <Lottie animationData={animationData} loop={true}  style={{ height: 500, transform: "translate3d(-38px, -104px, 0)"}}/>;
};

export default LottieAnimation2;
