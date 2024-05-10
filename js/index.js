let index = 0;
let attempts = 0;

function appStart() {
  const handleEnterKey = () => {
    console.log("엔터키임");
  };

  const handlekeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );
    if (event.key === "Enter") {
      handleEnterKey();
    } else if (index === 5) return;
    else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
      //   index = index + 1;
      //   index += 1;
    }
  };

  window.addEventListener("keydown", handlekeydown);
}

appStart();
