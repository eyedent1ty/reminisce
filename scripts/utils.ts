const shuffleArray = (arr: any[]): any[] => {
  const arrCopy = [...arr];
  const arrLength = arrCopy.length;

  for (let i = 0; i < arrLength; i++) {
    const randomIndex = Math.floor(Math.random() * (arrLength - i) + i);
    const temp = arrCopy[randomIndex];
    const currentNode = arrCopy[i];
    arrCopy[randomIndex] = currentNode;
    arrCopy[i] = temp;
  }

  return arrCopy;
};

export { shuffleArray };
