export const convertCamelcaseToString = (text) => {
  var result = text.replace(/([A-Z])/g, " $1");
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  console.log(finalResult);
  return finalResult;
};
