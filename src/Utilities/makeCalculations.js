const makeCalculations = (orderedPH) => {
    //console.log(orderedPH);
    const table = [];
    for (const PH in orderedPH) {
       ;
      //console.log(orderedPH[PH]);
    
      const finalCalculationsOfOneTime = orderedPH[PH].reduce(
        (result, value) => {
          result = {
            day:`${ value.conract.substring(6   ,8)}.${value.conract.substring(3,5)}.20${value.conract.substring(2,4)} ${value.conract.slice(-2)}:00`  ,
            amount : (+(result.amount) + +(((value.price*value.quantity)/10).toFixed(2))).toFixed(2),
            quantity: (+(result.quantity) + +(value.quantity/10)).toFixed(2),
            average : (+(result.average) + +((((value.price*value.quantity)/10) / (value.quantity/10)))).toFixed(2),
          };
  
          return result;
        },
        { amount: 0, quantity: 0, average: 0 }
      );
      table.push(finalCalculationsOfOneTime);
    }
    return table;
  };
  
//const _default = makeCalculations;
export default makeCalculations;
//export { _default as default };