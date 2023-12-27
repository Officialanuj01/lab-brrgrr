// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};
const price = document.querySelectorAll(".items")

price.forEach((element,index)=>{
  if(index==0){
    element.textContent = `Patty: ${ingredients.Patty}`
  }
  else if(index==1){
    element.textContent = `Cheese: ${ingredients.Cheese}`
  }
  else if(index==2){
    element.textContent = `Tomatoes:${ingredients.Tomatoes}`
  }
  else if(index==3){
    element.textContent = `Onions: ${ingredients.Onions}`
  }
  else if(index==4){
    element.textContent = `Lettuce: ${ingredients.Lettuce}`
  }
  
  

});
//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

function priceTrack(){
  let totalPrice = 20;
  for (let i in state){
    if(state[i]){
      totalPrice += ingredients[i]
    }
  }
  console.log(totalPrice)
  return totalPrice;
  console.log(totalPrice)
}


// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese");
  if(state.Cheese){
    cheese.style.display = "inherit";
  } else{
    cheese.style.display = "none"
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById("tomato");
  if(state.Tomatoes){
    tomatoes.style.display = "inherit";
  } else{
    tomatoes.style.display = "none"
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.getElementById("onion");
  if(state.Onions){
    onions.style.display = "inherit";
  } else{
    onions.style.display = "none"
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if(state.Lettuce){
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none"
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
  renderPatty()
};

// Trial 2 - Setup event listener for the cheese button
const cheeseBtn = document.querySelector(".btn-cheese"); 
cheeseBtn.addEventListener("click", function () {
  state.Cheese = !state.Cheese; 
  renderAll();
  renderCheese();
});


// Trial 2 - Setup event listener for the tomatoes button
const tomatoesBtn = document.querySelector(".btn-tomatoes"); 
tomatoesBtn.addEventListener("click", function () {
  state.Tomatoes = !state.Tomatoes; 
  renderAll();
  renderTomatoes();
});

// Trial 2 - Setup event listener for the onion button
const onionBtn = document.querySelector(".btn-onions"); 
onionBtn.addEventListener("click", function () {
  state.Onions = !state.Onions; 
  renderAll(); 
  renderOnions();
});


// Trial 2 - Setup event listener for the lettuce button
const lettuceBtn = document.querySelector(".btn-lettuce");
lettuceBtn.addEventListener("click",()=>{
  state.Lettuce = !state.Lettuce;
  renderAll();
  renderLettuce();

})

//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons(){
  for (let i in state){
    if(state[i]){
      document.querySelector(".btn-" + i.toLowerCase()).classList.add("active")
    }
    else{
      document.querySelector(".btn-" + i.toLowerCase()).classList.remove("active")
    }
  }
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard(){
  let a = 0;
  let elements = document.querySelectorAll(".items");
  for(key in state){
    if(state[key]){
      elements[a++].style.display = "inherit";
    }else{
      elements[a++].style.display = "none";
    }
  }
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  let totalPrice = 20;
  for(i in state){
    if(state[i]){
      totalPrice+= ingredients[i];
    }
  }
  document.getElementById("price-details").textContent = `INR ${totalPrice}`
}