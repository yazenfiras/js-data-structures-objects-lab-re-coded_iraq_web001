// Write your solution in this file!

let driver={};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateObject (obj, key, value) {
  obj[key] = value;
 
  return obj;
}