let link = document.getElementsByClassName("link")
let currentValue =1;
function activeList() {
    for (l of link) {
        l.classList.remove("active")
    }
    event.target.classList.add("active")
    currentValue=event.target.value;
   


}
function backbtn() {

    if (currentValue > 1) {
        for (l of link) {
            l.classList.remove("active")
        }
        currentValue--;
        link[currentValue-1].classList.add("active")
        
    }

}
function nextbtn(){
    if(currentValue < 5){
        for(l of link){
            l.classList.remove("active")
        }
        
        link[currentValue].classList.add("active") 
        currentValue++;
    }
}

let nav =document.getElementsByClassName("nav")

Array.from(nav).forEach(i=>{
    i.addEventListener('click',navs)
})
function navs(){
    for (i of nav){
        i.classList.remove("active")
    
    }
    event.target.classList.add("active")
}