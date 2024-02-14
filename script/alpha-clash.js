
// function play() {
//     const homeScreenSection = document.getElementById('home-screen');
//     //console.log(homeScreenSection);
//     homeScreenSection.classList.add('hidden');


//     const playGroundSection = document.getElementById('play-ground');
//     //console.log(playGroundSection);
//     playGroundSection.classList.remove('hidden');

// }  


//  উপরের পুরো প্রক্রিয়া টা যদি আলাদা আলাদা  ফংশনে করে তার পরে function play() 
//  এই ফাংশনের ভিতরে ভিন্ন ভিন্ন আইডি দিয়ে কল করে দেই তাহলে 
//  কাজ অনেকটা সহজ হবে এবং বার বার করা লাগবে না শুধু আইডি দিয়ে কল করলেই হবে।

function play(){

    hiddenElementById('home-screen');
    showElementById('play-ground');

}


function hiddenElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden');

}

function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');

}


