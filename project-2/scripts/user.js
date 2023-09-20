
var counter=0

const cartData=[]

const data = [
   {
    "id":1,
    "imgurl":"../../images/products/headset.png",
    "type":"Electronics",
    "name":"HeadPhone",
    "price":300,
    "rating":"12 rating",
    "addedtocart":false,
    "addedtowishlist":false,
   },
   {
    "id":2,
    "imgurl":"../../images/products/iphone.png",
    "type":"Electronics",
    "name":"Phone",
    "price":780,
    "rating":"12 rating",
    "addedtocart":false,
    "addedtowishlist":false,
   },
   {
    "id":3,
    "imgurl":"../../images/products/keyboard.png",
    "type":"Electronics",
    "name":"Keyboard",
    "price":200,
    "rating":"12 rating",
    "addedtocart":false,
    "addedtowishlist":false,
   },
   {
    "id":4,
    "imgurl":"../../images/products/macbook.png",
    "type":"Electronics",
    "name":"macbook",
    "price":450,
    "rating":"12 rating",
    "addedtocart":false,
    "addedtowishlist":false,
   },
   {
    "id":5,
    "imgurl":"../../images/products/pc.png",
    "type":"Electronics",
    "name":"All in-one-pc",
    "price":1000,
    "rating":"12 rating",
    "addedtocart":false,
    "addedtowishlist":false,
   }
]


// rendering for the homepage
var itemcardContainer = document.getElementById('trendscontainer');

for(let i=0;i<data.length;i++){

    let card = `<div id="itemcard" class="itemcard">
    <a href="../../templates/products/product.html"><img id="${data[i].id}" class="imgsrc" src="${data[i].imgurl}" onclick=getproductId(this.id)></a>
    <div>
        <p class="type">${data[i].type}</p>
        <p class="itemname">${data[i].name}</p>
    </div>
    <div class="price-rating">
        <p class="price">$${data[i].price}</p>
        <div class="rating">
            <p><i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i></p>
            <p class="ratingno">${data[i].rating}</p>
        </div>
    </div>
    <div class="icon-options">
        <div class="icon-wrapper">
            <i id="${data[i].id}" class="fa fa-heart" onclick="addtowishlist(this.id)"></i>
        </div>
        <div class="icon-wrapper">
            <i id="${data[i].id}" class="fa fa-shopping-cart" onclick="addtocart(this.id)"></i>
        </div>
        <div class="icon-wrapper">
            <i id="${data[i].id}" class="fa fa-compress" onclick="addtocompare(this.id)"></i>
        </div>
        <div class="icon-wrapper">
            <i id="${data[i].id}" class="fa fa-eye" onclick="quickview(this.id)"></i>
        </div>                
    </div>
    </div>`
    itemcardContainer.insertAdjacentHTML('beforeend',card);
}

// image sliding
var currentIndex=1;
displaySlides(currentIndex);
function setSlides(num){
    currentIndex+=num;
    displaySlides(currentIndex);
}
function displaySlides(num){
    var slides = document.getElementsByClassName("image");
    if(num<1){
        currentIndex=slides.length
    }
    if(num>slides.length){
        currentIndex=1
    }
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }
    slides[currentIndex-1].style.display="block";
}



// rendering for the allproduct page

function allproductpage(){
    var allproductContainer = document.getElementById('allproducts')

    for(let i=0;i<data.length;i++){
    
        let card = `  <div class="itemcard">
        <a href="../../templates/products/product.html"><img src="${data[i].imgurl}"></a>
        <div>
            <p class="type">${data[i].type}</p>
            <p class="itemname">${data[i].name}</p>
        </div>
        <div class="price-rating">
            <p class="price">$${data[i].price}</p>
            <div class="rating">
                <p><i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i></p>
                <p class="ratingno">${data[i].rating}</p>
            </div>
        </div>
        <div class="icon-options">
            <div class="icon-wrapper">
                <i id="${data[i].id}" class="fa fa-heart" onclick="addtowishlist(this.id)"></i>
            </div>
            <div class="icon-wrapper">
                <i id="${data[i].id}" class="fa fa-shopping-cart" onclick="addtocart(this.id)"></i>
            </div>
            <div class="icon-wrapper">
                <i id="${data[i].id}" class="fa fa-compress" onclick="addtocompare(this.id)"></i>
            </div>
            <div class="icon-wrapper">
                <i id="${data[i].id}" class="fa fa-eye" onclick="quickview(this.id)" ></i>
            </div>                
        </div>
    </div>`
    allproductContainer.insertAdjacentHTML('beforeend',card);
    }
}

