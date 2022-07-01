import { atom, useAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import Cookies from 'js-cookie';
import { FC, useMemo } from 'react';
import hash from 'utils/hash';
import { IconWrapperStyled } from './styled';
import { AtomIconTypes } from './types';


const defaultIcon = `https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/warning-svgrepo-com.svg`;

const fetchIcon = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    return ``;
  }
};

const iconAtomFetch = atomFamily((getKey: string) =>
  atom(async () => {
    const key = getKey ?? defaultIcon;
    const dataCookie = Cookies.get(hash(key));
    if (dataCookie) return dataCookie;
    const data = await fetchIcon(key);
    Cookies.set(hash(key), data, { expires: 365 });
    return data;
  })
);

const AtomIcon: FC<AtomIconTypes> = (props) => {
  const { icon } = props;
  const iconAtomFetchMemo = useMemo(() => iconAtomFetch(icon), [icon]);
  const [iconState] = useAtom(iconAtomFetchMemo);

  return (
    <IconWrapperStyled
      {...props}
      dangerouslySetInnerHTML={{
        __html: iconState ?? "<!-- Icon not found -->",
      }}
    />
  );
};

export default AtomIcon;
