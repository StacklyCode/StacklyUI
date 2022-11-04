const changeTransparency = (color: string, percentage?: number) => {
  const isHex = color.indexOf('#') !== -1;
  if (!isHex) throw new Error('Color must be in hex format');
  const value = Math.min(Math.max(0, percentage ?? 50), 100);
  const hex = Math.round(value * 2.55).toString(16);
  return color + hex;
};

export default changeTransparency;
