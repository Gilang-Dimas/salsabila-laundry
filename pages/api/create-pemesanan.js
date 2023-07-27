import { db } from "../../lib/db";

const handler = async (req, res) => {
  const {
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
      return res.status(400).json({ message: "Input harus di isi semua" });
    }
    const results = await db.query(
      `
            INSERT INTO data_pemesanan (nama, no_telp, jenis_paket, berat_baju, harga, data_masuk, data_selesai, tgl_pengambilan, status_transaksi)
            VALUES (?,?,?,?,?,?,?,?,?)`,
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
      ]
    );
    await db.end;

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
