export function arrayToString(arrayT) {

    console.log("change sd = " )
    if (arrayT && Array.isArray(arrayT) && arrayT.length > 0) {


        let stringResult = "[";  

        arrayT.forEach((a,idx) => {
            if (idx === arrayT.length - 1) {
                stringResult += `"${a}"`;
            } else {
                stringResult += `"${a}",`;
            }
        })

        stringResult += "]";

        console.log("stringResult = " , stringResult)

        return stringResult
    } else {
        return arrayT
    }
   
}

function subJsonToString(jsonT) {
    let stringResult = "";
    for (var key in jsonT) {
        if (getType(jsonT[key]) === 'object') {
            stringResult += `${key}: {\n`
            stringResult += subJsonToString(jsonT[key])
            stringResult += `},`
        } 
        else {
            stringResult += `${key}:"${jsonT[key]}"\n`;
        }
    }

    return stringResult
}

function getType(p) {
    if (Array.isArray(p)) return 'array';
    else if (typeof p == 'string') return 'string';
    else if (p != null && typeof p == 'object') return 'object';
    else return 'other';
}

export function jsonToString(jsonT) {

    let jsonString 


    if (Array.isArray(jsonT)){

        jsonString = "[";
        for (var i=0; i<jsonT.length; i++) {

            jsonString += "{";
            jsonString += subJsonToString(jsonT[i]);

            // jsonString = jsonString.slice(0, -1);
            jsonString += "},";
        }  
        jsonString = jsonString.slice(0, -1);
        jsonString += "]";

    } else if (getType(jsonT) === 'object') {
        jsonString = "{\n";
        jsonString += subJsonToString(jsonT);
        jsonString += "}";
    }

    return jsonString
   
}
  