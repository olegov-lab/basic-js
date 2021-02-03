const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

 if ((members == null) || (members == undefined)) {

    return false;
}

let array = '';

for (i = 0; i < members.length; i++) {

if (typeof members[i] == 'string') {
array = array + members[i].trim()[0];
}
}

array = array.toUpperCase();
array = array.split('').sort();
array = array.join('');
return array;
}


