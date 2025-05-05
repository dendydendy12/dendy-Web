let barangList = [];
const form = document.getElementById('formbarang');
const tabel = document.getElementById('tabelbarang');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const jumlah = parseInt(document.getElementById('jumlah').value);
    const harga = parseInt(document.getElementById('harga').value);

    const total = jumlah * harga;

    const barang = { nama, jumlah, harga, total };
    barangList.push(barang);

    tampilkanBarang();
    form.reset();

});

function tampilkanBarang() {
    tabel.innerHTML = ''; // Mengosongkan tabel sebelum ditampilkan ulang
    barangList.forEach((barang, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${barang.nama}</td>
                <td>${barang.jumlah}</td>
                <td>${barang.harga}</td>
                <td>${barang.total}</td>
            </tr>
        `;
        tabel.innerHTML += row;
    });
}