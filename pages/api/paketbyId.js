import { db } from "../../lib/db";

const handler = async (req, res) => {
  const { id } = req.query;
  try {
    const result = await db.query(
      `SELECT * FROM data_paket WHERE id_paket = ?`,
      id
    );
    await db.end;

    return res.json({
      data: result,
      message: "berhasil mendapatkan data",
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
