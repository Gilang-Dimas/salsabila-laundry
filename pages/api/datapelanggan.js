import {db} from'../../lib/db'

const handler = async (_, res) => {
    try{
        const result = await db.query(
            `SELECT * FROM data_pelanggan ORDER BY id_pelanggan ASC`
        );
        await db.end;

        return res.json(result)
    } catch (e){
        res.status(500).json({ message: e.message });
    }
};

export default handler;