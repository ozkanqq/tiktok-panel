const PASSWORD = "1234"; // Şifreni buradan değiştir

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Yanlış şifre!");
  }
}

function addIdea() {
  const input = document.getElementById("ideaInput");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("ideaList").appendChild(li);
  input.value = "";
}

function addSchedule() {
  const input = document.getElementById("scheduleInput");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("scheduleList").appendChild(li);
  input.value = "";
}

function addStat() {
  const input = document.getElementById("statsInput");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("statList").appendChild(li);
  input.value = "";
}
