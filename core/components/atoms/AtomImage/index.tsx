import { FC, forwardRef } from 'react';
import AtomWrapper from '../AtomWrapper';
import { AtomImageStyled } from './styled';
import { AtomImageTypes } from './types';

const AtomImage: FC<AtomImageTypes> = forwardRef<any, AtomImageTypes>(
  (props, ref) => {
    const { src, wrapper } = props;
    return (
      <AtomWrapper {...wrapper}>
        <AtomImageStyled
          ref={ref}
          draggable={false}
          src={
            src ??
            'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0002/icons/placeholder-image.png'
          }
          {...props}
        />
        {props.children}
      </AtomWrapper>
    );
  }
);

export default AtomImage;
