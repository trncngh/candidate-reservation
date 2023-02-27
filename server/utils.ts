export const checkValidTime = (inputTime: number): boolean => {
  const time = new Date(inputTime);
  const dayOfWeek = time.getDay();
  const hours = time.getHours();
  return (
    [1, 2, 3, 4, 5].includes(dayOfWeek) && [13, 14, 15, 16].includes(hours)
  );
};
