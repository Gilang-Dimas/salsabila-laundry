import { db } from "../../lib/db";

const handler = async (req, res) => {
  const { jenis_paket, harga_paket, estimasi_paket } = req.body;
  try {
    if (!jenis_paket || !harga_paket || !estimasi_paket) {
      return res.status(400).json({ message: "Input harus di isi semua" });
    }
    const results = await db.query(
      `
            INSERT INTO data_paket (jenis_paket, harga_paket, estimasi_paket)
            VALUES (?,?,?)`,
      [jenis_paket, harga_paket, estimasi_paket]
    );
    await db.end;

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