// for each product
function showproduct(){
    const itemid = localStorage.getItem("itemid");
    console.log(itemid);

    let imgsrc1 = document.getElementById("img1")
    let imgsrc2 = document.getElementById("img2")
    let imgsrc3 = document.getElementById("img3")
    let imgsrc4 = document.getElementById("img4")

    let name = document.getElementById("name")
    let type = document.getElementById("type")
    let rating = document.getElementById("rating")
    let price = document.getElementById("price")


    for(item of data){
        if(item.id == itemid){
            
            imgsrc1.setAttribute('src',item.imgurl);
            imgsrc2.setAttribute('src',item.imgurl);
            imgsrc3.setAttribute('src',item.imgurl);
            imgsrc4.setAttribute('src',item.imgurl);

            name.innerHTML = item.name;
            type.innerHTML = item.type;
            rating.innerHTML = item.rating;
            price.innerHTML = item.price;

            break;
        }
    }



    var itemcardContainer = document.getElementById('trendscontainer');

    for(let i=0;i<data.length;i++){

        let card = `<div id="itemcard" class="itemcard">
        <a href="../../templates/products/product.html"><img id="${data[i].id}" class="imgsrc" src="${data[i].imgurl}" onclick=getproductId(this.id)></a>
        <div>
            <p class="type">${data[i].type}</p>
            <p class="itemname">${data[i].name}</p>
        </div>
        <div class="price-rating">
            <p class="price">$${data[i].price}</p>
            <div class="rating">
                <p><i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i></p>
                <p class="ratingno">${data[i].rating}</p>
            </div>
        </div>
        <div class="icon-options">
            <div class="icon-wrapper">
                <i id="${data[i].id}" class="fa fa-heart" onclick="addtowishlist(this.id)"></i>
            </div>
            <div class="icon-wrapper">
                <i id="${data[i].id}" class="fa fa-shopping-cart" onclick="addtocart(this.id)"></i>
            </div>
            <div class="icon-wrapper">
                <i id="${data[i].id}" class="fa fa-compress" onclick="addtocompare(this.id)"></i>
            </div>
            <div class="icon-wrapper">
                <i id="${data[i].id}" class="fa fa-eye" onclick="quickview(this.id)"></i>
            </div>                
        </div>
        </div>`
        itemcardContainer.insertAdjacentHTML('beforeend',card);
    }

}
function getproductId(id){
localStorage.setItem("itemid",id);
}



// 
// rendering cart page
function cartPage(){

    var tablerow = document.getElementById('itemrow');


    const cart_Data = localStorage.getItem('cartitems');

    const newData =JSON.parse(cart_Data)
    console.log("Selected ids",newData)

    for(let i=0;i<newData.length;i++){
        let cartItem = `<div>
        <tr class="second-row">
        <td><img src="${newData[i].imgurl}"></td>
        <td class="standout">${newData[i].type}</td>
        <td>$${newData[i].price}</td>
        <td>1</td>
        <td>$${newData[i].price}</td>
        <td><button id="${newData[i].id}" class="clearbtn" onclick="deletefromCart(this.id)" ><i class="fa fa-times"></i></button></td>
    </tr>
    <div>`
    tablerow.insertAdjacentHTML('afterend',cartItem);
    }

    // finding total
    let total = document.getElementById('subtotal');
    var grandtotal = document.getElementById('grandtotal');

    let total_price=0;
    for(item of newData){
        console.log(item)
        total_price+=item.price;
    }
    console.log(total_price,"price")
    total.innerHTML=total_price;
    grandtotal.innerHTML=total_price-100;

}

// for checkout page in the review part
function checkout(){

    const user = localStorage.getItem('user');
    console.log(user)
    var cartcontent = document.getElementById('cartcontents');

    const cart_Data = localStorage.getItem('cartitems');

    const newData =JSON.parse(cart_Data)
    for(item of newData){
        let cartitem = `<div id="cartcontents" class="tablecontents">
        <img class="item1" src="${item.imgurl}">
        <p class="item1">${item.name}</p>
        <p class="item1">$${item.price}</p>
        <p class="item1">1</p>
        <p class="item1">$${item.price}</p>
        </div>`
        cartcontent.insertAdjacentHTML('afterend',cartitem);
    }
    setBillingInfo()
   
}

// for user details

function userDetails(form){
    form.preventDefault();
    console.log(form.target.firstname.value);
    let user=[
        {
            "firstname":form.target.firstname.value,
            "lastname":form.target.lastname.value,
            "middlename":form.target.middlename.value,
            "company":form.target.company.value,
            "email":form.target.email.value,
            "phone":form.target.phone.value,
            "country":form.target.country.value,
            "city":form.target.city.value,
            "state":form.target.state.value,
            "zip":form.target.zip.value,
            "address":form.target.address.value,
        }
    ]
    console.log(user);
    localStorage.setItem('user',JSON.stringify(user));
    

    location.assign('file:///C:/Users/FARZAN/Desktop/project1/templates/checkout/checkout.html?#delivery')
}




