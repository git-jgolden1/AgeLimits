function youngestGirl(age) {
    console.log(age)
    return Math.floor(age / 2) + 7;
}

function oldestGirl(age) {
    return Math.floor(age + (age - youngestGirl(age)) / 2)
}

function submitAge() {
    const {value} = document.getElementById("age");
    const header = document.getElementById("result");
    const youngestAgeAllowed = 14
    const oldestAgeAllowed = 120

    if (value >= youngestAgeAllowed && value <= oldestAgeAllowed) {
    const youngestAge = youngestGirl(parseInt(value))
    const oldestAge = oldestGirl(parseInt(value))
    header.innerHTML = `Youngest age: ${youngestAge} Oldest age: ${oldestAge}`;
    }else{
       header.innerHTML = `Please enter an age between ${youngestAgeAllowed} and ${oldestAgeAllowed}`;
    }
}