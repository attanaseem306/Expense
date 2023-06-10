
function total() {

    var take = document.getElementById("range");
    var finalget = take.value;
    var getone = document.getElementById("one");
    getone.textContent = finalget;
}

function my() {
    var takeCostAmount = document.getElementById("cost")
    var getTwo = document.getElementById("two");
    var finalgetTwo = takeCostAmount.value;
    getTwo.innerText = finalgetTwo

    var take = document.getElementById("range");
    var finalget = take.value;
    var balance = finalget - finalgetTwo;


    var getThree = document.getElementById("three");
    getThree.innerText = balance

    var ul = document.getElementById("ul");
    var inputValue = document.getElementById("product");
    var inputValue2 = document.getElementById("cost");
    var li = document.createElement('li');
    var delBtn = document.createElement('button');
    var para = document.createElement("p");
    var delText = document.createTextNode('DELETE');
    var takeInput = document.createTextNode(inputValue.value);
    var takeInput2 = document.createTextNode(inputValue2.value);


    para.appendChild(takeInput2);
    delBtn.appendChild(delText);

    li.appendChild(para);
    li.appendChild(takeInput);
    inputValue.value = "";
    inputValue2.value = "";
    li.appendChild(delBtn);
    ul.appendChild(li);
    delBtn.setAttribute("onclick", "empty(this)");
    delBtn.setAttribute("class", "clear")

}

function empty(a) {
    a.parentNode.remove();
}