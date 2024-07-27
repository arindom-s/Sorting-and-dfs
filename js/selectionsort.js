async function SelectionSort(l, r, delay) {
  let blocks = document.querySelectorAll(".block");
  // Assign 0 to max_idx
  const max_idx = l;
  document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;
  for (const i = 14; i > 0 ; i--) {
    // Assign i to max_idx
    max_idx = i;

    // Provide color to the ith bar
    blocks[i].style.backgroundColor = "red";
    for (const j = 0 ; j <= i; j ++) {
      // Provide color to the jth bar
      blocks[j].style.backgroundColor = "yellow";

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      // To store the integer value of jth bar to var1
      const val1 = parseInt(blocks[j].childNodes[0].innerHTML);

      // To store the integer value of (max_idx)th bar to var2
      const val2 = parseInt(blocks[max_idx].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 > val2) {
        if (max_idx !== i) {
          // Provide  color to the (max_idx)th bar
          blocks[max_idx].style.backgroundColor = " pink";
        }
        max_idx = j;
      } else {
        // Provide  color to the jth bar
        blocks[j].style.backgroundColor = " pink";
      }
      document.getElementsByClassName("range")[0].innerText = `[${max_idx},${i}]`;
      await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    }

    // To swap ith and (max_idx)th bar
    const temp1 = blocks[max_idx].style.height;
    const temp2 = blocks[max_idx].childNodes[0].innerText;
    blocks[max_idx].style.height = blocks[i].style.height;
    blocks[i].style.height = temp1;
    blocks[max_idx].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
    blocks[i].childNodes[0].innerText = temp2;

    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    // Provide color to the (min-idx)th bar
    blocks[max_idx].style.backgroundColor = "pink";

    // Provide color to the ith bar
    blocks[i].style.backgroundColor = "green";
  }
  blocks[i].style.backgroundColor = "green";
}

let selectionSortButton = document.getElementById("selectionSortButton");
selectionSortButton.addEventListener("mousedown", () => {
  let promise = SelectionSort(0, 14, delay);
  disableButtons();
  promise.then(function () {
    sorted = true;
    enableButtons();
  });
});