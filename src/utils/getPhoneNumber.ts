export const getPhoneNumber = (phoneString: string) => {
  const DDI = phoneString.slice(0, 2);
  const DDD = phoneString.slice(2, 4);
  const first_part = phoneString.slice(4, 9);
  const second_part = phoneString.slice(9, 13);

  const formatPhoneNumber = `+${DDI} (${DDD}) ${first_part}-${second_part}`;
  return formatPhoneNumber;
};
