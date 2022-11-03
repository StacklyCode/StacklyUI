import { css, SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import SwiperCore, {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AtomWrapper from '../AtomWrapper';
import SwiperStyles from './styles';

interface AtomCarrousellType {
  width?: string;
  height?: string;
  css?: SerializedStyles;
  swiperProps?: SwiperOptions;
  slides?: JSX.Element[];
  children?: JSX.Element[];
  direction?: 'horizontal' | 'vertical';
  slidesPerView?: number;
  acentColor?: string;
}

SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay, EffectFade, Navigation]);
const AtomCarrousell: FC<AtomCarrousellType> = (props) => {
  const {
    height,
    width,
    swiperProps,
    children,
    direction,
    slidesPerView,
    acentColor,
    slides
  } = props;
  return (
    <AtomWrapper
      css={() => css`
        ${SwiperStyles}
        .swiper {
          width: ${width || `100%`};
          height: ${height || `100vh`};
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-pagination-bullet-active {
          background-color: ${acentColor ?? `white`};
        }
        .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .swiper-button-prev {
          ::after {
            font-size: 42px;
            color: ${acentColor ?? `#ebebebeb`};
          }
          top: 50%;
          left: 3%;
        }
        .swiper-button-next {
          ::after {
            font-size: 42px;
            color: ${acentColor ?? `#ebebebeb`};
          }
          top: 50%;
          right: 3%;
        }
        ${props.css}
      `}
    >
      <Swiper
        direction={direction || 'horizontal'}
        autoplay={{
          delay: 6000
        }}
        navigation={direction !== 'vertical'}
        loop
        pagination={{
          clickable: true
        }}
        slidesPerView={slidesPerView || 1}
        {...swiperProps}
      >
        {slides?.map((item) => (
          <SwiperSlide key={item?.key}>{item}</SwiperSlide>
        ))}
        {children?.map((item) => (
          <SwiperSlide key={item?.key}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </AtomWrapper>
  );
};
export default AtomCarrousell;
