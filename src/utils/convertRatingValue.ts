export const convertRatingValue = (ratingValue: string) => {
  if (ratingValue.includes('/')) {
    const [numerator, denominator] = ratingValue.split('/');
    return (parseFloat(numerator) / parseFloat(denominator)) * 5;
  }
  return parseFloat(ratingValue) / 10;
};
