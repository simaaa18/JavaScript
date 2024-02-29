// Meminta pengguna untuk memasukkan jari-jari lingkaran
function hitungLuas() {
    const radius = document.getElementById('radius').value;
    const luas = Math.PI * Math.pow(radius, 2);
    document.getElementById('result').innerText = `Luas lingkaran dengan jari-jari ${radius} adalah ${luas.toFixed(2)}`;
}