'use strict';

const randomUniqueElements = require('./lib/randomUniqueElements');

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

  // let options = Array(3).fill();
  // options = options.map(opt => {
  //   return allDataNotUsed[randomIndex(allDataNotUsed)];
  // });
  // return options;
  return randomUniqueElements(unused, 3);
  // let option;

  // for (let i = 0; i < copy.length; i++) {
  //   option = copy[i];
  //   allData.find( => {
  //     alreadyUsedOption.name ===
  //   })
  // }
  // return [1,2,3];
};
