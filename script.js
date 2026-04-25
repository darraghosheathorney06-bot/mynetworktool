function calculate() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);

  let result = a + b;

  document.getElementById("result").textContent = "Result: " + result;
}
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('ip').textContent = data.ip;
  });
  function copyIP() {
  let ip = document.getElementById("ip").textContent;
  navigator.clipboard.writeText(ip);
  let msg = document.getElementById("copyMessage");
msg.textContent = "Copied!";

setTimeout(() => {
  msg.textContent = "";
}, 1500);
}
function generatePassword() {
  let length = document.getElementById("length").value
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  
  let password = ""

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)]
  }

  document.getElementById("passwordResult").textContent = password
}