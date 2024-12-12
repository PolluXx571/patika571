// Sayı olup olmadığını kontrol eden yardımcı fonksiyon
function isNumber(value) {
  if (isNaN(value) || typeof value !== "number") {
    console.log("Hata: Geçerli bir sayı girin!");
  } else {
    console.log("Geçerli bir sayı: ", value);
  }
}

// Ekleme işlemi
function add(a, b) {
  if (isNaN(a) || typeof a !== "number" || isNaN(b) || typeof b !== "number") {
    console.log("Hata: Lütfen geçerli sayılar girin!");
  } else {
    console.log("Ekleme sonucu: ", a + b);
  }
}

// Çıkarma işlemi
function subtract(a, b) {
  if (isNaN(a) || typeof a !== "number" || isNaN(b) || typeof b !== "number") {
    console.log("Hata: Lütfen geçerli sayılar girin!");
  } else {
    console.log("Çıkarma sonucu: ", a - b);
  }
}

// Çarpma işlemi
function multiply(a, b) {
  if (isNaN(a) || typeof a !== "number" || isNaN(b) || typeof b !== "number") {
    console.log("Hata: Lütfen geçerli sayılar girin!");
  } else {
    console.log("Çarpma sonucu: ", a * b);
  }
}

// Bölme işlemi
function divide(a, b) {
  if (isNaN(a) || typeof a !== "number" || isNaN(b) || typeof b !== "number") {
    console.log("Hata: Lütfen geçerli sayılar girin!");
  } else if (b === 0) {
    console.log("Bölme hatası: 0'a bölme yapılamaz!");
  } else {
    console.log("Bölme sonucu: ", a / b);
  }
}

console.log("Ekleme: ");
add(num1, num2);
console.log("Çıkarma: ");
subtract(num1, num2);
console.log("Çarpma: ");
multiply(num1, num2);
console.log("Bölme: ");
divide(num1, num2);
