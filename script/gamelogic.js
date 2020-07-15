


score.innerHTML = 0;

let showScore = document.getElementById('showScore')

//showScore.innerHTML = score;

function toggle(element, classes) {
    classes.forEach(className => element.classList.toggle(className));
  }


  targets.forEach((target, i, arr) => {
    target.onclick = function() {
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



