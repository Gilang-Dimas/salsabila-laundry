import { db } from "../../lib/db";

const handler = async (req, res) => {
  const { id_pelanggan } = req.query;

  try {
    if (!id_pelanggan) {
      return res.status(400).json({ message: "`id_pelanggan` tidak ada" });
    }

    const results = await db.query(
      `DELETE FROM data_pelanggan WHERE id_pelanggan = ?`,
      id_pelanggan
    );
    res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;