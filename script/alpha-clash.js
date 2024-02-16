
// function play() {
//     const homeScreenSection = document.getElementById('home-screen');
//       //console.log(homeScreenSection);
//     homeScreenSection.classList.add('hidden');


//     const playGroundSection = document.getElementById('play-ground');
//       //console.log(playGroundSection);
//     playGroundSection.classList.remove('hidden');

// }  


//  উপরের পুরো প্রক্রিয়া টা যদি আলাদা আলাদা  ফংশনে করে তার পরে function play() 
//  এই ফাংশনের ভিতরে ভিন্ন ভিন্ন আইডি দিয়ে কল করে দেই তাহলে 
//  কাজ অনেকটা সহজ হবে এবং বার বার করা লাগবে না শুধু আইডি দিয়ে কল করলেই হবে।


function hiddenElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}


function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}


function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-yellow-400");

}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-yellow-400");

}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}









function getARandomAlphabet() {

    //creat an Alphabet Array split('') by string---> একটি  স্ট্রিং কে split করে Array তে রূপান্তর করা হলো।
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);


    // get a random index number between (0 to 25)--->
    const randomNumber = Math.random() * 25
    // console.log(randomNumber)
    const indexNumber = Math.round(randomNumber); //  random ভগ্নাংশ নাম্বার কে রাউন্ড করা হলো।
    // console.log(indexNumber);

    //  indexNumber ও alphabets দুটোই এক সাথে --->
    const alphabet = alphabets[indexNumber];
    // console.log(indexNumber, alphabet);

    // শুধু অক্ষর টা কে রিটার্ন করছি।
    return alphabet;
}


function continueGame() {

    const alphabet = getARandomAlphabet();
    console.log('শুধু অক্ষর টা কে রিটার্ন করছি:', alphabet);

    // set randomly alphabet to the screen.
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}



// Keyboard Button Press---->function
function handleKeyboardButtonPress(event) {
    // console.log(event);
    //  Gamer keyboard  এ press করলে আমরা যে অক্ষর টি পাবো ।  
    const gamerPressed = event.key;
    console.log('Gamer Pressed:', gamerPressed);

    // Randomly গেম থেকে আমরা যে অক্ষর টি (ramdom key) পাবো ।  
    const currentAlphabetElement = document.getElementById("current-alphabet");
    // console.log( ' Press The Key:' , currentAlphabetElement.innerText)
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(gamerPressed, expectedAlphabet);

    // Gamer Pressed  key & Random key  যদি (===) সমান হয় তবে  if  এর ভিতরে ঢুকবে,
    // আর সমান না হলে  else যাবে।
    if (gamerPressed === expectedAlphabet) {
        console.log('WOW You get a point');

        //Update Score:--->
        // যখন উপরের কন্ডিশন মিলে যাবে তখন আগের স্কোর টাকে নিয়ে 
        //তার সাথে প্রতিবার ১ করে যোগ করে নতুন স্কোর দিবে এবং গেম কে কন্টিনিউ করবে।


        //(---->
        // // 1. get the current score------------>
        // const currentScoreElement = document.getElementById("current-score");
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // console.log(currentScore);

        // //2. increase the score by +1--------->
        // const newScore = currentScore + 1;
        // // console.log(newScore);

        // //3. show the update score------------>
        // currentScoreElement.innerText = newScore;
        //---->)
//----------------------------------------------------------------------------------->
        //উপরের সমস্ত প্রসেস টাকে  আরো সংক্ষেপে করা যাবে, বাহিরে আলাদা ভাবে ফাংশন 
        //ডিক্লার করে সেই ফাংশন কে এই কন্ডিশনের ভিতরে একটি ভেরিয়েবলে মধ্যে কল করতে হবে,
        // আর আমরা যে উপাদান টাকে খুজবো তার আইডি কে এই ফাংশনের প্যারামিটার হিসাবে
        // দিতে হবে, তার পরে যোগ বিয়োগ করে স্কোর আপডেট করতে হবে। 


        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore)
        const updatedScore = currentScore + 1;
        console.log(updatedScore)
        setTextElementValueById('current-score', updatedScore)  //  এই ফাংশনের কলে ১ম প্যারামিটার হিসাবে আগের স্কোরের আইডি নিয়ে তার ইনারটেক্স্ট হিসাবে আপডেট স্কোরের মান কে সেট করা হয়েছে।


        // ‍ Start a new round---->
        //Gamer Pressed key & Random key  যদি (===) সমান হয় তবে  continueGame() ফাংশন কে কল করে Game কে সামনে continue করবে।
        continueGame();
        // এবং আগে যেটা মিলে গেছিরো সেটার কালার রিমুভ হবে। নতুন বাটন সিলেক্ট করে তার কালার সেট হবে।
        removeBackgroundColorById(expectedAlphabet)
    }
    else {
        console.log('Opps!!! You missed: you lost a life');
        //Update life Score:--->
        // যখন উপরের কন্ডিশন মিলবে না তখন আগের স্কোর থেকে
        // প্রতিবার ১ করে বিয়োগ করে নতুন স্কোর দিবে ।

        // (--->
        // // 1. get the current life count----------->
        // const currentLifeElement = document.getElementById("current-life");
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //2. decrease the life count by -1----------->
        // const newLife = currentLife - 1;

        // //3. show the update life count----------->
        // currentLifeElement.innerText = newLife; 
        //---->)
//----------------------------------------------------------------------------------->
        //উপরের সমস্ত প্রসেস টাকে  আরো সংক্ষেপে করা যাবে, বাহিরে আলাদা ভাবে ফাংশন 
        //ডিক্লার করে সেই ফাংশন কে এই কন্ডিশনের ভিতরে একটি ভেরিয়েবলে মধ্যে কল করতে হবে,
        // আর আমরা যে উপাদান টাকে খুজবো তার আইডি কে এই ফাংশনের প্যারামিটার হিসাবে
        // দিতে হবে, তার পরে যোগ বিয়োগ করে স্কোর আপডেট করতে হবে। 

    }

}

// Gamer Keyboard এ press করার পরে উপরের ফাংশন এর সমস্ত প্রক্রিয়া কে 
// নিচের এই keyup নামক document এ call back function  হিসাবে ডিক্লার করা হয়েছে।
document.addEventListener('keyup', handleKeyboardButtonPress)


// Play Now Button এর onclick="play()" মূল ফাংশন এটা .
function play() {

    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}