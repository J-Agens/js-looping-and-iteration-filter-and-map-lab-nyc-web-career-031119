// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const newArr = drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
  return newArr;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrvrs = driversWithRevenueOver(drivers, revenue);
  return newDrvrs.map(function(dr) {
    return dr.name;
  });
}

function exactMatch(drivers, attr) {
  return drivers.filter(function (driver) {
    return driver[Object.keys(attr)[0]] === Object.values(attr)[0];
  });
}

function exactMatchToList(drivers, attr) {
  const newArr = exactMatch(drivers, attr);
  return newArr.map(function(dr) {
    return dr.name;
  });
}