function gotopayment(event){
    
    event.preventDefault();
    console.log(event.target.deliveryOption.value)
    localStorage.setItem('delivery',event.target.deliveryOption.value)
    location.assign('file:///C:/Users/FARZAN/Desktop/project1/templates/checkout/checkout.html?#payment')
}
function gotoReview(event){
    event.preventDefault();

    let cardnumber=event.target.cardnumber.value;

    localStorage.setItem('cardnumber',cardnumber);

    location.assign('file:///C:/Users/FARZAN/Desktop/project1/templates/checkout/checkout.html?#review')
    setBillingInfo()

}

function goBacktoBilling(){
    location.assign('file:///C:/Users/FARZAN/Desktop/project1/templates/checkout/checkout.html?#checkout-form')
}
function goBacktoDelivery(){
    location.assign('file:///C:/Users/FARZAN/Desktop/project1/templates/checkout/checkout.html?#delivery')
}
function goBacktoReview(){
    location.assign('file:///C:/Users/FARZAN/Desktop/project1/templates/checkout/checkout.html?#review')
}
function gotoconfirmation(){
    location.assign('file:///C:/Users/FARZAN/Desktop/project1/templates/checkout/checkout.html?#confirm')
}


// for setting the billing information and showing in the review part
function setBillingInfo(){
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var phone=document.getElementById('phone');
    var country=document.getElementById('country');
    var city=document.getElementById('city');
    var state=document.getElementById('state');
    var zip=document.getElementById('zip');
    var address=document.getElementById('address');
    var delivary = document.getElementById('delivery-route');
    var cardno = document.getElementById('cardnumber')

    var totalele = document.getElementById("total-Price");

    const cart_Data = localStorage.getItem('cartitems');
    const newData =JSON.parse(cart_Data)

    let total_price=0;
    for(item of newData){
        total_price+=item.price;
    }

    const user = localStorage.getItem('user');
    const userdata = JSON.parse(user);
    const delivery  = localStorage.getItem('delivery');
    const cardNumber = localStorage.getItem('cardnumber')
    console.log("UserData",userdata)
    console.log("Delivery",delivery)
    console.log("CardNo",cardNumber)

    name.innerHTML = userdata[0].firstname+" "+userdata[0].lastname;
    email.innerHTML = userdata[0].email;
    phone.innerHTML = userdata[0].phone;
    country.innerHTML = userdata[0].country;
    city.innerHTML = userdata[0].city;
    state.innerHTML = userdata[0].state;
    zip.innerHTML = userdata[0].zip;
    address.innerHTML = userdata[0].address;
    delivary.innerHTML = delivery;
    cardno.innerHTML = cardNumber;
    totalele.innerHTML = total_price;


}
// deletting from cart
function deletefromCart(id){
    const cart_Data = localStorage.getItem('cartitems');
    const newData =JSON.parse(cart_Data)
    const arr = newData.filter(item =>item.id!=id)

    localStorage.setItem('cartitems',JSON.stringify(arr))

    location.reload();
}

// for adding to wishlist message
function addtowishlist(id){
    var msg = document.getElementById("wishlist");
    msg.style.display="flex";

    for(item of data){
        if(item.id == id){
            item.addedtowishlist=true;
            
            break;
        } 
    }
    console.log(data);
    
    setTimeout(() => {
        msg.style.display="none"
    }, 3000);
    
    // msg.style.display="none";
    // alert("added to wiashlist");
}

// for addingto cart message
function addtocart(id){
    var msg = document.getElementById("addtocart");
    msg.style.display="flex";
    var cart= document.getElementById("cartlength");
    cart.innerHTML = counter+=1

    for(item of data){
        if(item.id == id){
            item.addedtocart=true;
            cartData.push(item);
            break;
        }
        console.log(data);
    }

    localStorage.setItem('cartitems',JSON.stringify(cartData));


    setTimeout(() => {
        msg.style.display="none"
    }, 3000);
}
// for adding to compare message
function addtocompare(id){
    var msg = document.getElementById("addtoCompare");
    msg.style.display="flex";

    setTimeout(() => {
        msg.style.display="none"
    }, 3000);
}
// for quickview
function quickview(id){
    console.log(id)
    var container = document.getElementById("container")
    var msg  = document.getElementById("quickview");
    var img = msg.querySelector('img');
    msg.style.display = "flex";
    // getting all the elements for product detials
    var name = msg.querySelector('#productname')
    var category = msg.querySelector('#productcat')
    var rating = msg.querySelector('#productrating')
    var price = msg.querySelector('#productprice')
    

    for(item of data){
        if( item.id==id){
            name.innerHTML = item.name;
            category.innerHTML=item.type;
            rating.innerHTML=item.rating;
            price.innerHTML=item.price;
            img.setAttribute('src',item.imgurl);
            break;
        }
    }
    console.log(msg)
    // img.setAttribute('src',src.id);
    
    container.classList.add('blur');
    document.body.classList.add('popupopen');
   
    msg.addEventListener('click',(e) =>{
        // if (msg.style.display!="none" && container.classList.contains('blur')){
            msg.style.display = "none";
            container.classList.remove('blur');
            document.body.classList.remove('popupopen');
        // }
    })
}

