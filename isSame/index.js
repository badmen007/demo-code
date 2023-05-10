const dayjs = require('dayjs')

// 判断日期是不是一致的
const isSame = (date1, date2, unit = 'day') => {
  return dayjs(date1).isSame(date2, unit)
}

const is = isSame('2019-02-01', '2019-01-01') // true
console.log(is);