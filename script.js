let tombol = document.getElementById("tombolGenerate");
let jumlahPassword = document.getElementById("jumlahPassword");
let resultPassword = document.getElementById("resultPassword");

// fungsi untuk megenerate password
let generatePassword = (long) => {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = lower.toUpperCase();
  let symbol = "!@#$%^&*()_+><,.?{}[]";

  let data = lower + upper + symbol;
  let ress = "";

  for (let i = 0; i < long; i++) {
    ress += data[Math.round(Math.random() * data.length)];
  }

  if (long < 1) {
    alert("Jumlah password harus lebih dari 1");
    return (ress = "");
  }

  jumlahPassword.value = "";
  return ress;
};

tombol.addEventListener("click", (e) => {
  let ressGenerate = generatePassword(jumlahPassword.value);
  resultPassword.value = ressGenerate;
});

jumlahPassword.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    let ressGenerate = generatePassword(jumlahPassword.value);
    resultPassword.value = ressGenerate;
  }
});
