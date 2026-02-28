let num = 0;
const number = document.getElementById('num');
const decreasing = document.getElementById('decrease');
const reseting = document.getElementById('reset');
const increasing = document.getElementById('increase');

increasing.addEventListener("click", () => {
    num ++;
    number.textContent = num;
});
decreasing.addEventListener("click", () => {
    num --;
    number.textContent = num;
});
reseting.addEventListener("click", () => {
    num = 0 ;
    number.textContent = num;
});

function update(){
    number.textContent = num;

    if(num > 0){
        number.style.color = "#059669";
    }
    else if(num < 0){
        number.style.color = "#B91C1C";
    }
    else{
        number.style.color = "#6B7280";
    }
}
increasing.addEventListener("click", () => {
    update();
});
decreasing.addEventListener("click", () => {
    update();
})
reseting.addEventListener("click", () => {
    update();
});