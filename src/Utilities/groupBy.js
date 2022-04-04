const groupBy = (array, key) => {
    return array.reduce((result, obj) => {
      //   if (result[obj[key]]) {
      //     result[obj[key]] = result[obj[key]];
      //     result[obj[key]].push(obj);
      //   } else {
      //     result[obj[key]] = [];
      //     result[obj[key]].push(obj);
      //   }
  
      (result[obj[key]] = result[obj[key]] || []).push(obj);
  
      return result;
    }, {});
  };
  
const _default = groupBy;
export { _default as default };