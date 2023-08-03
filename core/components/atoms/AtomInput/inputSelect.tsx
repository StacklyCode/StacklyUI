import InputTextError from './inputError';
import {
  InputLabelStyled,
  InputSelectOptionStyled,
  InputSelectOptionWrapperStyled,
  InputSelectSearchStyled,
  InputSelectStyled,
  InputSelectWrapperStyled,
  InputSpanStyled
} from './styled';
import { AtomInputTypes } from './types';
import { FCWC } from '../../../types';
import { get } from '../../../utils/tinyLodash';
import { useState, useMemo, useRef, useEffect } from 'react';
import AtomIcon from '../AtomIcon';
import AtomButton from '../AtomButton';
import { css } from '@emotion/react';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 }
};

const InputSelect: FCWC<AtomInputTypes> = (props) => {
  const { formik, id } = props;
  const { error, label, select, span, labeltext } = props;

  const [selectID, setSelectID] = useState(select?.value?.toString() ?? '');
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (search === '') return props?.options;
    return props?.options?.filter((item) =>
      item?.label?.toLowerCase()?.includes(search?.toLowerCase())
    );
  }, [search, props?.options]);

  const selected = props?.options?.find(
    (item) => item?.id === get(formik?.values, id, selectID)
  );

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const getButtons = ref.current.getElementsByTagName('button');
      const getSelected = getButtons?.namedItem(selectID);
      ref.current.scrollTo({
        top: getSelected?.offsetTop - ref.current?.clientHeight / 2 + 15,
        behavior: 'smooth'
      });
    }
  }, [ref, open, searching]);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [ref]);

  return (
    <InputLabelStyled htmlFor={id} {...label}>
      {labeltext && <InputSpanStyled {...span}>{labeltext}</InputSpanStyled>}
      <InputSelectWrapperStyled open={open}>
        <InputSelectStyled
          {...Animation}
          {...select}
          disabled={true}
          searching={searching}
          value={selected?.label ?? ''}
          placeholder="Select an option"
          onTap={() => {
            setOpen(!open);
            formik?.setFieldTouched(id, true);
          }}
        />
        <InputSelectSearchStyled
          {...Animation}
          value={search}
          searching={searching}
          onChange={(e) => setSearch(e.target.value)}
        />
        {select?.search && (
          <AtomButton
            onClick={() => {
              setSearching(!searching);
              setOpen(true);
            }}
            css={() => css`
              border: 1px solid transparent;
              width: max-content;
              min-height: 0px;
              padding: 6px;
              position: absolute;
              left: 10px;
              top: 50%;
              transform: translateY(-50%);
              background-color: transparent;
              backdrop-filter: blur(10px);
              :hover {
                background-color: #ffffff1a;
                border-radius: 4px;
                border: 1px solid #0000001a;
                box-shadow: none;
              }
            `}
          >
            <AtomIcon
              size={14}
              icon="fas fa-search"
              className="select-search-icon"
            />
          </AtomButton>
        )}
        <AtomButton
          onClick={() => {
            setOpen(!open);
          }}
          css={() => css`
            border: 1px solid transparent;
            width: max-content;
            min-height: 0px;
            padding: 6px;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background-color: transparent;
            backdrop-filter: blur(10px);
            i {
              transform: rotate(${open ? '180deg' : '0deg'});
            }
            :hover {
              background-color: #ffffff1a;
              border-radius: 4px;
              border: 1px solid #0000001a;
              box-shadow: none;
            }
          `}
        >
          <AtomIcon
            size={14}
            icon="fas fa-chevron-down"
            className="select-icon"
          />
        </AtomButton>
      </InputSelectWrapperStyled>
      {(open || searching) && (
        <InputSelectOptionWrapperStyled ref={ref} floating={select?.floating}>
          {filtered?.map((item) => (
            <InputSelectOptionStyled
              key={item?.id}
              id={item?.id}
              selected={item?.id === get(formik?.values, id, selectID)}
              onClick={() => {
                formik?.setFieldValue?.(id, item?.id);
                setSelectID(item?.id);
                setOpen(false);
                setSearching(false);
                setSearch('');
              }}
            >
              {item?.label}
            </InputSelectOptionStyled>
          ))}
        </InputSelectOptionWrapperStyled>
      )}
      <InputTextError id={id} formik={formik} {...error} />
    </InputLabelStyled>
  );
};

export default InputSelect;
