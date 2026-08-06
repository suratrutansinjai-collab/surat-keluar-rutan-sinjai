const scriptURL = 'https://script.google.com/macros/s/AKfycbwQ01uS8t9sTg18NItTvz61FdeQGTHcjRQhoVsCtU2LsDHNaA9DGWZSa57DAIYZeAFP/exec'

const daftarSubKode = {
    PR: [
        "01.01 Rencana pembangunan jangka panjang",
        "01.02 Rencana pembangunan jangka menengah",
        "01.03 Rencana strategis kementerian",
        "01.04 Rencana strategis satuan kerja",
        "01.05 Pertemuan Tiga Pihak (Trilateral Meeting)",
        "01.06 Rencana kerja",
        "01.07 Rencana kerja dan anggaran",
        "02.01 Evaluasi dan Kinerja Kementerian",
        "02.02 Evaluasi dan Kinerja Satuan Kerja",
        "03 Laporan Akuntabilitas Kinerja Instansi Pemerintah",
        "04.01 Laporan Tetap Periodik",
        "04.02 Laporan Tahunan",
        "04.03 Laporan Insidentil",
        "05.01 Rapat Kerja dengan Dewan Perwakilan Rakyat",
        "05.02 Rapat Kerja Tingkat Kementerian",
        "05.03 Rapat Kerja Unit Utama atau Rapat Kerja Teknis",
        "05.04 Rapat Kerja Tingkat Kantor Wilayah",
        "05.05 Rapat Pimpinan",
        "05.06 Rapat staf",
        "06.01 Sidang Kabinet terbatas",
        "06.02 Sidang Kabinet Paripurna",
        "07.01 Perjanjian Kinerja Jabatan Pimpinan Tinggi Utama dan Madya",
        "07.02 Perjanjian Kinerja Jabatan Pimpinan Tinggi Pratama ke Bawah"
    ],

    KU: [
        "01.01 Pedoman, Petunjuk, dan Administrasi Pelaksanaan Anggaran",
        "01.02 Daftar Isian Pelaksanaan Anggaran",
        "01.03 Penerimaan Negara Bukan Pajak",
        "02.01 Pedoman dan Petunjuk Administrasi Keuangan",
        "02.02 Penatausahaan Hibah",
        "02.03 Pejabat Perbendaharaan Negara",
        "02.04 Penyelesaian Kerugian Negara",
        "02.05 Penatausahaan Rekening Pemerintah",
        "03.01 Pertanggungjawaban Belanja",
        "03.02 Buku Kas Umum dan Buku Pembantu",
        "03.03 Laporan Pertanggungjawaban Bendahara Pengeluaran",
        "03.04 Laporan Pertanggungjawaban Bendahara Penerimaan",
        "03.05 Penerimaan Negara Pajak",
        "04.01 Laporan Keuangan",
        "04.02 Rekonsiliasi dan Data Laporan Keuangan",
        "04.03 Penyelesaian Tindak Lanjut Temuan Hasil Pemeriksaan Badan Pemeriksa Keuangan Republik Indonesia dan Inspektorat Jenderal"
    ],

    OT: [
        "01.01 Organisasi dan Tata Kerja Kementerian",
        "01.02 Organisasi dan Tata Kerja Kantor Wilayah",
        "01.03 Organisasi dan Tata Kerja Unit Pelaksana Teknis",
        "01.04 Evaluasi Kelembagaan",
        "02.01 Standarisasi Sarana Kerja",
        "02.02 Sistem, Prosedur, dan Metode Kerja",
        "02.03 Analisa dan Uraian Jabatan",
        "03.01 Penilaian Mandiri Pelaksanaan Reformasi Birokrasi",
        "03.02 Zona Integritas",
        "03.03 Evaluasi Reformasi Birokrasi",
        "04 Instruksi Menteri"
    ],

    SA: [
        "01.01 Inventarisasi Jabatan/Peta Jabatan",
        "01.02 Evaluasi Jabatan",
        "01.03 Usulan Formasi",
        "01.04 Alokasi Formasi",
        "02.01 Proses Penerimaan Sumber Daya Manusia Aparatur",
        "02.02 Berkas Lamaran yang Tidak Diterima",
        "02.03 Surat Keputusan Calon Aparatur Sipil Negara/Aparatur Sipil Negara Kolektif",
        "02.04 Penerimaan Sumber Daya Manusia Aparatur Dari Sekolah Kedinasan Imigrasi dan Pemasyarakatan",
        "02.05 Ujian Dinas dan Ujian Penyesuaian Ijazah",
        "03.01 Pengangkatan Calon Aparatur Sipil Negara",
        "03.02 Pengangkatan Aparatur Sipil Negara",
        "03.03 Pengangkatan Jabatan Struktural",
        "03.04 Pengangkatan Jabatan Fungsional",
        "04.01 Alih Tugas/Dipertanyakan/Dipekerjakan/Pelaksana",
        "04.02 Pelaksana Harian/Pelaksana Tugas",
        "04.03 Pencantuman Gelar Akademik",
        "04.04 Kenaikan Gaji Berkala",
        "04.05 Kenaikan Pangkat/Golongan",
        "04.06 Peninjauan Masa Kerja",
        "04.07 Tim Penilai Kinerja",
        "04.08 Pengaktifan Kembali dari Cuti Di Luar Tanggungan Negara dan Pengaktifan Setelah Pemberhentian Sementara",
        "05.01 Penilaian Prestasi Kerja Pegawai",
        "05.02 Pembinaan Disiplin dan Kode Etik",
        "05.03 Pemberian Penghargaan dan Tanda Jasa",
        "06.01 Pengembangan Kompetensi Jabatan Pimpinan Tinggi dan Administrasi",
        "06.02 Pengembangan Kompetensi Fungsional",
        "06.03 Pengiriman Peserta Diklat",
        "06.04 Beasiswa Pegawai",
        "07.01 Hukuman Disiplin Tingkat Ringan",
        "07.02 Hukuman Disiplin Tingkat Sedang",
        "07.03 Hukuman Disiplin Tingkat Berat",
        "08.01 Data Sumber Daya Manusia Aparatur",
        "08.02 Identitas Pegawai",
        "08.03 Izin Kepegawaian",
        "08.04 Keanggotaan Sumber Daya Manusia Aparatur dalam Organisasi Sosial",
        "08.05 Daftar Hadir/Absensi Sumber Daya Manusia Aparatur",
        "09.01 Kesehatan",
        "09.02 Tabungan Perumahan",
        "09.03 Tabungan dan Asuransi Pegawai Negeri",
        "09.04 Cuti",
        "09.05 Uang Duka Tewas",
        "09.06 Pembekalan Purnabakti",
        "09.07 Mutasi Keluarga",
        "09.08 Laporan Kekayaan",
        "10.01 Jabatan Pelaksana",
        "10.02 Jabatan Fungsional",
        "11.01 Pemberhentian atas Permintaan Sendiri",
        "11.02 Pemberhentian karena Batas Usia pensiun",
        "11.03 Pemberhentian Karena Keuzuran/Kondisi Jasmani Dan Rohani/Meninggal Dunia (tewas)",
        "11.04 Pemberhentian karena Hilang",
        "11.05 Pemberhentian Sementara",
        "11.06 Pensiun Janda/Duda dan Anak",
        "12 Berkas Perseorangan Pegawai Negeri Sipil",
        "13 Berkas Perseorangan Pegawai Pemerintah Dengan Perjanjian Kerja",
        "14 Berkas Perseorangan Menteri, Wakil Menteri Dan Pejabat Negara Lainnya",
        "15 Berkas Perseorangan Pimpinan Tinggi Madya",
        "16 Berkas Perseorangan Aparatur Sipil Negara yang Secara Individual Ditentukan oleh Menteri Berjasa atau Terlibat Peristiwa Berskala Nasional",
        "17.01 Korps Pegawai Republik Indonesia",
        "17.02 Dharma Wanita",
        "17.03 Koperasi"
    ],

    PB: [
        "01.01 Usulan Rencana Kebutuhan Barang Milik Negara",
        "01.02 Rencana Kebutuhan Barang Milik Negara Kementerian",
        "01.03 Hasil Analisis Kebutuhan Barang Milik Negara",
        "01.04 Rencana Kebutuhan Aset Berwujud",
        "01.05 Rencana Kebutuhan Aset Tak Berwujud",
        "02.01 Pengadaan Barang Persediaan (habis pakai)",
        "02.02 Pengadaan Barang bukan Persediaan",
        "02.03 Pengadaan Jasa Lainnya",
        "02.04 Pengadaan Jasa Konsultasi",
        "02.05 Pengadaan Teknis Aset Tetap (tanah)",
        "02.06 Pengadaan Aset Tidak Berwujud (perangkat lunak)",
        "02.07 Pengadaan Sewa",
        "02.08 Pengadaan Modal Peralatan dan Mesin",
        "02.09 Pekerjaan Konstruksi (bangunan)",
        "02.10 Pengelolaan Layanan Pengadaan secara Elektronik dan Data Informasi Pengadaan Barang/Jasa",
        "02.11 Pembinaan, Bimbingan, Pendampingan, Dan Konsultasi Teknis Pengadaan Barang/Jasa",
        "02.12 Tindak Lanjut Hasil Pemeriksaan",
        "02.13 Laporan Pengadaan Barang/Jasa",
        "02.14 Telaahan Permasalahan Pengadaan Barang/Jasa",
        "02.15 Unit Kerja Pengadaan Barang dan Jasa Sekretariat Unit Kerja Pengadaan Barang dan Jasa Satuan Pelaksana Unit Kerja Pengadaan Barang dan Jasa Wilayah",
        "02.16 Pendistribusian Barang Milik Negara",
        "03.01 Penggunaan Barang Milik Negara",
        "03.02 Barang Milik Negara Bernilai Sejarah",
        "03.03 Pemanfaatan barang milik negara",
        "03.04 Permasalahan Barang Milik Negara dan Berkas Pengamanan dan Pemeliharaan",
        "03.05 Rumah Negara",
        "04.01 Pencatatan Barang Milik Negara",
        "04.02 Inventarisasi",
        "04.03 Opname Fisik",
        "04.04 Rekonsiliasi Data Barang Milik Negara",
        "04.05 Pengawasan dan Pengendalian Barang Milik Negara",
        "04.06 Laporan Barang Milik Negara",
        "05.01 Penjualan",
        "05.02 Tukar Menukar",
        "05.03 Hibah",
        "05.04 Pemusnahan dan Penghapusan Barang Milik Negara Tidak Bernilai Sejarah",
        "05.05 Pemusnahan dan Penghapusan Barang Milik Negara Bernilai Sejarah"
    ],

    KS: [
        "01.01 Penyusunan Rancangan Kerja Sama/Hubungan Lembaga Tinggi Negara",
        "01.02 Lembaga Pemerintah",
        "01.03 Organisasi Kemasyarakatan/Lembaga Swasta",
        "01.04 Perguruan Tinggi/Sekolah",
        "02 Nota Kesepahaman/Nota Kesepakatan/Memorandum Of Understanding/Kontrak/Perjanjian Kerja Sama Dalam Negeri dan Luar Negeri",
        "03 Permintaan dan Pengelolaan Data Kerja Sama",
        "04 Audiensi/Kunjungan",
        "05 Pemantauan dan Evaluasi",
        "06 Administrasi Kerja Sama"
    ],

    HK: [
        "01.01 Penyusunan Rencana Pembentukan Peraturan Perundang-undangan",
        "01.02 Instrumen Hukum yang Bersifat Nasional",
        "01.03 Instrumen Hukum yang Bersifat Internal",
        "02.01 Advokasi Hukum Litigasi",
        "02.02 Advokasi Hukum Nonlitigasi",
        "02.03 Pengaduan Hukum",
        "02.04 Bantuan Hukum",
        "02.05 Layanan Aspirasi dan Pengaduan Online Rakyat",
        "02.06 Sistem Informasi Pelayanan Publik",
        "02.07 Telaah Hukum",
        "03 Sosialisasi/Penyuluhan dan Pembinaan Hukum"
    ],

    UM: [
        "01.01 Penciptaan Arsip",
        "01.02 Layanan Penggunaan Arsip",
        "01.03 Pemberkasan Arsip",
        "01.04 Penataan Arsip",
        "01.05 Pemeliharaan dan Perawatan Arsip Inaktif",
        "01.06 Alih Media Arsip",
        "01.07 Program Arsip Vital dan Terjaga",
        "01.08 Unggah Informasi Kearsipan pada Sistem Informasi Kearsipan Nasional",
        "01.09 Pemindahan Arsip",
        "01.10 Pemusnahan Arsip",
        "01.11 Penyerahan Arsip",
        "01.12 Pembinaan Kearsipan",
        "01.13 Pengawasan Kearsipan",
        "01.14 Monitoring dan Evaluasi",
        "02.01 Administrasi Penggunaan Ruang dan Peralatan Kantor",
        "02.02 Administrasi Peminjaman, Penggunaan, dan Penghunian Rumah Negara",
        "02.03 Administrasi Peminjaman, Penggunaan, dan Pemeliharaan Kendaraan Dinas",
        "02.04 Administrasi Peminjaman, Penggunaan dan Pemeliharaan Barang Elektronik serta Mesin",
        "02.05 Administrasi Pemeliharaan Gedung dan Bangunan serta Area Kantor",
        "02.06 Administrasi Pemeliharaan Alat Kesehatan",
        "02.07 Administrasi Perjalanan Dinas",
        "02.08 Administrasi Penghematan Energi dan Air",
        "03.01 Penyelenggaraan Upacara Nasional",
        "03.02 Pelayanan Tamu, Acara Kedinasan, Jamuan, dan Ramah Tamah",
        "03.03 Daftar Nama Pejabat dan Alamat",
        "04.01 Pengamanan Personil",
        "04.02 Pengamanan Lingkungan, Fisik, dan Instalasi",
        "04.03 Pengamanan Dokumen dan Informasi Rahasia",
        "04.04 Laporan Keamanan",
        "04.05 Laporan Kejadian",
        "04.06 Permintaan dan Bantuan Pengamanan",
        "05.01 Layanan Keagamaan",
        "05.02 Layanan Kesehatan Jasmani",
        "05.03 Pelayanan Kesehatan",
        "06.01 Akuisisi",
        "06.02 Pengolahan Bahan Pustaka",
        "06.03 Pangkalan Data Koleksi Perpustakaan",
        "06.04 Layanan Perpustakaan",
        "06.05 Preservasi Bahan Pustaka",
        "06.06 Pengembangan Perpustakaan",
        "06.07 Pendidikan dan Pelatihan Perpustakaan",
        "06.08 Tenaga Perpustakaan"
    ],

    PW: [
        "01.01 Kebijakan Pengawasan",
        "01.02 Program Kerja Pengawasan Tahunan",
        "01.03 Program Kerja Administrasi Umum",
        "01.04 Rapat Koordinasi Pengawasan",
        "01.05 Ikhtisar Hasil Pengawasan",
        "02.01 Audit Kinerja dan Informasi, Reviu, dan Evaluasi",
        "02.02 Audit Tujuan Tertentu/Khusus",
        "02.03 Pemantauan/Monitoring",
        "02.04 Pengawasan Lainnya, Pendampingan, Sosialisasi, dan Perjanjian Kerja Sama",
        "03.01 Laporan Hasil Audit Kinerja, Informasi Data Pendukung Pemeriksaan Dalam Negeri dan Luar Negeri",
        "03.02 Laporan Hasil Audit Tujuan Tertentu (audit khusus)",
        "03.03 Pelaporan Pemantauan/Monitoring Badan Pemeriksaan Keuangan Republik Indonesia, Badan Pengawasan Keuangan dan Pembangunan Republik Indonesia, Ombudsman Republik Indonesia, dan Inspektorat Jenderal",
        "03.04 Pelaporan Pengawasan Lainnya, Pendampingan, Sosialisasi, dan Perjanjian Kerja Sama",
        "03.05 Pelaporan Inspektorat Jenderal",
        "04.01 Tindak Lanjut Hasil Audit Kinerja",
        "04.02 Tindak Lanjut Hasil Audit Khusus",
        "04.03 Tindak Lanjut Badan Pengawasan Keuangan dan Pembangunan Republik Indonesia, Badan Pemeriksa Keuangan Republik Indonesia, dan Inspektorat Jenderal",
        "05 Reviu",
        "06.01 Whistle Blowing System",
        "06.02 Gratifikasi",
        "06.03 Pengaduan Tertulis (sms gateway, po box, dan surat elektronik)",
        "06.04 Pengaduan melalui Aplikasi dan Layanan Aspirasi dan Pengaduan Online Rakyat",
        "06.05 Pengaduan Ombudsman",
        "07.01 Tanggapan/Telaahan Hukuman Disiplin yang Tidak Ditindaklanjuti",
        "07.02 Tanggapan/Telaahan Hukuman Disiplin yang Ditindaklanjuti",
        "07.03 Daftar Nama Pegawai Kementerian yang Dikenakan Sanksi Hukuman Disiplin/Kartu Cela"
    ],

    TI: [
        "01.01 Rencana Induk Teknologi Informasi",
        "01.02 Penyusunan Program",
        "01.03 Pengembangan Aplikasi",
        "01.04 Pengembangan Database, Situs Internet, dan Surat Elektronik",
        "02.01 Kuesioner, Data Pendukung, dan Analisis",
        "03 Pengamanan Jaringan",
        "04.01 Pedoman Standarisasi Teknologi dan Informasi",
        "04.02 Implementasi Aplikasi",
        "04.03 Implementasi Situs Internet, Portal Internet, dan Surat Elektronik",
        "04.04 Uji Coba Infrastruktur",
        "05.01 Pengelolaan Jaringan",
        "05.02 Pengelolaan Jaringan Sistem Informasi",
        "05.03 Pengelolaan Database",
        "05.04 Pengelolaan Situs Internet, Portal Internet, dan Surat Elektronik",
        "05.05 Pengelolaan Aplikasi",
        "05.06 Pengelolaan Alat Pendukung",
        "06.01 Naskah Layanan Keluhan Layanan Pengadaan secara Elektronik",
        "06.02 Tindak Lanjut Keluhan",
        "06.03 Monitoring/Pemantauan Layanan Keluhan Tentang Perangkat Lunak/Perangkat Keras",
        "06.04 Evaluasi Teknologi Informasi",
        "07.01 Media Massa (cetak, elektronik, dan media sosial)",
        "07.02 Sosialisasi dan Diseminasi",
        "07.03 Pengelolaan Pejabat Pengelola Informasi dan Dokumentasi",
        "07.04 Badan Koordinasi Hubungan Masyarakat",
        "07.05 Peliputan",
        "07.06 Konferensi Pers",
        "07.07 Siaran Pers",
        "08.01 Dokumentasi/Liputan Kegiatan Kedinasan Menteri/wakil Menteri dalam Berbagai Media",
        "08.02 Dokumentasi/Liputan Kegiatan Kedinasan Pejabat Tinggi Madya ke bawah dalam Berbagai Media",
        "08.03 Rekapitulasi Pemberitaan"
    ],

    PK: [
        "01 Perumusan Kebijakan dan Standardisasi Pemasyarakatan",
        "02.01 Registrasi Tahanan dan Anak",
        "02.02 Registrasi Narapidana dan Anak Binaan",
        "02.03 Registrasi Klien Pemasyarakatan",
        "02.04 Registrasi Titipan",
        "02.05 Administrasi Pelayanan Tahanan di luar Rumah Tahanan",
        "02.06 Peminjaman/Bon Narapidana dan Anak Binaan",
        "03.01 Admisi Orientasi",
        "03.02 Asesmen dan Klasifikasi",
        "04.01 Mutasi Tahanan dan Anak",
        "04.02 Mutasi Narapidana dan Anak Binaan",
        "04.03 Mutasi Klien Pemasyarakatan",
        "05.01 Layanan Kepribadian",
        "05.02 Layanan Kemandirian",
        "05.03 Layanan Perlindungan Hukum Tahanan dan Anak",
        "05.04 Pengeluaran Tahanan dan Anak",
        "05.05 Pertimbangan Pemasyarakatan Pelayanan Tahanan dan Anak",
        "06.01 Pembinaan Kepribadian",
        "06.02 Pembinaan Kemandirian",
        "06.03 Asimilasi dan Integrasi Narapidana dan Anak Binaan",
        "06.04 Pengeluaran Narapidana dan Anak Binaan",
        "06.05 Pertimbangan Pemasyarakatan Pembinaan Narapidana dan Anak Binaan",
        "07.01 Penelitian Kemasyarakatan",
        "07.02 Pendampingan Klien Pemasyarakatan dan Upaya Keadilan Restoratif Pemasyarakatan",
        "07.03 Pembimbingan Klien Pemasyarakatan",
        "07.04 Pengawasan Klien Pemasyarakatan",
        "07.05 Pertimbangan Pemasyarakatan Pembimbingan Klien Pemasyarakatan",
        "08.01 Perawatan Kesehatan Dasar",
        "08.02 Perawatan Kesehatan Lanjutan",
        "08.03 Perawatan Kesehatan Khusus",
        "08.04 Kebutuhan Dasar dan Kesehatan Lingkungan",
        "09.01 Intelijen Pemasyarakatan",
        "09.02 Pencegahan Gangguan Keamanan dan Pemeliharaan Keamanan",
        "09.03 Penindakan dan Pemulihan",
        "10.01 Pencegahan dan Pengendalian",
        "10.02 Fasilitasi Advokasi dan Investigasi Internal",
        "11.01 Pengelolaan Data Dan Informasi",
        "11.02 Pengelolaan Data dan Informasi Narapidana Tindak Pidana yang Mengancam Keamanan Negara, Tahanan Politik, Perdagangan Manusia, Terorisme, Korupsi, Tindak Pidana Kejahatan Hak Asasi Manusia Berat, dan Tindak Pidana dengan Putusan Hukuman Mati"
    ],

    GR: [
        "01 Perumusan Kebijakan dan Standardisasi Keimigrasian",
        "02.01 Dokumen Perjalanan Republik Indonesia",
        "02.02 Rekaman Kegiatan atau Peristiwa Masa Berlaku, Gagal Cetak, dan Tidak Diambil",
        "02.03 Surat Perjalanan Laksana Paspor Warga Negara Astring",
        "02.04 Fasilitas Keimigrasian antara lain Asia Pacific Economic Cooperation Business Travel Card Dan Smart Card",
        "02.05 Persetujuan Visa",
        "02.06 Bebas Visa Kunjungan",
        "02.07 Rekomendasi untuk Mendapatkan Work and Holiday Visa",
        "02.08 Pengelolaan Dokumen Blangko Dokumen Perjalanan Republik Indonesia, Visa, dan Permohonan Dokumen Perjalanan Republik Indonesia",
        "03.01 Izin Tinggal Kunjungan",
        "03.02 Izin Tinggal Terbatas",
        "03.03 Izin Tinggal Tetap",
        "03.04 Izin Tinggal Peralihan",
        "03.05 Alih Status (konversi) Izin Tinggal termasuk Penolakannya",
        "03.06 Pengajuan Permohonan Keterangan Keimigrasian: Surat Keterangan Keimigrasian (SKIM)",
        "03.07 Pengambilan Data Biometrik",
        "03.08 Penelaahan Status Keimigrasian",
        "03.09 Pengelolaan Dokumen Izin Tinggal Keimigrasian",
        "03.10 Golden Visa",
        "03.11 Diaspora",
        "03.12 Permohonan Exit Permit Only",
        "03.13 Permohonan Izin Masuk Kembali",
        "03.14 Anak Berkewarganegaraan Ganda",
        "04.01 Penyelidikan",
        "04.02 Penyidikan Keimigrasian",
        "04.03 Pencegahan",
        "04.04 Pencegahan Seseorang yang Memiliki Kasus Berdampak Nasional dan Internasional (tokoh dan kasus)",
        "04.05 Penangkalan",
        "04.06 Penangkalan Seseorang yang Memiliki Kasus Berdampak Nasional dan Internasional",
        "04.07 Imigran Ilegal",
        "04.08 Pencabutan, Pembatalan, Penahanan Dokumen Perjalanan, dan Dokumen Keimigrasian termasuk Siar Paspor Yang Dibatalkan",
        "04.09 Pengawasan terhadap Warga Negara Indonesia",
        "04.10 Pengawasan terhadap Warga Negara Asing",
        "04.11 Penanganan terhadap Pengungsi dari Luar Negeri",
        "04.12 Tindakan Administratif Keimigrasian",
        "04.13 Daftar Pencarian Orang",
        "04.14 Administrasi Pedetensian",
        "05.01 Penyelidikan dan Operasi Intelijen Keimigrasian",
        "05.02 Pengamanan Keimigrasian",
        "05.03 Laporan Hasil Kerja Sama Intelijen Keimigrasian",
        "05.04 Produk Intelijen Keimigrasian",
        "06.01 Kerja Sama Antar Lembaga (dalam negeri)",
        "06.02 Kerja Sama Antar Negara",
        "06.03 Kerja Sama dengan Organisasi Internasional",
        "06.04 Pembinaan Perwakilan Republik Indonesia di Luar Negeri",
        "07.01 Lintas Informasi Internal termasuk Tukar Menukar Informasi dan Pelaporan Kegiatan Keimigrasian",
        "07.02 Lintas Informasi Eksternal termasuk Pertukaran Informasi dengan Institusi Di Luar Imigrasi",
        "07.03 Data Keimigrasian",
        "07.04 Permohonan Data Keimigrasian",
        "07.05 Data Permohonan Ditolak Sistem",
        "08.01 Pencegahan",
        "08.02 Pengendalian",
        "08.03 Advokasi",
        "08.04 Investigasi",
        "08.05 Tindak Lanjut Atas Pemeriksaan Inspektorat Jenderal",
        "08.06 Monitoring Dan Evaluasi",
        "09.01 Produk Tempat Pemeriksa Keimigrasian",
        "09.02 Monitoring dan Supervisi Tempat Pemeriksaan Keimigrasian",
        "09.03 Pembinaan Tempat Pemeriksaan Imigrasi",
        "09.04 Pengelolaan Tempat Pemeriksaan Imigrasi",
        "09.05 Pemeriksaan Imigrasi Laut",
        "09.06 Pemeriksaan Imigrasi Udara",
        "09.07 Pemeriksaan Imigrasi Darat",
        "09.08 Tanda Masuk dan Tanda Keluar"
    ],

    SM: [
        "01.01 Standar Kompetensi",
        "01.02 Program Pelatihan",
        "02.01 Perencanaan Program Pengembangan Kompetensi",
        "02.02 Penyelenggaraan Program Pengembangan Kompetensi (pendidikan dan pelatihan, bimbingan teknis)",
        "02.03 Evaluasi dan Pelaporan Program Pengembangan Kompetensi",
        "02.04 Penjaminan Mutu Program Pengembangan Kompetensi (akreditasi, sertifikasi)",
        "02.05 Pangkalan Data Peserta Pengembangan Kompetensi",
        "03.01 Perencanaan Program Penilaian Kompetensi",
        "03.02 Pelaksanaan Program Penilaian Kompetensi",
        "03.03 Evaluasi dan Pelaporan Program Penilaian Kompetensi",
        "03.04 Penjaminan Mutu Program Penilaian Kompetensi",
        "03.05 Pangkalan Data Penilaian Kompetensi"
    ],

    PS: [
        "01.01 Agenda Setting",
        "01.02 Formulasi Kebijakan",
        "01.03 Implementasi Kebijakan",
        "01.04 Evaluasi Kebijakan",
        "02.01 Penggalian Data Survei",
        "02.02 Pelaporan dan Evaluasi"
    ]
    };

    // 2. Fungsi untuk memperbarui isi dropdown kedua
    const KODE_INSTANSI = "WP.23.PAS.22";
