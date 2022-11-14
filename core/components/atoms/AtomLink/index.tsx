import { forwardRef } from 'react';
import { AtomAnchorProps } from './types';
import { AnchorStyled } from './styled';

const Animation = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95, opacity: 0.8 }
};

const AtomLink = forwardRef<HTMLAnchorElement, AtomAnchorProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <AnchorStyled {...Animation} {...props} ref={ref}>
        {children}
      </AnchorStyled>
    );
  }
);

export default AtomLink;
