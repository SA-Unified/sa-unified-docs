const fs = require('fs')
const defFolder = './docs/01-definitions'
let abbreviationFldr;
try{
abbreviationFldr = fs.readdirSync(defFolder, (err,files) => {
    files.forEach(file => {
        if(file != '00-abbreviations-list.md' && file.endsWith(".md")){
            return
        }
    })
})
}
catch(e){
    console.log(e)
    throw e
}
finally{
    console.log(abbreviationFldr)
}