let nomorUrutPerKode = {
  PK: 1, // Nomor urut awal Pemasyarakatan
  KU: 1, // Nomor urut awal Keuangan
  TI: 1, // Nomor urut awal Teknologi Informasi
  HK: 1, // Nomor urut awal Hukum
  KS: 1, // Nomor urut awal Kerja Sama
  UM: 1, // Nomor urut awal Umum
  SA: 1, // Nomor urut awal SDM Aparatur
  PB: 1, // Nomor urut awal Pengelolaan BMN
  OT: 1, // Nomor urut awal Organisasi & Tatalaksana
  PR: 1, // Nomor urut awal Perencanaan
  GR: 1, // Nomor urut awal Keimigrasian
  SM: 1, // Nomor urut awal Sumber Daya Manusia Imigrasi dan Pemasyarakatan
  PS: 1, // Nomor urut awal Pusat Strategi Kebijakan (PS)
  PW: 1  // Nomor urut awal Pengawasan
};

// 1. Fungsi saat Kode Utama diganti
function updateSubKode() {
  const kodeUtamaSelect = document.getElementById("kodeUtama");
  const subKodeSelect = document.getElementById("subKode");
  const selectedKode = kodeUtamaSelect.value;

  subKodeSelect.innerHTML = "";

  if (selectedKode && daftarSubKode[selectedKode]) {
    subKodeSelect.disabled = false;

    const defaultOption = document.createElement("option");
    defaultOption.text = "-- Pilih Sub-Kode --";
    defaultOption.value = "";
    subKodeSelect.add(defaultOption);

    daftarSubKode[selectedKode].forEach(function(item) {
      const option = document.createElement("option");
      option.value = item;
      option.text = item;
      subKodeSelect.add(option);
    });
  } else {
    subKodeSelect.disabled = true;
    const defaultOption = document.createElement("option");
    defaultOption.text = "-- Pilih Kode Utama Terlebih Dahulu --";
    defaultOption.value = "";
    subKodeSelect.add(defaultOption);
  }

  // TAMBAHKAN BARIS INI agar nomor otomatis ter-generate/update saat Kode Utama berubah
  generateNomorSurat(); 
}

