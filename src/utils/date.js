const getFullDate = isoDate => {
  let currentDate = new Date(isoDate).toString().split(' ');
  let fullDate = currentDate[1] + ' ' + currentDate[2] + ' ' + currentDate[3];

  return fullDate;
};

export {getFullDate};
