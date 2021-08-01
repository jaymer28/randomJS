


var $ = function( id ) { 
  return document.getElementById( id ); 
};





var shipments = {
  'standard': {
    'leadTime': 7,
    'fee': 2
  },
  'express': {
    'leadTime' : 3,
    'fee': 4.5
  }
}



const date = new Date().toISOString();


let d = new Date();
let standard = d.setDate(d.getDate() + 7);
standard = new Date(standard).toISOString();
console.log(standard)

let dExpress = new Date();
let express = dExpress.setDate(dExpress.getDate() + 3);
express = new Date(express).toISOString();
console.log(express)


$('shipmentMethods').onchange = function(){
  let shipmentOption = $('shipmentMethods');
  let optionIndex = shipmentOption.options.selectedIndex
  let chooseOption = shipmentOption.options[optionIndex]
  if(chooseOption.value === "standard"){
    $('orderDate').innerHTML = date.substr(0,10);
    $('dateOfDelivery').innerHTML = standard.substr(0,10);
    $('DelvieryFee').innerHTML = shipments.standard.fee.toFixed(2) + " $" ;
  } else {
    $('orderDate').innerHTML = date.substr(0,10);
    $('dateOfDelivery').innerHTML = express.substr(0,10);
    $('DelvieryFee').innerHTML = shipments.express.fee.toFixed(2) + " $" ;
  }
}






var phones = {
  'iphoneSeRed':{
    'name': 'iphone Se 64GB Red',
    'price': 450,
    'currency': 'US$',
    'imageUrl': "https://res.cloudinary.com/octopuscdn/image/upload/f_auto/powermaccenter/images/products/s_45678/large_1603768733_SEA_iPhoneSE_COL_PDP_Image_Red_2_FA.png"
  },
  'iphone11Black':{
    'name': 'iphone 11 128GB Black',
    'price': 896,
    'currency': 'US$',
    'imageUrl': "https://www.abenson.com/media/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/6/169255_2020.jpg"
  },
  'iphone_8_plus_silver':{
    'name': 'iphone 8 plus 64Gb Silver',
    'price': 519,
    'currency': 'US$',
    'imageUrl': "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-8-plus-silver.jpg"
  }
}



function ifCheck(){
  $('iPhoneSe');
  if(iPhoneSe.checked){
    $('imgPhone').innerHTML = "<img src='  " + phones.iphoneSeRed.imageUrl +"  '>";
    $('iphoneColor&GB').innerHTML = phones.iphoneSeRed.name;
    $('phonePrice').innerHTML = phones.iphoneSeRed.currency + phones.iphoneSeRed.price.toFixed(2);
  }
}



  let names = document.getElementsByName('flexRadioDefault');
  for(let a = 0; a < names.length; a++){
    names[a].onchange = function(){
      for(let b = 0; b < names.length; b++){
        if(names[b].checked){
          let valueOf = names[b].value;
          $('iphoneColor&GB').innerHTML = phones[valueOf].name;
          $('phonePrice').innerHTML = phones[valueOf].currency + phones[valueOf].price.toFixed(2);
          $("phoneIMG").src = phones[valueOf].imageUrl;
        }
      }
    }
  }

