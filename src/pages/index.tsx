import AtomButton from '@atoms/AtomButton';
import AtomIcon from '@atoms/AtomIcon';
import AtomImage from '@atoms/AtomImage';
import AtomInput from '@atoms/AtomInput';
import AtomText from '@atoms/AtomText';
import AtomWrapper from '@atoms/AtomWrapper';
import { css } from '@emotion/react';
import {
  backgroundColorHoverFlat,
  colorIcon,
  backgroundColorOutline,
  backgroundColorInput
} from 'css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAtomValue } from 'jotai';
import { ThemeContextAtom } from 'jotais';

const WrapperCSS = css`
  padding: 10px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  `;

const FormCSS = css`
  padding: 10px 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const Index = () => {
  const { key, toggle } = useAtomValue(ThemeContextAtom);
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
    }),
    onSubmit: (values) => {
      console.warn(values);
    }
  })
  return (
    <AtomWrapper css={WrapperCSS}>
      <AtomText>
        Active theme: {key}
      </AtomText>
      <AtomButton
        onClick={() => toggle()}
      >
        Change Theme
      </AtomButton>
      <AtomWrapper css={WrapperCSS}>
        <AtomText>Normal Buttons</AtomText>
        <AtomButton>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astheme="primary">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astheme="secondary">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astheme="accent">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astheme="primary" astype="outline">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton disabled>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS}>
        <AtomText>Loading Buttons</AtomText>
        <AtomButton loading="true" astheme="primary">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" astheme="secondary">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" astheme="accent">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" astheme="primary" astype="outline">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" disabled>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS}>
        <AtomText>Custom Buttons</AtomText>
        <AtomButton css={backgroundColorHoverFlat('#db4a4a')}>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" css={backgroundColorHoverFlat('#db4a4a')}>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astype="outline" css={backgroundColorOutline('#975a27')}>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton
          loading="true"
          astype="outline"
          css={backgroundColorOutline('#975a27')}
        >
          <AtomText>Text Primary</AtomText>
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS} astheme="primary">
        <AtomText>WRAPPER</AtomText>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS} astheme="secondary">
        <AtomText
          css={{
            color: '#fff'
          }}
        >
          WRAPPER SECONDARY
        </AtomText>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS} astheme="accent">
        <AtomText
          css={{
            color: '#fff'
          }}
        >
          WRAPPER ACCENT
        </AtomText>
      </AtomWrapper>
      <AtomIcon astheme='primary' />
      <AtomIcon astheme='secondary' />
      <AtomIcon astheme='accent' />
      <AtomIcon icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/outline/house-beat.svg" />
      <AtomIcon css={colorIcon('#db4a4a')} />
      <AtomWrapper
        css={css`
          ${WrapperCSS}
          background-color: #db4a4a;
        `}
      >
        <AtomImage
          wrapper={{
            css: css`
              width: 300px;
              height: 300px;
            `
          }}
          src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/800px-A_black_image.jpg"
        />
      </AtomWrapper>
      <AtomWrapper css={FormCSS} astheme="secondary" as='form'>
        <AtomText astheme='secondary'>
          FORM
        </AtomText>
        <AtomWrapper css={WrapperCSS} astheme="secondary">
          <AtomInput id='name' astheme="primary" formik={formik} input={{
            placeholder: 'Name',
          }}
            spantext="Name"
          />
          <AtomInput id='name' astheme="secondary" formik={formik} input={{
            placeholder: 'Name',
          }}
            spantext="Name"
          />
          <AtomInput id='name' astheme="accent" formik={formik} input={{
            placeholder: 'Name',
          }}
            spantext="Name"
          />
          <AtomInput id='name' formik={formik} input={{
            placeholder: 'Name',
            css: backgroundColorInput('#22705f')
          }}
            spantext="Name"
          />
        </AtomWrapper>
        <AtomInput id='name' type='toggle'
          input={{
            checked: key === "dark",
            onChange: () => {
              toggle()
            }
          }}

        />

      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Index;


