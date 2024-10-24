const add = document.querySelector("#addButton").onclick = function() {
  if (document.querySelector("#addInput").value == 0) {
    alert("You should write something!")
  }
  else {
    document.querySelector("#taskContainer").innerHTML +=
      `
    <div class="task">
      <span class="taskName" onclick="scratch(this)">
        ${document.querySelector("#addInput").value}
      </span>
      <button id="delete" onclick="removing(this)">
        <i class="fas fa-trash-alt"></i>
      </button>
    `;
    /*show tasks area */
    document.querySelector("#taskContainer").style.display = "flex";
    counting()
    document.querySelector("#count").innerHTML = count + 1;


  }
  /*Clear input */
  document.querySelector("input").value = ""

}

/*counting tasks to be done */
const counting = function() {
  count = Number(document.querySelector("#count").innerHTML);
}

/*delete task */
const removing = function(Btn) {
  parent = Btn.parentNode.remove();
  if (Btn.parentNode.classList.contains("taskDone")){
   }
  else {
    counting();
    document.querySelector("#count").innerText = count - 1;

  }
}

/*scratch task when done */

const scratch = function(btn) {
  btn.classList.toggle("taskDone");
  if (btn.classList.contains("taskDone")) {
    counting();

  document.querySelector("#count").innerText = count - 1;
  }
  else {
    counting();

    document.querySelector("#count").innerText = count + 1;
   }
}


/*https://www.youtube.com/watch?v=cOUNOi297Mw&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz*/

/*checar a contagem se ja zero*/
