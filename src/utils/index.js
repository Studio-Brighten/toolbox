export const toClamp = (
  minFontSize,
  maxFontSize,
  minWidth = 40,
  maxWidth = 90
) => {
  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = (-minWidth * slope + minFontSize).toFixed(3);

  const min = `${minFontSize}rem`;
  const max = `${maxFontSize}rem`;
  const preferred = `${yAxisIntersection}rem + ${(slope * 100).toFixed(3)}vw`;

  return `clamp(${min}, ${preferred}, ${max})`;
};
