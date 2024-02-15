
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
    element.classList.add("bg-orange-400");

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
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}








function play() {

    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}