let downArrow2 = document.getElementById("down2");
let upArrow2 = document.getElementById("up2");
let DropdownList2 = document.getElementById("myDropdown2");


downArrow2.addEventListener("click",hide2);

function hide2(){
    DropdownList2.style.display = "block";
    downArrow2.style.display = "none";
    upArrow2.style.display = "block"

}

upArrow2.addEventListener("click",show2);

function show2(){
    DropdownList2.style.display = "none";
    downArrow2.style.display = "block";
    upArrow2.style.display = "none"
}

///


let downArrow1 = document.getElementById("down1");
let upArrow1 = document.getElementById("up1");
let DropdownList1 = document.getElementById("myDropdown1");


downArrow1.addEventListener("click",hide1);

function hide1(){
    DropdownList1.style.display = "block";
    downArrow1.style.display = "none";
    upArrow1.style.display = "block"

}

upArrow1.addEventListener("click",show1);

function show1(){
    DropdownList1.style.display = "none";
    downArrow1.style.display = "block";
    upArrow1.style.display = "none"
}


