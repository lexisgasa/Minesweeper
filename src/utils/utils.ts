export const generateRandomBoolean = (): boolean => {
  const randomNumber = Math.random();

  return randomNumber >= 0.7;
};