// 2. Fungsi saat Sub-Kode atau Jenis Surat dipilih (Generate Nomor Otomatis)
// 2. Fungsi saat Sub-Kode atau Jenis Surat dipilih (Generate Nomor Otomatis)
function generateNomorSurat() {
  const kodeUtama = document.getElementById("kodeUtama").value;
  const subKodeValue = document.getElementById("subKode").value;
  const jenisSurat = document.getElementById("jenisSurat").value;
  const nomorBox = document.getElementById("nomorSuratBox");
  const nomorInput = document.getElementById("nomorSuratInput");

  // Jika Kode Utama sudah dipilih
  if (kodeUtama) {
    // Ambil angka sub-kode jika ada (contoh "03.01 Penelitian..." diambil "03.01")
    const angkaSubKode = subKodeValue ? subKodeValue.split(" ")[0] : "";
    
    // Buat Kunci Kombinasi (contoh: "PK.03.01" atau "PK" jika subkode belum dipilih)
    const kunciKombinasi = angkaSubKode ? `${kodeUtama}.${angkaSubKode}` : kodeUtama;

    // Ambil nomor urut berdasarkan kunci kombinasi (default ke 1)
    const urutSekarang = nomorUrutPerKode[kunciKombinasi] || 1;
    const nomorUrutFormat = String(urutSekarang);
    const tahunSekarang = new Date().getFullYear();

    let nomorLengkap = "";
    const subKodeTeks = angkaSubKode ? angkaSubKode : "[SubKode]";

    if (jenisSurat === "SK") {
      // Format SK: Nomor di tengah & kata "TAHUN [Tahun]" di ujung
      // Contoh: WP.23.PAS.22-1-PK.03.01 TAHUN 2026
      nomorLengkap = `${KODE_INSTANSI}-${nomorUrutFormat}-${kodeUtama}.${subKodeTeks} TAHUN ${tahunSekarang}`;
    } else {
      // Format Surat Umum: Tanpa kata tahun di ujung
      // Contoh: WP.23.PAS.22-PK.03.01-1
      nomorLengkap = `${KODE_INSTANSI}-${kodeUtama}.${subKodeTeks}-${nomorUrutFormat}`;
    }

    nomorBox.innerHTML = `
      <span style="color: #15803d; font-weight: bold;">${nomorLengkap}</span>
      <button type="button" class="btn-copy" onclick="copyNomor('${nomorLengkap}')">
        <i class="fa-regular fa-copy"></i> Salin
      </button>
    `;
    nomorBox.classList.remove("empty");
    nomorInput.value = nomorLengkap;

  } else {
    nomorBox.innerHTML = "Pilih Kode Utama Surat";
    nomorBox.classList.add("empty");
    nomorInput.value = "";
  }
}

