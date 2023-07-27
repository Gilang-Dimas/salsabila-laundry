import { db } from "../../lib/db";

const handler = async (req, res) => {
  const { jenis_paket, harga_paket, estimasi_paket, id_paket } = req.body;
  try {
    if (!jenis_paket || !harga_paket || !estimasi_paket || !id_paket) {
      return res.status(400).json({ message: "Input Tidak Boleh Kosong" });
    }

    const results = await db.query(
      `UPDATE data_paket set jenis_paket =?,  harga_paket = ?, estimasi_paket = ?
    WHERE id_paket = ?`,
      [jenis_paket, harga_paket, estimasi_paket, id_paket]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
