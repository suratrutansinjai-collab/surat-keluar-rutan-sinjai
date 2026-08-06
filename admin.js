// Inisialisasi Supabase (Ganti dengan URL & Anon Key milik kamu)
const SUPABASE_URL = 'https://viacnybaghhldtjynfoh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_80hCRBa5WGEfX5laMAHS6w_pepDVSV6';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let semuaDataSurat = [];

// 1. Ambil data saat halaman dibuka
async function muatDataSurat() {
  try {
    const { data, error } = await supabaseClient
      .from('surat_keluar')
      .select('*')
      .order('created_at', { ascending: false }); // Urutkan dari yang terbaru

    if (error) throw error;

    semuaDataSurat = data;
    tampilkanTabel(semuaDataSurat);

  } catch (err) {
    console.error('Gagal memuat data:', err.message);
    document.getElementById('tabelSuratBody').innerHTML = `
      <tr><td colspan="7" class="text-center text-danger py-4">Gagal memuat data dari database.</td></tr>
    `;
  }
}

// 2. Fungsi render tabel ke HTML
function tampilkanTabel(data) {
  const tbody = document.getElementById('tabelSuratBody');
  tbody.innerHTML = '';

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">Belum ada data surat tersimpan.</td></tr>`;
    return;
  }

  data.forEach((item, index) => {
    // Sesuai persis dengan struktur kolom Supabase kamu
    let nomorSurat = item.nomor_surat_lengkap || item.nomor_surat || '-';
    let namaPembuat = item.pembuat_surat || '-';
    let tujuanSurat = item.tujuan_surat || '-';
    let tanggalFormat = item.tanggal_surat || '-';

    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td> 
      <td><strong class="text-primary">${nomorSurat}</strong></td>
      <td>${namaPembuat}</td>
      <td>${tujuanSurat}</td>
      <td>${tanggalFormat}</td>
      <td><span class="badge bg-secondary">${item.kode_utama || ''}${item.sub_kode ? '.' + item.sub_kode.split(" ")[0] : ''}</span></td>
      <td class="text-center">
        <button class="btn btn-sm btn-outline-success me-1" onclick="salinNomor('${nomorSurat}')" title="Salin Nomor">
          <i class="fa-regular fa-copy"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger" onclick="hapusSurat('${item.id}')" title="Hapus Data">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 3. Fitur Pencarian Real-time
document.getElementById('searchInput').addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  const hasilFilter = semuaDataSurat.filter(item => {
    return (
      (item.nomor_surat && item.nomor_surat.toLowerCase().includes(keyword)) ||
      (item.nama_pembuat && item.nama_pembuat.toLowerCase().includes(keyword)) ||
      (item.tujuan_surat && item.tujuan_surat.toLowerCase().includes(keyword))
    );
  });
  tampilkanTabel(hasilFilter);
});

// 4. Fitur Hapus Data Berdasarkan ID baris
async function hapusSurat(id) {
  if (confirm("Apakah Anda yakin ingin menghapus data surat ini dari database?")) {
    try {
      const { error } = await supabaseClient
        .from('surat_keluar')
        .delete()
        .eq('id', id);

      if (error) throw error;

      alert("Data berhasil dihapus!");
      muatDataSurat(); // Refresh tabel otomatis
    } catch (err) {
      alert("Gagal menghapus data: " + err.message);
    }
  }
}

// 5. Fitur Salin Teks Nomor Surat
function salinNomor(teks) {
  navigator.clipboard.writeText(teks).then(() => {
    alert("Nomor surat berhasil disalin: " + teks);
  });
}

// Jalankan fungsi saat pertama kali halaman dibuka
muatDataSurat();