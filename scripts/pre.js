const fs = require('fs')
const path = require('path')


fs.readdir(path.resolve(__dirname, '../json'), (err, files) => {
    const jsons = files
      .filter(f => f.endsWith('.json') && f !== 'index.json')
      .map(file => `  f${file.split('.')[0]}: require('../json/${file}'),`)

    const data = `
const fs = require('fs')
const path = require('path')

const recordsMap = {
${jsons.join('\n')}
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
`

    fs.writeFile(path.resolve(__dirname, 'map.js'), data, 'utf8', () => console.log('Written.'))
})
