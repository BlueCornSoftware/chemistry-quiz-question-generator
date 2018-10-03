import randomUniqueElements from './lib/randomUniqueElements';

export default (element, allElements, alreadyUsedChoices, num) => {
  const alreadyUsedNames = alreadyUsedChoices.map(alreadyUsedChoice => alreadyUsedChoice.name);

  const whereElementHasNotAlreadyBeenUsed = item => alreadyUsedNames.indexOf(item.name) === -1;
  const whereElementIsNotCorrectAnswer = item => item.name !== element.name;

  const unused = allElements
    .filter(whereElementHasNotAlreadyBeenUsed)
    .filter(whereElementIsNotCorrectAnswer);

  return randomUniqueElements(unused, num);
};
