import { FC, useEffect, useState } from 'react';
import { IconWrapperStyled } from './styled';
import { AtomIconTypes } from './types';

const defaultIcon = `https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/warning-svgrepo-com.svg`;

const fetchIcon = async (url: string, state: (e: string) => void) => {
  try {
    const response = await fetch(url ?? defaultIcon);
    const data = await response.text();
    return state(data);
  } catch (error) {
    return null;
  }
};

const AtomIcon: FC<AtomIconTypes> = (props) => {
  const { icon } = props;
  const [iconState, stateIcon] = useState(null);

  useEffect(() => {
    fetchIcon(icon, (data) => stateIcon(data));
  }, [icon]);

  return (
    <IconWrapperStyled
      {...props}
      dangerouslySetInnerHTML={{
        __html: iconState ?? ''
      }}
    />
  );
};

export default AtomIcon;
