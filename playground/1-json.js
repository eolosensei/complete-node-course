const fs = require('fs');

const dataJSON = fs.readFileSync('1-json.json').toString();
const data = JSON.parse(dataJSON);

data.name = "Gonzalo";
data.age = 34;

fs.writeFileSync('1-json.json', JSON.stringify(data));
