export const checkFalsy = (value: any | any[]): boolean => {
  if (Array.isArray(value)) {
    return value.length === 0 || value.some((v) => checkFalsy(v));
  }

  return !value || value === 'N/A';
};
