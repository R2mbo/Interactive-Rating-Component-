let myspans = document.querySelectorAll(".rating span")
let btn = document.querySelector("button");
let myrate = document.querySelector(".after-submit p span")

btn.addEventListener("click",function(e){
    myspans.forEach(function(span){
        if(!span.classList.contains("change-color-span")){
            e.preventDefault();
        }else {
            document.querySelector(".main").style.display = "none";
            document.querySelector(".after-submit").style.display = "flex";
        }
    })
})
myspans.forEach(function(span){
    span.addEventListener("click",function(e){
        for(let i = 0; i<myspans.length; i++){
            if(e.target === myspans[i]){
                if(myspans[i].classList.contains("change-color-span")){
                    myspans[i].classList.remove("change-color-span")
                }else {
                    myspans[i].classList.add("change-color-span")
                    myrate.innerHTML = myspans[i].innerHTML;
                }
            }else if(e.target !== myspans[i]){
                if(myspans[i].classList.contains("change-color-span")){
                    myspans[i].classList.remove("change-color-span")
                }
            }
        }
    })
})

