/**
Create the given function calculateBill() to calculate the total amount of the order. It also stores the bill items information in variable billItems in the format given below.

Bill Item Info Format: <item name>@<item price per piece> x <item ordered quantity> = <total item amount>
Input format: function parameter bill will be passed a bill object value.
Output format: calculateBill() returns an array having two values as total bill amount and bill items array respectively.

NOTES:
1. The menu & categories variables are already defined as per the above given definition.
2. Round of all the final prices to 2 decimal places. e.g. - 6.606666 will be rounded to 6.61 (.toFixed(2))
3. Taxes and charges will be calculated on the discounted price, i.e. calculate the discount before calculating the taxes and charges.
4. If 'isInPercent' is set to true, that means that particular discount/tax/charge will be calculated as the percentage of the base price or discounted price (e.g. 10% discount on 100 rupees would be 10 rupees). Otherwise it would be absolute (e.g. 5 rupee discount on 100 rupees).


function calculateBill(bill) {
  let totalBillAmount = 0;
  let billItems = [];
  
  // write your code here
  
  
  
  return [totalBillAmount, billItems];
}
 */

const categories = [{
  id: "C1",
  categoryName: "Platters",
  superCategory: {

    superCategoryName: "South Indian",
    id: "SC1"
  }
}, {
  id: "C2",
  categoryName: "Tandoor",
  superCategory: {

    superCategoryName: "North Indian",
    id: "SC2"
  }
}, {
  id: "C3",
  categoryName: "Dosai",
  superCategory: {

    superCategoryName: "South Indian",
    id: "SC3"
  }
}, {
  id: "C4",
  categoryName: "Vegetables",
  superCategory: {

    superCategoryName: "North Indian",
    id: "SC4"
  }
}];


const menu = [{
  id: "item1",
  itemName: "Butter Roti",
  rate: 20,
  taxes: [{
    name: "Service Charge",
    rate: 10,
    isInPercent: true,
  }, {
    name: "GST",
    rate: 18,
    isInPercent: true,
  }],
  category: {
    categoryId: "C2"
  }
}, {
  id: "item2",
  itemName: "Paneer Butter Masala",
  rate: 120,
  taxes: [{
    name: "Service Charge",
    rate: 10,
    isInPercent: true,
  }, {
    name: "GST",
    rate: 18,
    isInPercent: true,
  }, {
    name: "Service Tax",
    rate: 10,
    isInPercent: true,
  }],
  category: {
    categoryId: "C4"
  }
}, {
  id: "item3",
  itemName: "Masala Dosai",
  rate: 50,
  taxes: [{
    name: "GST",
    rate: 18,
    isInPercent: true,
  }, {
    name: "Service Tax",
    rate: 10,
    isInPercent: true,
  }],
  category: {
    categoryId: "C3"
  }
}, {
  id: "item4",
  itemName: "Dosai Platter",
  rate: 150,
  taxes: [{
    name: "Service Tax",
    rate: 10,
    isInPercent: true,
  }],
  category: {
    categoryId: "C1"
  }
}];

// bill object for reference :-
const bill = {
  id: "B1",
  billNumber: 1,
  openTime: "06 Nov 2020 14:19",
  customerName: "CodeQuotient",
  billItems: [{
    id: "item2",
    quantity: 3,
    discount: {
      rate: 10,
      isInPercent: false,
    }
  }, {
    id: "item1",
    quantity: 15,
    discount: {
      rate: 10,
      isInPercent: true,
    }
  }, {
    id: "item4",
    quantity: 2,
    discount: {
      rate: 15,
      isInPercent: true,
    }
  }]
};


function calculateBill(bill) {
  let totalBillAmount = 0;
  let billItems = [];
  // write your code here
  var totalBill = 0;
  var itemTotal ;
  // calculating raw bill of one item without discount
  bill.billItems.forEach(ele=>{
  let itemId = ele.id;
  // searching the element price and calculate total with quantity
  menu.forEach(item=>{
    if(item.id == itemId )
    {
      if(ele.discount.isInPercent == true){
        discountPerItem = (ele.discount.rate * item.rate)/100;
      }else{
        discountPerItem = ele.discount.rate;
      }
      itemTotal = (item.rate-discountPerItem) * ele.quantity ; 
    }
  })

  //claculating discount of that item 
  // if(ele.discount.isInPercent == true){
  //   itemTotal -= (ele.discount.rate * itemTotal)/100;
  // }else{
  //   itemTotal -= ele.discount.rate;
  // }

  //claculating tax 
  var obj = {}
  menu.forEach(item=>{ 
    if(item.id == itemId )
    {
      obj = {name:item.itemName,quantity:ele.quantity};
      var taxTotal = 0 ;
     item.taxes.forEach(tax=>{
      if(tax.isInPercent == true ){
      taxTotal += (tax.rate * itemTotal)/100;
      }
      else{
        taxTotal += tax.rate;
      }
     })
     console.log("tax total = ",taxTotal);
     itemTotal += taxTotal;
     console.log(obj.name,"@",item.rate,"*",obj.quantity,"=",itemTotal);
    }
  })
  billItems.push(obj);
  totalBillAmount += itemTotal;
  })
  totalBillAmount = totalBillAmount.toFixed(2);
  console.log(totalBillAmount);
  // return [totalBillAmount, billItems];
}

calculateBill(bill);

console.log(1130.69+304);