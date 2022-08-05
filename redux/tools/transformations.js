export function arrayToString(arrayT) {
  console.log("change sd = ");
  if (arrayT && Array.isArray(arrayT) && arrayT.length > 0) {
    let stringResult = "[";

    arrayT.forEach((a, idx) => {
      if (idx === arrayT.length - 1) {
        stringResult += `"${a}"`;
      } else {
        stringResult += `"${a}",`;
      }
    });

    stringResult += "]";

    console.log("stringResult = ", stringResult);

    return stringResult;
  } else {
    return arrayT;
  }
}

function subJsonToString(jsonT) {
  let stringResult = "";
  for (var key in jsonT) {
    if (Array.isArray(jsonT[key])) {
      stringResult += `${key}: [\n`;
      for (var i = 0; i < jsonT[key].length; i++) {
        stringResult += "{";
        stringResult += subJsonToString(jsonT[key][i]);

        // stringResult = stringResult.slice(0, -1);
        stringResult += "},";
      }
      // stringResult = stringResult.slice(0, -1); //@TODO eloi removed this line make sure everything is still working
      stringResult += "]";
    } else if (getType(jsonT[key]) === "object") {
      stringResult += `${key}: {\n`;
      stringResult += subJsonToString(jsonT[key]);
      stringResult += `},`;
    } else {
      stringResult += `${key}:"${jsonT[key]}"\n`;
    }
  }

  return stringResult;
}

function getType(p) {
  if (Array.isArray(p)) return "array";
  else if (typeof p == "string") return "string";
  else if (p != null && typeof p == "object") return "object";
  else return "other";
}

export function jsonToString(jsonT) {
  let jsonString;

  if (Array.isArray(jsonT)) {
    jsonString = "[";
    for (var i = 0; i < jsonT.length; i++) {
      jsonString += "{";
      jsonString += subJsonToString(jsonT[i]);

      // jsonString = jsonString.slice(0, -1);
      jsonString += "},";
    }
    // jsonString = jsonString.slice(0, -1); //@TODO eloi removed this line make sure everything is still working
    jsonString += "]";
  } else if (getType(jsonT) === "object") {
    jsonString = "{\n";
    jsonString += subJsonToString(jsonT);
    jsonString += "}";
  }

  return jsonString;
}

export function jsonToStringWithEnums(jsonT, _enums = []) {
  let jsonString;

  if (Array.isArray(jsonT)) {
    jsonString = "[";
    for (var i = 0; i < jsonT.length; i++) {
      jsonString += "{";
      jsonString += subJsonToString(jsonT[i]);

      // jsonString = jsonString.slice(0, -1);
      jsonString += "},";
    }
    jsonString = jsonString.slice(0, -1);
    jsonString += "]";
  } else if (getType(jsonT) === "object") {
    jsonString = "{\n";
    jsonString += subJsonToString(jsonT);
    jsonString += "}";
  }

  console.log("jsonString = ", jsonString);
  _enums.forEach((_enum) => {
    jsonString = jsonString
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum)
      .replace(`"${_enum}"`, _enum);
  });
  // jsonString = jsonString.replace(`"${_enum}"`, _enum);
  console.log("jsonString = ", jsonString);

  return jsonString;
}
