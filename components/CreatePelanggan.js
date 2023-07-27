import react from "react";
import { useState } from "react";

const CreatePelanggan = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [tgl_cuci, setTgl_cuci] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/create-pelanggan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          alamat,
          no_telp,
          tgl_cuci,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Penambahan Data Sukses");
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <div className="container mt-4"></div>
      <form className="w-50 mx-auto" onSubmit={submitHandler}>
        <h1 className="w-75 text-center">Input Data Pelanggan</h1>

        <div className="w-75">
          <div className="form-floating">
            <input
              className="form-control mb-3"
              id="Nama"
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <label htmlFor="nama">Nama</label>
          </div>

          <div className="form-floating">
            <input
              className="form-control mb-2"
              id="Alamat"
              type="text"
              placeholder="Alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
            <label htmlFor="nama">Alamat</label>
          </div>

          <div className="form-floating">
            <input
              className="form-control mb-3"
              id="No Telp"
              type="text"
              placeholder="No Telp"
              value={no_telp}
              onChange={(e) => setNo_telp(e.target.value)}
            />
            <label htmlFor="nama">No Telepon</label>
          </div>

          <div className="form-floating">
            <input
              className="form-control mb-3"
              id="Tanggal Cuci"
              type="date"
              placeholder="Tanggal Cuci"
              value={tgl_cuci}
              onChange={(e) => setTgl_cuci(e.target.value)}
            />
            <label htmlFor="nama">Tanggal Cuci</label>
          </div>
        </div>
        <div className="w-75 d-flex flex-row-reverse">
          <button className="btn btn-primary " type="submit">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePelanggan;
