var resultArray = [];
pingPong = function(input) {
  for (var index = 1; index <= input; index++) {
    if (index % 3 !== 0) {
      resultArray.push(index)
    }
    else if (index % 3 === 0){
      resultArray.push("ping");
    }
  };
  return resultArray;
};
