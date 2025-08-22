let button = document.querySelector("button");
let div = document.querySelector(".container");
 let jokes = [" Two fish are in a tank. One turns to the other and says, “Any idea how to drive this thing?”What did the tomato say to the other tomato dug a race?Ketchup.",

 " Why shouldn’t you write with a broken pen?Because it’s pointless.",

 " Why can't you trust the king of the jungle?cause he's always lion.",

 " What did one wall say to the other?I'leet you at the corner.",

 " What do sea monsterst?Fish and ships.",

 " What do you call a sad strerry? A blueberry!",

 " Why are pirates called pira?They just ARRRR!",

 " How do you organize a spaparty?You planet.",

 " Why do seagulls fly over the sea?If thflew over the bay, theywould be bagels.",

 " What do cows read tmost?Cattle-logs.",

 " I lost an electron.You really have to keep an ion them! What do clouwear under their sts?  Thunder pants!",

 " How many tickles does it take to make an octopuaugh?Ten-tickles.",

 " What did 0 say to 8? Nice belt.How did the hipster burn his tongue?He drank his fee before it was cool.",

"at did the drummer name her twin daughs?Anna 1, Anna 2.",

"at did the lettuce say to the cele Quit stalking me!"]
let arrLen = jokes.length;
let para = document.createElement("p");
 div.prepend(para);
const genNum = ()=>{
let number = Math.floor(Math.random()*arrLen);
console.log(number);
return number;
}

button.addEventListener("click",()=>{
    let index = genNum();
    console.log(jokes[index]);
    para.innerText = `${jokes[index]}`;
    button.innerText = "Click me again! I will tell you another joke"

})

