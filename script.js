let tombol = document.getElementById("tombolGenerate");
let jumlahPassword = document.getElementById("jumlahPassword");
let resultPassword = document.getElementById("resultPassword");

// fungsi untuk megenerate password
let generatePassword = (long) => {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = lower.toUpperCase();
  let symbol = "!@$%&*";

  let data = lower + upper + symbol;
  let ress = "";

  for (let i = 0; i < long; i++) {
    ress += data[Math.round(Math.random() * data.length)];
  }

  if (long < 1) {
    alert("Jumlah password harus lebih dari 1");
    return (ress = "");
  } else if (long >= 1 && long <= 10) {
    alert("Ada 400rb kemungkinan untuk hacker membobolnya");
  } else if (long > 50) {
    alert("Ada 2jt kemungkinan untuk hacker membobolnya");
  } else {
    alert("Password anda tidak bisa dibobol");
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
