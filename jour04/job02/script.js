function jsonValueKey(jsonString, key) {
  const jsonObject = JSON.parse(jsonString);
  return jsonObject[key];
}

const value =
  '{"name":"LaPlateforme_","address":"8 rue d\'hozier","city":"Marseille","nb_staff":"11","creation":"2019"}';
const key = "city";

const ret = jsonValueKey(value, key);
console.log("return: ", ret);
