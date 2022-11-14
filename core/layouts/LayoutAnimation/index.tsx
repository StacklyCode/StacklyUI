import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { AtomWrapperTypes } from '../../types';
import { AtomWrapper } from '../../components/atoms';

const spring = {
  x: { type: `spring`, damping: 20, stiffness: 180, when: `afterChildren` },
  default: { duration: 0.45 }
};

const animation = {
  transition: spring,
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

type LayoutAnimationProps = AtomWrapperTypes & {
  pathname?: string;
};

const LayoutAnimation: FC<LayoutAnimationProps> = (props) => {
  const { children, pathname } = props;
  return (
    <AnimatePresence exitBeforeEnter>
      <AtomWrapper as="main" {...props} {...animation} key={pathname}>
        {children}
      </AtomWrapper>
    </AnimatePresence>
  );
};
export default LayoutAnimation;
