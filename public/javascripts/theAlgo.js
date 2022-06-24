
const db = require('../../db/models');
let algo = async() =>{
    const trending = []
    const recArr = []
    let rec = {}

    const applauds = await db.Applaud.findAll({})

    applauds.forEach(el => {
      if(rec[el.recordId] === undefined){
        return rec[el.recordId] = 1
      }
        return rec[el.recordId]++
    })

    for(const keys in rec){
      recArr.push([Number.parseInt(keys),rec[keys]])
    }

    recArr.sort((a,b) => b[1] - a[1])

    for(let i = 0;i<recArr.length;i++){
      trending.push(await db.Record.findByPk(recArr[i][0]))
    }
    return trending;
}

module.exports = algo;
