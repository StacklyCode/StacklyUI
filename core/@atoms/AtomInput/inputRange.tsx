import { FC, useEffect, useState } from 'react';
import InputTextError from './error';
import {
  InputRangeStyled,
  InputRangeLabelStyled,
  SliderTrackStyled,
} from './style';
import { AtomInputTypes } from './types';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const mapRange = (
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) => low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);

const isNegative = (
  range: { min: number; max: number },
  min: number,
  max: number
) => {
  const RangeMax = mapRange(range.max, 0, 100, min, max);
  const RangeMin = mapRange(range.min, 0, 100, min, max);
  return RangeMax - RangeMin < 0
    ? { min: RangeMax, max: RangeMin }
    : { min: RangeMin, max: RangeMax };
};

const InputRange: FC<AtomInputTypes> = (props) => {
  const { onUpdateValues, formik, id, children } = props;
  const {
    minRange = 0,
    maxRange = 100,
    loadValues = {
      min: 0,
      max: 100,
    },
  } = props;
  const {
    labelWidth,
    labelColor,
    labelFontFamily,
    labelFontSize,
    labelFontWeight,
    labelMargin,
    labelPadding,
    spanMargin,
    customCSS,
    label,
  } = props;

  const [rangeValue, setRangeValue] = useState({
    min: 0,
    max: 100,
  });

  useEffect(() => {
    setRangeValue(loadValues);
  }, [loadValues.max, loadValues.min]);

  useEffect(() => {
    if (formik) {
      formik.setFieldValue(
        id || 'range',
        isNegative(rangeValue, minRange, maxRange)
      );
    } else if (onUpdateValues) {
      onUpdateValues(isNegative(rangeValue, minRange, maxRange));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeValue]);

  return (
    <InputRangeLabelStyled
      labelWidth={labelWidth}
      labelColor={labelColor}
      labelFontFamily={labelFontFamily}
      labelFontSize={labelFontSize}
      labelFontWeight={labelFontWeight}
      labelMargin={labelMargin}
      labelPadding={labelPadding}
      spanMargin={spanMargin}
      customCSS={customCSS}
    >
      {label && <span>{label}</span>}

      <SliderTrackStyled
        {...props}
        minTrack={rangeValue.min}
        maxTrack={rangeValue.max}
      >
        <InputRangeStyled
          {...Animation}
          type="range"
          {...props}
          value={rangeValue.min.toString()}
          onChange={(e) => {
            setRangeValue({
              min: Number(e.target.value),
              max: rangeValue.max,
            });
          }}
        />
        <InputRangeStyled
          {...Animation}
          type="range"
          {...props}
          value={rangeValue.max.toString()}
          onChange={(e) => {
            setRangeValue({
              min: rangeValue.min,
              max: Number(e.target.value),
            });
          }}
        />
      </SliderTrackStyled>
      {children}
      {label}

      <InputTextError {...props} />
    </InputRangeLabelStyled>
  );
};

export default InputRange;
