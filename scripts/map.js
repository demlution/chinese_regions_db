
const fs = require('fs')
const path = require('path')

const recordsMap = {
  f110000: require('../json/110000.json'),
  f120000: require('../json/120000.json'),
  f130000: require('../json/130000.json'),
  f140000: require('../json/140000.json'),
  f150000: require('../json/150000.json'),
  f210000: require('../json/210000.json'),
  f220000: require('../json/220000.json'),
  f230000: require('../json/230000.json'),
  f310000: require('../json/310000.json'),
  f320000: require('../json/320000.json'),
  f330000: require('../json/330000.json'),
  f340000: require('../json/340000.json'),
  f350000: require('../json/350000.json'),
  f360000: require('../json/360000.json'),
  f370000: require('../json/370000.json'),
  f410000: require('../json/410000.json'),
  f420000: require('../json/420000.json'),
  f430000: require('../json/430000.json'),
  f440000: require('../json/440000.json'),
  f450000: require('../json/450000.json'),
  f460000: require('../json/460000.json'),
  f500000: require('../json/500000.json'),
  f510000: require('../json/510000.json'),
  f520000: require('../json/520000.json'),
  f530000: require('../json/530000.json'),
  f540000: require('../json/540000.json'),
  f610000: require('../json/610000.json'),
  f620000: require('../json/620000.json'),
  f630000: require('../json/630000.json'),
  f640000: require('../json/640000.json'),
  f650000: require('../json/650000.json'),
  f710000: require('../json/710000.json'),
  f810000: require('../json/810000.json'),
  f820000: require('../json/820000.json'),
}

const data = {}

for (const key in recordsMap) {
    const records = recordsMap[key]
    for (let i = 0; i < records.length; i++) {
        const record = records[i]
        data[record['i']] = record['z']
    }
}

fs.writeFile(path.resolve(__dirname, 'regioncode_to_postcode.json'), JSON.stringify(data), 'utf8', () => console.log('Written.'))
