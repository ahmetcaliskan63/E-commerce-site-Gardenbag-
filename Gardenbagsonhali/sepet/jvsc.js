var urunFiyati = 300;

function miktarArtir() {
  var miktar = document.getElementById("miktar");
  miktar.value = parseInt(miktar.value) + 1;
  fiyatGuncelle();
}

function miktarAzalt() {
  var miktar = document.getElementById("miktar");
  if (miktar.value > 1) {
    miktar.value = parseInt(miktar.value) - 1;
    fiyatGuncelle();
  }
}

function fiyatGuncelle() {
  var miktar = document.getElementById("miktar");
  var fiyat = document.getElementById("fiyat");
  fiyat.textContent = "₺" + (urunFiyati * miktar.value).toFixed(2);
}

var urunFiyati = 300; // Ürünün birim fiyatı

function miktarArtir() {
  var miktar = document.getElementById("miktar");
  miktar.value = parseInt(miktar.value) + 1;
  fiyatGuncelle();
}

function miktarAzalt() {
  var miktar = document.getElementById("miktar");
  if (miktar.value > 1) {
    miktar.value = parseInt(miktar.value) - 1;
    fiyatGuncelle();
  }
}

function fiyatGuncelle() {
  var miktar = document.getElementById("miktar");
  var fiyat = document.getElementById("fiyat");
  var siparisTutari = document.getElementById("siparis-tutari");
  var toplamFiyat = urunFiyati * miktar.value;
  fiyat.textContent = toplamFiyat.toFixed(2) + "₺";
  siparisTutari.textContent = toplamFiyat.toFixed(2) + "₺";
}