// Mengambil nomor urut terbaru dari Google Sheets
function ambilNomorTerbaru() {
  fetch(scriptURL)
    .then(response => response.json())
    .then(data => {
      console.log('Nomor urut terbaru dari Sheet:', data);
      
      // Update variabel nomorUrutPerKode dengan data JSON yang diterima
      nomorUrutPerKode = data;
      
      // Paksa pembaruan nomor surat
      generateNomorSurat();
    })
    .catch(error => console.error('Gagal mengambil nomor urut:', error));
}

// Panggil pertama kali saat halaman di-load
// Panggil pertama kali saat halaman di-load
ambilNomorTerbaru();

const form = document.forms['Agenda-Surat-Keluar'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Tampilkan tombol loading, sembunyikan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(data => {
      // Tampilkan kembali tombol kirim, sembunyikan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');

      // Ambil nilai nomor surat dari element input untuk alert
      const nomorSurat = document.getElementById("nomorSuratInput").value;
      alert("Terimakasih, inputan Anda telah kami terima.\nNomor Surat: " + nomorSurat);

      // Reset form
      form.reset();
      document.getElementById('nomorSuratBox').innerText = 'Pilih Sub-Kode Surat';
      document.getElementById('nomorSuratInput').value = '';

      // Ambil kembali data nomor urut terbaru dari Google Sheets
      ambilNomorTerbaru();

      console.log('Success!', data);
    })
    .catch(error => {
      // Jika terjadi error, kembalikan tombol seperti semula
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');

      console.error('Error!', error.message);
    });
});

function copyNomor() {
  const nomorInput = document.getElementById("nomorSuratInput");

  if (nomorInput && nomorInput.value) {
    navigator.clipboard.writeText(nomorInput.value).then(() => {
      alert("Nomor surat berhasil disalin!");
    }).catch(err => {
      console.error("Gagal menyalin teks: ", err);
    });
  }
}