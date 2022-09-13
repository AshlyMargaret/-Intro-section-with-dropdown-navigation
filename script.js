let downArrow2 = document.getElementById("down2");
let upArrow2 = document.getElementById("up2");
let DropdownList2 = document.getElementById("myDropdown2");
let aId2 = document.getElementById("a_id2");



downArrow2.addEventListener("click",hide2);
// aId2.addEventListener("click",hide2);


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
let aId1 = document.getElementById("a_id1");


downArrow1.addEventListener("click",hide1);
// aId1.addEventListener("click",hide1);

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


//  mobile view


 let downArrow21 = document.getElementById("down21");
 let upArrow21 = document.getElementById("up21");
 let DropdownList21 = document.getElementById("myDropdown21");
 let aId21 = document.getElementById("a_id21");



 downArrow21.addEventListener("click",hide21);
 aId21.addEventListener("click",hide21);


 function hide21(){
     DropdownList21.style.display = "block";
     downArrow21.style.display = "none";
     upArrow21.style.display = "block"

 }

 upArrow21.addEventListener("click",show21);

 function show21(){
    DropdownList21.style.display = "none";
    downArrow21.style.display = "block";
     upArrow21.style.display = "none"
 }




 let downArrow11 = document.getElementById("down11");
 let upArrow11 = document.getElementById("up11");
 let DropdownList11 = document.getElementById("myDropdown11");
 let aId11 = document.getElementById("a_id11");


downArrow11.addEventListener("click",hide11);
aId11.addEventListener("click",hide11);

function hide11(){
 DropdownList11.style.display = "block";
 downArrow11.style.display = "none";
 upArrow11.style.display = "block"

}

upArrow11.addEventListener("click",show11);

function show11(){
    DropdownList11.style.display = "none";
    downArrow11.style.display = "block";
    upArrow11.style.display = "none";
}