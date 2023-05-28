// Pertanyaan
const checkPertanyaan = document.getElementById("check-pertanyaan");
const responsePertanyaan = document.getElementById("response-pertanyaan");

checkPertanyaan.addEventListener("click", () => {
  const pertanyaanSatu = document.querySelector(
    "input[name=pertanyaan-satu]:checked"
  ).value;
  const pertanyaanDua = document.querySelector(
    "input[name=pertanyaan-dua]:checked"
  ).value;

  if (pertanyaanSatu == "true" && pertanyaanDua == "true") {
    responsePertanyaan.innerText = `Untuk mengetahui penjelasan lebih lanjut, silahkan simak materi berikut.`;
    responsePertanyaan.style.color = `#2fcc71`;
    responsePertanyaan.style.textAlign = `center`;
  } else {
    responsePertanyaan.innerText = `Jawaban salah! silahkan coba lagi`;
    responsePertanyaan.style.color = `#cc372f`;
    responsePertanyaan.style.textAlign = `center`;
  }
});
