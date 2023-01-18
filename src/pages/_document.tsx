import { Head, Html, Main, NextScript } from 'next/document';
import BackgroundFlash from 'components/atoms/AtomBackgroundFlash';
import { ThemesToFlash } from 'utils/themesToFlash';
import { themes } from 'themes/index';

const Document = () => {
  return (
    <Html>
      <Head>
        <BackgroundFlash theme={ThemesToFlash(themes)} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
