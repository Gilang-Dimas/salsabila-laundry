import { db } from "../../lib/db";

    const handler = async(req,res) => {
        const {nama, alamat, no_telp, tgl_cuci} = req.body;
        try {
            if (!nama || !alamat || !no_telp || !tgl_cuci){
            return res
                .status(400)
                .json({message: 'Input harus di isi semua'})
            }
            const results = await db.query(`
            INSERT INTO data_pelanggan (nama, alamat, no_telp, tgl_cuci)
            VALUES (?,?,?,?)`,[nama, alamat, no_telp, tgl_cuci]
            );
            await db.end;

            return res.json(results)
        }  catch (e) {
                res.status(500).json({message: e.message});
        }
    };
    export default handler;