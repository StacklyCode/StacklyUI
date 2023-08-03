import { css } from '@emotion/react';
import { AtomInput, AtomWrapper } from 'index';
import { IOption } from 'components/atoms/AtomInput/types';
import Header from 'src/components/Header';
import WrapperComponent from 'src/components/WrapperComponent';
import { useEffect, useState } from 'react';

const ContainerCSS = css`
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const OPTIONS = Array.from({ length: 100 }, (_, i) => ({
  id: `${i}`,
  label: `Option ${i}`,
  value: `${i}`
})) as IOption[];

const Index = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <AtomWrapper as="main" css={() => ContainerCSS}>
      <Header />
      <AtomWrapper
        css={() => css`
          gap: 30px;
          padding: 10px 90px;
          @media (max-width: 768px) {
            padding: 10px 30px;
          }
        `}
      >
        <WrapperComponent title="Select">
          <AtomInput
            type="select"
            labeltext="Label Input Example"
            options={OPTIONS}
            input={{
              placeholder: 'Placeholder Input Example'
            }}
          />
          <AtomInput
            type="select"
            labeltext="Label Input Example"
            options={OPTIONS}
            input={{
              placeholder: 'Placeholder Input Example'
            }}
          />
          <AtomInput
            type="select"
            labeltext="Label Input Example"
            options={OPTIONS}
            select={{
              search: true
            }}
            input={{
              placeholder: 'Placeholder Input Example'
            }}
          />
          <AtomInput
            type="select"
            labeltext="Label Input Example"
            options={data?.map((item: any) => ({
              id: item?.id,
              label: item?.name + ' ' + item?.username,
              value: item?.id
            }))}
            select={{
              search: true
            }}
            input={{
              placeholder: 'Placeholder Input Example'
            }}
          />
        </WrapperComponent>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Index;
