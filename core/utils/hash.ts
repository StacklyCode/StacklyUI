const hash = (url: string) =>
  `${url
    ?.split("")
    ?.reduce((acc, curr) => (acc << 5) ^ acc ^ curr.charCodeAt(0), 0)}`;

export default hash;
