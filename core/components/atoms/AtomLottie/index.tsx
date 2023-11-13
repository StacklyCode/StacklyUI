import { FC } from 'react';
import { AtomLottieTypes } from './types';
import helloAnimation from '../../../animations/hello.json';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AtomLottie: FC<AtomLottieTypes> = (props) => {
  return <Lottie loop={true} animationData={helloAnimation} {...props} />;
};

export default AtomLottie;
