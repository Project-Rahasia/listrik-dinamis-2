const questions = [
  {
    question: "Benda disebut memiliki potensial tinggi jika ...",
    answers: {
      a: "Jumlah proton lebih banyak",
      b: "Jumlah elektron lebih banyak",
      c: "Jumlah neutron lebih banyak",
      d: "Jumlah proton sama dengan elektron",
    },
    correctAnswer: "a",
  },
  {
    question: "Arah arus listrik adalah ...",
    answers: {
      a: "Searah dengan arah gerakan elektron",
      b: "Dari potensial rendah ke potensial tinggi",
      c: "Dari potensial tinggi ke potensial rendah",
      d: "Berlawanan arah dengan gerakan muatan positif",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Pada sebuah rangkaian listrik, mengalir kuat arus sebesar 2A. Waktu untuk mengalirkan muatan listrik sebanyak 60 C adalah ...",
    answers: {
      a: "120 s",
      b: "62 s",
      c: "58 s",
      d: "30 s",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Sebuah lampu pijar yang hambatannya 50 ohm, dihubungkan dengan tegangan 220 volt. Lampu ini akan dialiri arus sebesar ...",
    answers: {
      a: "0,4 A",
      b: "2,2 A",
      c: "4,4 A",
      d: "10 A",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Sebuah rangkaian listrik memiliki kuat arus 400mA. Besar muatan listrik yang mengalir selama 30s adalah ...",
    answers: {
      a: "12.000 C",
      b: "120 C",
      c: "12 C",
      d: "1,2 C",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Muatan sebesar 6 coulomb dipindahkan dari titik A ke titik B dengan energi 120 joule. Beda potensial kedua titik tersebut adalah ...",
    answers: {
      a: "0,05 volt",
      b: "20 volt",
      c: "60 volt",
      d: "720 volt",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Untuk memindahkan 5 coulomb dari titik P ke Q diperlukan energi sebesar 30 Joule. Maka beda potensial antara P dan Q adalah ...",
    answers: {
      a: "150 volt",
      b: "1/6 volt",
      c: "35 volt",
      d: "6 volt",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Banyaknya energi untuk memindahkan muatan sebanyak 600 C pada beda potensial 15 V adalah ...",
    answers: {
      a: "9.000 J",
      b: "615 J",
      c: "585 J",
      d: "40 J",
    },
    correctAnswer: "a",
  },
  {
    question: "Berdasarkan hukum ohm, hambatan (R) adalah ...",
    answers: {
      a: "Hasil bagi beda potensial dengan kuat arus",
      b: "Hasil bagi kuat arus dengan beda potensial",
      c: "Hasil perkalian kuat arus dengan beda potensial",
      d: "Hasil penjumlahan beda potensial dengan kuat arus",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Ketika sebuah penghantar diberi beda potensial 12 volt pada ujung-ujungnya, ternyata kuat arus yang mengalir pada penghantar itu besarnya 2 ampere. Besar hambatan listrik penghantar tersebut adalah ...",
    answers: {
      a: "24 ohm",
      b: "14 ohm",
      c: "10 ohm",
      d: "6 ohm",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Sepotong kawat yang panjangnya p meter dengan penampang A mm2 mempunyai hambatan R ohm. Jika kawat itu dilipat sehingga panjangnya setengah kali panjang semula ($frac{1}{2}p$) dan penampang menjadi dua kali semula (2A), hambatan kawat sekarang adalah ...",
    answers: {
      a: "$\\frac{1}{4}R$ ohm",
      b: "$\\frac{1}{2}R$ ohm",
      c: "R ohm",
      d: "2R ohm",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Jumlah kuat arus yang masuk ke titik cabang sama dengan jumlah kuat arus yang keluar dari titik cabang itu. Pernyataan tersebut merupakan bunyi ...",
    answers: {
      a: "Hukum kuat arus",
      b: "Hukum I Kirchoff",
      c: "Hukum rangkaian bercabang",
      d: "Hukum II Kirchoff",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Perhatikan rangkaian berikut! <img src='./img/soallat.png' class='img-fluid d-block'> Besar hambatan pengganti dari gambar di atas adalah ...",
    answers: {
      a: "5 Ω",
      b: "10 Ω",
      c: "17 Ω",
      d: "20 Ω",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Tiga buah hambatan masing-masing $R_{1}$ = 2 ohm, $R_{2}$ = 3 ohm, dan $R_{3}$ = 6 ohm dirangkaikan seri, maka besar hambatan penggantinya adalah ...",
    answers: {
      a: "1 ohm",
      b: "4 ohm",
      c: "6 ohm",
      d: "11 ohm",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Perhatikan rangkaian berikut! <img src='./img/soallat2.png' class='img-fluid d-block'> Besar hambatan pengganti dari gambar di atas adalah ...",
    answers: {
      a: "5 Ω",
      b: "20 Ω",
      c: "55 Ω",
      d: "70 Ω",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Empat buah hambatan masing-masing besarnya 10 ohm, 15 ohm, 20 ohm, dan 30 ohm tersusun paralel. Hambatan penggantinya adalah ...",
    answers: {
      a: "85 ohm",
      b: "60 ohm",
      c: "15 ohm",
      d: "4 ohm",
    },
    correctAnswer: "d",
  },
  {
    question: "Benda yang tidak dapat menghantarkan listrik disebut ...",
    answers: {
      a: "Semiisolator",
      b: "Semikonduktor",
      c: "Isolator",
      d: "Konduktor",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Elemen Volta tidak dapat mengalirkan arus dalam waktu yang lama, sebab ...",
    answers: {
      a: "Timbul gelembung gas yang menempel pada seng",
      b: "Timbul gelembung gas yang menempel pada katoda",
      c: "Timbul gelembung gas yang menempel pada anoda",
      d: "Keping-keping seng dan tembaga yang terendam $H_{2}SO_{4}$ mudah rusak",
    },
    correctAnswer: "c",
  },
  {
    question: "Anoda pada elemen kering terbuat dari ...",
    answers: {
      a: "Tembaga",
      b: "Karbon",
      c: "Seng",
      d: "Timbal",
    },
    correctAnswer: "b",
  },
  {
    question: "Kutub positif pada aki adalah ...",
    answers: {
      a: "$PbO_{2}$ (timbal dioksida)",
      b: "Pb (timbal)",
      c: "Zn (seng)",
      d: "Cu (tembaga)",
    },
    correctAnswer: "a",
  },
];
