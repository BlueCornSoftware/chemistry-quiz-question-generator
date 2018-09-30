'use strict';

const randomUniqueElements = require('./lib/randomUniqueElements');

/*
  TODO:
    Make it so we can parameterize business rules.

    for example see:
      https://gist.github.com/JakeTheCorn/5fc52b69c1a4d819872a16fd09d6dbe9
*/

module.exports = (element, allData, alreadyUsedOptions) => {
  const alreadyUsedNames = alreadyUsedOptions.map(
    alreadyUsedOption => alreadyUsedOption.name
  );

  const whereElementHasNotAlreadyBeenUsed = item => {
    return alreadyUsedNames.indexOf(item.name) === -1;
  };

  const whereElementIsNotCorrectAnswer = item => item.name !== element.name;

  const unused = allData
    .filter(whereElementHasNotAlreadyBeenUsed)
    .filter(whereElementIsNotCorrectAnswer);

  return randomUniqueElements(unused, 3);
};
