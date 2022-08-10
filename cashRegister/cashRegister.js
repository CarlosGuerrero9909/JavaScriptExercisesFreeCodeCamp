//objecto para definir el dinero de cada usuarios
const UnidadMonetaria = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  
  function checkCashRegister(price, cash, cid) {
  
    let changeSum = cash * 100 - price * 100;
    let changeSumCheck = changeSum;
    let change = [];
    let status = '';
  
    let cidSum = 0;
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
  
    filteredCid.forEach(elem => {
      let sum = elem[0];
      let actSum = elem[1] * 100;
      cidSum += actSum;
      let cant = 0;
      while (changeSum >= UnidadMonetaria[sum] && actSum > 0) {
        cant += UnidadMonetaria[sum];
        changeSum -= UnidadMonetaria[sum];
        actSum -= UnidadMonetaria[sum];
      }
      if (cant !== 0) {
        change.push([sum, cant / 100]);
      }
    });
  
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = 'CLOSED';
      change = cid;
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change };
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));