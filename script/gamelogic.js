


score.innerHTML = 0;

let showScore = document.getElementById('showScore')

//showScore.innerHTML = score;

function toggle(element, classes) {
    classes.forEach(className => element.classList.toggle(className));
  }


  targets.forEach((target, i, arr) => {
    target.onclick = function(event) {
        if(event.target.id === 'bullseye') score.innerHTML = Number(score.innerHTML) + 4
        score.innerHTML++;
      // let random
    //get a random element in arr 
    let nextTarget = arr[Math.floor(Math.random() * arr.length)]
    // check that the random element is not the same as the one clicked
    if (nextTarget === target){
        return nextTarget
    } else {
        toggle(target, ["hide"]);
        toggle(nextTarget, ["hide"]);
        console.log(i)
    }   
    }

    
})

/*let bullseye = document.querySelector('#bullseye')

function bullseyeScore(){

bullseye.forEach((bullseye, i, arr) => {
    bullseye.onclick = function() {
        score.innerHTML += '5';
    }
})
}
*/
