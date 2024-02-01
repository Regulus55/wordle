const 시작시간 = new Date();

function setTime() {
  const 현재시간 = new Date();
  const 흐른시간 = new Date(현재시간 - 시작시간);

  const 분 = 흐른시간.getMinutes().toString().padStart(2, "0");
  const 초 = 흐른시간.getSeconds().toString().padStart(2, "0");
  const timeH1 = document.querySelector(".timer");
  timeH1.innerText = `${분}:${초}`;
}

setInterval(setTime, 1000);
