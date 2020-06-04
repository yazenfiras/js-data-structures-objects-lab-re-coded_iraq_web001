// Write your solution in this file!

let driver={};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;
 
  return driver;
}

function deleteFromDriverByKey(driver, key) {
 
  let newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}