import { FC } from 'react';
import NextImage from 'next/image';
import {
  AtomImageStyled,
} from './styled';
import { AtomImageTypes } from './types';

const AtomImage: FC<AtomImageTypes> = (props) => {
  const { src, alt, wrapper } = props;
  return (
    <AtomImageStyled {...wrapper}>
      <NextImage
        src={src}
        alt={`${alt}image`}
        layout="fill"
        placeholder="blur"
        blurDataURL={`${src}?blur`}
        {...props}
      />
    </AtomImageStyled>
  );
};

export default AtomImage;
