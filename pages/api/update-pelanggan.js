import { db } from "../../lib/db";

const handler = async (req, res) => {
  const { id_pelanggan, nama, alamat, no_telp, tgl_cuci} = req.body;
  try {
    if (!id_pelanggan || !nama || !alamat || !no_telp || !tgl_cuci) {
      return res.status(400).json({ message: "Input Tidak Boleh Kosong" });
    }

    const results = await db.query(
      `UPDATE data_pelanggan set nama =?,  alamat = ?, no_telp = ?, tgl_cuci = ?
    WHERE id_pelanggan = ?`,
      [nama, alamat, no_telp, tgl_cuci, id_pelanggan]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;