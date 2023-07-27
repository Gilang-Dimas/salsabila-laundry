import { db } from "../../lib/db";

const handler = async (_, res) => {
  try {
    const result = await db.query(
      `SELECT data_pemesanan.id_pemesanan, data_pelanggan.nama,data_pelanggan.alamat, data_pelanggan.no_telp,data_paket.jenis_paket,data_paket.harga_paket,data_pemesanan.berat_baju,data_pemesanan.data_masuk,data_pemesanan.data_selesai,data_pemesanan.tgl_pengambilan,data_pemesanan.status_transaksi FROM ((data_pemesanan INNER JOIN data_pelanggan ON data_pemesanan.id_pelanggan = data_pelanggan.id_pelanggan) INNER JOIN data_paket ON data_pemesanan.id_paket = data_paket.id_paket) ORDER BY id_pemesanan ASC`
    );
    await db.end;

    return res.json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
