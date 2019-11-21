
const fs = require('fs')
const path = require('path')


const provinceData = require('../json/province.json')
const cityData = require('../json/city.json')
const districtData = require('../json/district.json')

const bleachRecords = records => {
    const r = {}
    for (let i = 0; i < records.length; i++) {
        const record = records[i]
        r[parseInt(record.value)] = record.text
    }
    return r
}
const bleachRecordsMap = map => {
    const r = {}
    for (const key in map) {
        const records = map[key]
        for (let i = 0; i < records.length; i++) {
            const record = records[i]
            r[parseInt(record.value)] = record.text
        }
    }
    return r
}

const outFile = path.resolve(__dirname, 'mp_vant_address.json')


const data = {
    province_list: bleachRecords(provinceData.list),
    city_list: bleachRecordsMap(cityData),
    county_list: bleachRecordsMap(districtData),
}


fs.writeFile(outFile, JSON.stringify(data), 'utf8', () => console.log('Written.'))
