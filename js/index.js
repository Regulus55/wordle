const 정답 = "APPLE";

let index = 0;
let attempts = 0;
let timer;

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료되었습니다";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:35vh; left:44.6vw; background-color:white; width:200px; height:100px; border: 1px solid black;";
    document.body.appendChild(div);
  };

  const gameover = () => {
    window.removeEventListener("keydown", handlekeydown);
    displayGameover();
    clearInterval(timer);
  };

  const handleBackspace = () => {
    if (index > 0) {
      const preBlcock = document.querySelector(
        `.board-block[data-index='${attempts}${index - 1}']`
      );
      preBlcock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };

  const nextLine = () => {
    if (attempts === 6) return gameover;
    attempts++;
    index = 0;
  };

  const handleEnterKey = () => {
    let 맞은갯수 = 0;

    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${attempts}${i}']`
      );
      const 입력글자 = block.innerText;
      const 정답글자 = 정답[i];
      if (입력글자 === 정답글자) {
        맞은갯수++;
        block.style.background = "#6aaa64";
      } else if (정답.includes(입력글자)) block.style.background = "#c9b458";
      else block.style.background = "#787c7e";
      block.style.color = "white";
    }
    if (맞은갯수 === 5) gameover();
    else nextLine();
  };

  const handlekeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );

    if (event.key === "Backspace") handleBackspace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
      //   index = index + 1;
      //   index += 1;
    }
  };

  const startTimer = () => {
    const 시작시간 = new Date();

    function setTime() {
      const 현재시간 = new Date();
      const 흐른시간 = new Date(현재시간 - 시작시간);

      const 분 = 흐른시간.getMinutes().toString().padStart(2, "0");
      const 초 = 흐른시간.getSeconds().toString().padStart(2, "0");
      const timeDiv = document.querySelector("#timer");
      timeDiv.innerText = `time : ${분}:${초}`;
    }

    timer = setInterval(setTime, 1000);
    console.log(timer);
  };

  startTimer();
  window.addEventListener("keydown", handlekeydown);
}

appStart();
