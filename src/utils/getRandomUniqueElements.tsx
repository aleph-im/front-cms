export function shuffle<T>(array: T[]): T[] {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function getRandomUniqueElements<T>(array: T[], count: number): T[] {
  const amount = count > array.length ? array.length : count;

  return shuffle(array).slice(0, amount);
}
