class Mkulima{
    constructor(product,vendors,farms){
        this.product=[];
        this.vendors=[];
        this.farms=[];
    }
    }
    
  class addFarm extends Mkulima{     
       constructor(farmId, farmName, farmerName, phone, address){
       super(farmId, farmName, farmerName, phone, address)
        console.log(this.farms.push(farmId, farmName, farmerName, phone, address))

        }
}
    var farm=new addFarm(356789,"Kakito","Hamdi","0738978209",5678)
     console.log(farm)
    

     let Farm={
       farmId: 678789,
       farmName:"Loli",
       farmerName:"Jane",
         phone:"0756789034",
         address:6789,
     set Farm(updateFarm){
            return this.Farm=updateFarm
         }

   };
    console.log(Farm)

  let farms={
        farmId:365215,
        farmName:"komanu",
        farmerName:"Jackline",
       phone:"0729876450",
        address:67809,
        get getfarm(){
 return this.farmId
        }

  };
   console.log(farms.getFarm)
  class addProduct extends Mkulima{
       constructor(productId,name,price){
          super(productId,name,price)
            console.log(this.product.push(productId,name,price))
        }
    }
     let product3=new addProduct(160,"Lotion",1600.00)
 console.log(product3)
 let product4=new addProduct(56,"salt",668.50)
 console.log(product4)

 let products={
   productId:67,
    name:"sugar",
    price:780.50,
    set products(updateProducts){
        return this.product=updateProducts
  }
 }
  console.log(products)
 let product={
   productId:80,
    name:"powder",
    price:300,
    get getProducts(){
        return this.productId
    
 console.log(products.getProduct)


    

function productList(){

   var Kikomou=""
    return (Kikomou);

 }
let items=["milk",100,pen,50,"tomatoes",65,"fruits",80];{
 console.log(items);
 let result=productList(ITEMS);
 console.log(results);

 }}

 }