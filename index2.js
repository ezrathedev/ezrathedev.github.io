// this is for the 3d cards 
// let card = document.querySelector();

// creating a type writing thing that loops through an array to the browser.

const whoAmI = ['software Engineer', 'tech wiz', 'Photographer','Videographer','Dreamer','hacker'];

let speed = 50;

for(let x = 0; x < whoAmI.length; x++){
    console.log(whoAmI[x]);
}


function typeWriter() {
    if (let i = 0  < whoAmI.length) {
      document.getElementById("type").innerHTML += whoAmI.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  