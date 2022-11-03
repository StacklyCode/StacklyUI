import { FC } from 'react';
import Lottie from 'lottie-react';
import { AtomLottieTypes } from './types';
import helloAnimation from 'animations/hello.json';

const AtomLottie: FC<AtomLottieTypes> = (props) => {
  return <Lottie loop={true} animationData={helloAnimation} {...props} />;
};

export default AtomLottie;
