function getReceipt(){
    return `
        Base Price:
        Tax:
        Total Due:
    `;
}


function onContainerClicked(e) {
    toppings.style.display = cup.checked ? "block" : "none";
}
document.addEventListener("DOMContentLoaded", () => {
    cup.addEventListener("click", onContainerClicked);
    cone.addEventListener("click" , onContainerClicked);
    submtOrder.addEventListener("click", ()=>)
        outputReceipt.innerText = getReceipt();
    })
    
})