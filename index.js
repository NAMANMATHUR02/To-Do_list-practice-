const nameInput = document.querySelector("input[name='list-name']");
const nameButton = document.querySelector(".heading-btn");
const nameHeading = document.querySelector(".right-div .heading");


const itemInput = document.querySelector("input[name='list-item']");
const itemButtom = document.querySelector(".item-btn");
const itemUL = document.querySelector(".items");

function extractHeading(){
    if(nameInput.value!=""){
        nameHeading.innerText = nameInput.value;
    }
}

function extractItems() {
    if(itemInput.value!="") {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> ${itemInput.value}`;
        li.classList.add("item");
        itemUL.appendChild(li);
        itemInput.value="";
    }
    
}
nameButton.addEventListener("click", extractHeading);

itemButtom.addEventListener("click" , extractItems);
