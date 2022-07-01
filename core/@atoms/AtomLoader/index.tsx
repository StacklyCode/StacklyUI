import { FCWC } from 'types';
import { LoaderContainer } from './styled';
import { AtomLoaderTypes } from './types';

const AtomLoader: FCWC<AtomLoaderTypes> = (props) => {
  const { loading, children } = props;
  return loading ? (
    <LoaderContainer {...props}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoaderContainer>
  ) : (
    <>{children}</>
  );
};

export default AtomLoader;
