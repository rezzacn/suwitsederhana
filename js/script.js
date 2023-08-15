// menangkap pilihan komputer
function getPilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) {
    return 'batu';
  }
  if (comp >= 0.34 && comp < 0.67) {
    return 'gunting';
  }
  return 'kertas';
}

// menentukan rules

function getHasil(comp, player) {
  if (player == comp) {
    return 'seri';
  }
  if (player == 'batu') {
    if (comp == 'gunting') {
      return 'menang';
    } else {
      return 'kalah';
    }
  }
  if (player == 'gunting') {
    if (comp == 'batu') {
      return 'kalah';
    } else {
      return 'menang';
    }
  }
  if (player == 'kertas') {
    if (comp == 'batu') {
      return 'menang';
    } else {
      return 'kalah';
    }
  }
}

// menangkap pilihan player
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (plh) {
  plh.addEventListener('click', function () {
    const AudioClick = new Audio('sound/click.mp3');
    AudioClick.play();

    // Tambahkan delay antara audio click dan audio hasil
    setTimeout(function () {
      const pilihanKomputer = getPilihanKomputer();
      const pilihanPlayer = plh.className;
      const hasil = getHasil(pilihanKomputer, pilihanPlayer);

      const imgComp = document.querySelector('.area-komputer img');
      imgComp.setAttribute('src', `img/${pilihanKomputer}.png`);

      const imgHasil = document.querySelector('.area-hasil img');
      imgHasil.setAttribute('src', `img/${hasil}.png`);

      // Memutarkan suara sesuai hasil
      const audio = new Audio();

      if (hasil === 'menang') {
        audio.src = 'sound/win.mp3';
      } else if (hasil === 'kalah') {
        audio.src = 'sound/lose.mp3';
      } else if (hasil == 'seri') {
        audio.src = 'sound/draw.mp3';
      }
      audio.play();
    }, 1000); // Delay dalam milidetik (1000 ms = 1 detik)
  });
});
