import { db } from "../../lib/db";

const handler = async (req, res) => {
  const {
    id_pemesanan,
    nama,
    no_telp,
    jenis_paket,
    berat_baju,
    harga,
    data_masuk,
    data_selesai,
    tgl_pengambilan,
    status_transaksi,
  } = req.body;
  try {
    if (
      !id_pemesanan ||
      !nama ||
      !no_telp ||
      !jenis_paket ||
      !berat_baju ||
      !harga ||
      !data_masuk ||
      !data_selesai ||
      !tgl_pengambilan ||
      !status_transaksi
    ) {
      return res.status(400).json({ message: "Input Tidak Boleh Kosong" });
    }

    const results = await db.query(
      `UPDATE data_pemesanan set nama =?,  no_telp = ?, jenis_paket = ?, berat_baju = ?, harga = ?, data_masuk = ?, data_selesai = ?, tgl_pengambilan = ?, status_transaksi = ?
    WHERE id_pemesanan = ?`,
      [
        nama,
        no_telp,
        jenis_paket,
        berat_baju,
        harga,
        data_masuk,
        data_selesai,
        tgl_pengambilan,
        status_transaksi,
        id_pemesanan,
      ]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
