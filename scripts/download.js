
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const fetch = require('node-fetch')

const blob = 'https://raw.githubusercontent.com/xiaoyucoding/mp-weixin-region-data/master/multiple/'

const segments = [
    'province', 'city', 'district'
]

const download = async segment => {
    const filename = segment + '.json'
    const r = await fetch(blob + filename, {method: 'GET'})
    const data = await r.text()
    return writeFile(path.resolve(__dirname, `../json/${filename}`), data)
}

Promise.all(segments.map(download)).then(() => console.log('Written.'))
