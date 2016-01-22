pingPong = function(input) {
  var resultArray = [];
  for (var index = 1; index <= input; index++) {
    if (index % 3 !== 0 && index % 5 !== 0) {
      resultArray.push(index)
    }
    else if (index % 5 === 0){
      resultArray.push("pong");
    }
    else if (index % 3 === 0){
      resultArray.push("ping");
    }
  };
  return resultArray;
};
