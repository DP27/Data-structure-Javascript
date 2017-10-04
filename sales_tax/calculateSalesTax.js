// Data directory

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];




function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var salesDir = {};
  for (var index in salesData){
    if(!(salesData[index].name in salesDir)){
    //  console.log(salesData[index]);
      salesDir[salesData[index].name] = {};
    //  console.log(salesDir);
      var total = salesData[index].sales.reduce(function(a,b){return a+b;});
      salesDir[salesData[index].name]['totalSales'] = total;
      var provinceOfIndex = salesData[index].province;
      salesDir[salesData[index].name]['totalTaxes'] = taxRates[provinceOfIndex] * salesDir[salesData[index].name].totalSales;
    }
    else{
      var total_before = salesDir[salesData[index].name].totalSales;
      salesDir[salesData[index].name]['totalSales'] += salesData[index].sales.reduce(function(a,b){return a+b;});
      salesDir[salesData[index].name]['totalTaxes'] += taxRates[salesData[index].province] * (salesDir[salesData[index].name].totalSales - total_before);
    }
  }
  return salesDir;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/



