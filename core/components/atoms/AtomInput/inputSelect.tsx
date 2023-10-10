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
import { UIBD } from 'utils/isBackDark';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 }
};

const InputSelect: FCWC<AtomInputTypes> = (props) => {
  const { formik, id } = props;
  const { error, label, select, span, labeltext } = props;

  const [selectValue, setSelectValue] = useState(
    select?.value?.toString() ?? ''
  );
  const [selectMultiple, setSelectMultiple] = useState(
    select?.multipleValue ?? []
  );

  useEffect(() => {
    setSelectValue(select?.value?.toString() ?? '');
  }, [`${select?.value}`]);

  useEffect(() => {
    setSelectMultiple(select?.multipleValue ?? []);
  }, [`${select?.multipleValue}`]);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (search === '') return props?.options;
    return props?.options?.filter((item) =>
      item?.label?.toLowerCase()?.includes(search?.toLowerCase())
    );
  }, [search, props?.options]);

  const selected = props?.options?.find(
    (item) => item?.value === get(formik?.values, id, selectValue)
  );

  const ref = useRef<HTMLLabelElement>(null);
  const refSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      const getButtons = ref.current.getElementsByTagName('button');
      const getSelected = getButtons?.namedItem(selectValue);
      ref.current.scrollTo({
        top: getSelected?.offsetTop - ref.current?.clientHeight / 2 + 15,
        behavior: 'smooth'
      });
    }
  }, [ref, open]);

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
    <InputLabelStyled ref={ref} htmlFor={id} {...label}>
      {labeltext && <InputSpanStyled {...span}>{labeltext}</InputSpanStyled>}
      <InputSelectWrapperStyled open={open}>
        <InputSelectStyled
          {...Animation}
          placeholder="Select an option"
          {...select}
          disabled={true}
          searching={select?.search ? open : false}
          value={
            select?.multiple ? select?.multipleLabel : selected?.label ?? ''
          }
          onTap={() => {
            setOpen((prev) => {
              const next = !prev;
              if (next) {
                setTimeout(() => {
                  refSearch.current?.focus();
                }, 100);
              }
              return next;
            });
            formik?.setFieldTouched(id, true);
          }}
        />
        <InputSelectSearchStyled
          ref={refSearch}
          {...Animation}
          value={search}
          searching={select?.search ? open : false}
          onChange={(e) => setSearch(e.target.value)}
        />
        {select?.search && (
          <AtomButton
            css={(theme) => css`
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
              i {
                color: ${UIBD(
                  theme?.general?.properties?.background?.toString() ??
                    '#ffffff'
                )};
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
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => {
              const next = !prev;
              if (next) {
                setTimeout(() => {
                  refSearch.current?.focus();
                }, 100);
              }
              return next;
            });
          }}
          css={(theme) => css`
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
            i {
              color: ${UIBD(
                theme?.general?.properties?.background?.toString() ?? '#ffffff'
              )};
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
      {open && (
        <InputSelectOptionWrapperStyled floating={select?.floating}>
          {filtered?.map((item) => (
            <InputSelectOptionStyled
              key={item?.id}
              id={item?.id}
              selected={
                select?.multiple
                  ? selectMultiple?.includes(item?.value)
                  : item?.value === get(formik?.values, id, selectValue)
              }
              onClick={() => {
                formik?.setFieldValue?.(id, item?.value);
                select?.onSelecting?.(item);
                setSelectValue(item?.value);
                if (select?.multiple) {
                  setSelectMultiple((prev) =>
                    prev?.includes(item?.value)
                      ? prev?.filter((i) => i !== item?.value)
                      : [...prev, item?.value]
                  );
                } else {
                  setOpen(false);
                  setSearch('');
                }
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
