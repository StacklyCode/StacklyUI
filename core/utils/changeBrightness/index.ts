const changeBrightness = (color = '#ffffff', amount = 50) => {
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, (color) =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
};
export default changeBrightness;

export const UCB = changeBrightness;
