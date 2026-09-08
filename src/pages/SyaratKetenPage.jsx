import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratKetenPage = () => {
  const sections = [
    {
      number: "1",
      icon: "fa-solid fa-user-shield",
      title: "Akun Pengguna & Pendaftaran",
      content: [
        "Setiap pengguna wajib memberikan informasi data diri (nama lengkap dan alamat email aktif) yang valid saat mendaftar kelas. Nama yang didaftarkan akan digunakan secara permanen pada pencetakan E-Sertifikat Kelulusan.",
        "Satu akun pengguna bersifat personal dan tidak diperkenankan untuk digunakan secara bersama-sama (account sharing) atau dipindahtangankan ke pihak lain tanpa izin tertulis dari manajemen Skilora.",
        "Pengguna bertanggung jawab penuh untuk menjaga kerahasiaan kata sandi serta seluruh aktivitas yang terjadi di dalam akun pribadinya.",
      ],
    },
    {
      number: "2",
      icon: "fa-solid fa-infinity",
      title: "Akses Seumur Hidup & Hak Kekayaan Intelektual",
      content: [
        "Seluruh peserta yang telah menyelesaikan pembayaran kelas berhak mendapatkan Akses Seumur Hidup (Lifetime Access) ke seluruh video tutorial, materi bacaan, dan update modul di masa depan.",
        "Seluruh aset materi, video, modul panduan, dan desain silabus di platform Skilora dilindungi oleh Undang-Undang Hak Cipta. Pengguna dilarang keras merekam ulang, menyebarluaskan, membajak, atau menjual kembali materi pembelajaran dalam bentuk apa pun.",
        "Source code dan aset latihan yang disediakan dalam kursus bebas digunakan oleh siswa untuk kebutuhan pengembangan portofolio pribadi maupun proyek komersial klien.",
      ],
    },
    {
      number: "3",
      icon: "fa-solid fa-money-bill-wave",
      title: "Kebijakan Pembayaran & Garansi Kepuasan 7 Hari",
      content: [
        "Biaya pendaftaran kelas merupakan pembayaran satu kali (one-time payment) tanpa biaya langganan berkala atau biaya perpanjangan tersembunyi.",
        "Kami menyediakan 'Garansi Kepuasan 7 Hari'. Jika Anda merasa kurikulum yang dibeli tidak sesuai dengan ekspektasi, Anda berhak mengajukan penukaran ke kelas lain dengan nilai setara.",
        "Pengajuan pengembalian dana (refund) dapat disetujui selama progres belajar pada kelas terkait belum melebihi 20% dan diajukan maksimal 7 hari kalender sejak tanggal transaksi pembayaran.",
      ],
    },
    {
      number: "4",
      icon: "fa-solid fa-award",
      title: "E-Sertifikat Kelulusan & Kode Etik Komunitas",
      content: [
        "E-Sertifikat Kelulusan berlisensi dengan nomor kredensial unik akan diterbitkan setelah siswa menyelesaikan seluruh materi video dan mengunggah tugas proyek akhir (final project) sesuai kriteria penilaian mentor.",
        "Anggota komunitas belajar di Discord dan Telegram wajib menjunjung tinggi etika kesopanan, saling menghargai sesama pembelajar, serta tidak membagikan konten promosi spam, ujaran kebencian, atau konten yang melanggar hukum.",
        "Skilora berhak menangguhkan akses komunitas bagi anggota yang melanggar kode etik secara berulang demi menjaga kenyamanan ekosistem belajar bersama.",
      ],
    },
  ];

  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-header py-5 bg-light border-bottom">
        <Container className="pt-5 mt-4">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-2 fw-semibold mb-2">
                Legal &amp; Kebijakan
              </span>
              <h1 className="fw-bold text-dark mb-3 animate__animated animate__fadeInUp">
                Syarat &amp; Ketentuan Layanan
              </h1>
              <p className="text-muted lead fs-6 animate__animated animate__fadeInUp">
                Harap membaca ketentuan berikut dengan saksama. Dokumen ini mengatur hak, kewajiban, dan lisensi Anda sebagai peserta di platform Skilora Academy.
              </p>
              <div className="small text-muted mt-2">
                <i className="fa-regular fa-calendar-check me-1 text-success"></i>
                Terakhir Diperbarui: September 2026 • Berlaku Efektif untuk Seluruh Pengguna
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="syarat-content py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg="9">
              <div className="alert alert-info border rounded-3 p-4 mb-4 d-flex align-items-center gap-3">
                <i className="fa-solid fa-circle-info fs-3 text-info"></i>
                <div className="small text-dark">
                  Dengan mendaftar akun atau membeli kursus di <strong>Skilora Academy</strong>, Anda menyetujui seluruh ketentuan layanan di bawah ini. Kami berkomitmen menyediakan lingkungan belajar digital yang aman, transparan, dan berdaya guna tinggi.
                </div>
              </div>

              <div className="d-flex flex-column gap-4">
                {sections.map((sec) => (
                  <div
                    key={sec.number}
                    className="syarat-card p-4 p-md-5 rounded-3 border bg-white"
                  >
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center bg-danger bg-opacity-10 text-danger fw-bold"
                        style={{ width: "45px", height: "45px", minWidth: "45px", fontSize: "1.2rem" }}
                      >
                        {sec.number}
                      </div>
                      <div>
                        <h4 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
                          <i className={`${sec.icon} text-primary fs-5`}></i>
                          <span>{sec.title}</span>
                        </h4>
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-3 ps-md-5">
                      {sec.content.map((paragraph, pIdx) => (
                        <div key={pIdx} className="d-flex align-items-start gap-2">
                          <i className="fa-solid fa-check text-success mt-1 small"></i>
                          <p className="text-secondary m-0 lh-lg small">
                            {paragraph}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default SyaratKetenPage;
