// const ul = document.querySelector("#input");

const deleteItem = function() {
  console.log(this.parentElement);
  this.parentElement.style.textDecoration = "line-through";
};

const deleteNow = function() {
  console.log(this.parentElement);
  this.parentElement.remove();
};

input.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    const li = document.createElement("li");
    li.innerText = input.value;

    const button = document.createElement("button");
    button.innerText = "delete";
    button.style.marginLeft = "20px";
    button.addEventListener("click", deleteItem);
    button.addEventListener("dblclick", deleteNow);

    li.append(button);
    ul.appendChild(li);
  }
});
