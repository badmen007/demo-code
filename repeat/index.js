const array = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
  { id: 1, name: "Jim" },
];

// 拿到去重之后的数组
function getUniqueArray(array, repeatKeys) {
    const unique = array.filter((obj, index, self) =>
      index ===
      self.findIndex((t) => {
        return repeatKeys.every((key) => {
          return t[key] === obj[key];
        });
      })
    );
    return unique;
}

const uniqueArray = getUniqueArray(array, ["id", "name"]);

console.log(uniqueArray);

// 判断是否有重复
function getIsUniqueArray(array, repeatKeys) {
  const isUnique = array.some((obj, index, self) =>
    index !==
    self.findLastIndex((t) => {
      return repeatKeys.every((key) => {
        return t[key] === obj[key];
      });
    })
  );
  return isUnique;
}

const isUniqueArray = getIsUniqueArray(array, ["id", "name"]);
console.log(isUniqueArray);

// 判断是否有重复

function getIsRepeatArray(arr, repeatKeys) {
  const map = {}
  return arr.some(item => {
    const key = repeatKeys.map(key => item[key]).join('-')
    if (map[key]) {
      return true
    } else {
      map[key] = true
      return false
    }
  })
}

const isRepeatArray = getIsRepeatArray(array, ["id", "name"]);
console.log(isRepeatArray, 'isRepeatArray');

