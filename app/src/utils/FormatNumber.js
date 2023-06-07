const FormatNumber = (number) => {
  const numberString = number.toString().replace(/\s/g, '');
  const length = numberString.length;
  let numOfDots = Math.floor((length - 1) / 3);
  let formattedString = '';
  for (let i = 0; i < length; i++) {
    formattedString += numberString[i];
    if ((length - i - 1) % 3 === 0 && i !== length - 1 && numOfDots > 0) {
      formattedString += ',';
      numOfDots--;
    }
  }
  return formattedString;
};

export { FormatNumber };