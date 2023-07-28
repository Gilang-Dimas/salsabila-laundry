import react from "react";
import { useState } from "react";
import Router from "next/router";
const CreatePaket = () => {
  const [jenis_paket, setJenis_paket] = useState("");
  const [harga_paket, setHarga_paket] = useState("");
  const [estimasi_paket, setEstimasi_paket] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/create-paket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jenis_paket,
          harga_paket,
          estimasi_paket,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Penambahan Data Paket Sukses");
      Router.push("/admin/datapaket");
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <div className="container mt-4"></div>
      <form className="w-50 mx-auto" onSubmit={submitHandler}>
        <h1 className="w-75 text-center">Input Data Paket</h1>

        <div className="w-75">
          <div className="form-floating">
            <input
              className="form-control mb-3"
              id="Harga Paket"
              type="text"
              placeholder="Jenis Paket"
              value={jenis_paket}
              onChange={(e) => setJenis_paket(e.target.value)}
            />
            <label htmlFor="nama">Jenis Paket</label>
          </div>
        </div>
        <div className="w-75">
          <div className="form-floating">
            <input
              className="form-control mb-3"
              id="Harga Paket"
              type="text"
              placeholder="Harga_Paket"
              value={harga_paket}
              onChange={(e) => setHarga_paket(e.target.value)}
            />
            <label htmlFor="nama">Harga Paket</label>
          </div>
        </div>
        <div className="w-75">
          <div className="form-floating">
            <input
              className="form-control mb-3"
              id="Estimasi Paket"
              type="text"
              placeholder="Estimasi_Paket"
              value={estimasi_paket}
              onChange={(e) => setEstimasi_paket(e.target.value)}
            />
            <label htmlFor="nama">Estimasi Paket</label>
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

export default CreatePaket;
