/* eslint-disable no-bitwise */
const hash = (url = 'URLTEST') =>
  `${url
    ?.split('')
    ?.reduce((acc, curr) => (acc << 5) ^ acc ^ curr.charCodeAt(0), 0)}`;

export default hash;
