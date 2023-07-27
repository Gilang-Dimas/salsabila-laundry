import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UpdatePaket = () => {
  const [_jenis_paket, setJenis_paket] = useState("");
  const [_harga_paket, setHarga_paket] = useState("");
  const [_estimasi_paket, setEstimasi_paket] = useState("");
  const [_id_paket, setId_paket] = useState("");

  const router = useRouter();
  const { jenis_paket, harga_paket, estimasi_paket, id_paket } = router.query;

  useEffect(() => {
    if (typeof jenis_paket == "string") {
      setJenis_paket(jenis_paket);
    }
    if (typeof harga_paket == "string") {
      setHarga_paket(harga_paket);
    }
    if (typeof estimasi_paket == "string") {
      setEstimasi_paket(estimasi_paket);
    }
    if (typeof id_paket == "string") {
      setId_paket(id_paket);
    }
  }, [jenis_paket, harga_paket, estimasi_paket, id_paket]);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/update-paket", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_paket: id_paket,
          jenis_paket: _jenis_paket,
          harga_paket: _harga_paket,
          estimasi_paket: _estimasi_paket,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Update Data Sukses");

      Router.push("/admin/datapaket");
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <>
      <Head>
        <title>Update Data Paket</title>
        <link rel="icon" href="/lg.png" />
      </Head>
      <div className=" mt-5">
        <div className="text-center">
          <h3 className="display-12" style={{ color: "orange" }}>
            <em>Update Data Paket</em>
          </h3>
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className="container"
        style={{ maxWidth: "500px" }}
      >
        <div className="w-100">
          <select
            name="Jenis Paket"
            id=""
            className="form-select"
            value={_jenis_paket}
            onChange={(e) => setJenis_paket(e.target.value)}
          >
            <option value="Pilih Jenis Paket">Jenis Paket</option>
            <option value="Cuci Pakaian">Cuci Pakaian</option>
            <option value="Cuci Bedcover">Cuci Bedcover</option>
            <option value="Cuci Selimut">Cuci Selimut</option>
            <option value="Cuci Karpet">Cuci Karpet</option>
          </select>
                    
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Harga_Paket</label>
          <input
            type="text"
            placeholder="Harga paket"
            className="form-control"
            id="harga_paket"
            value={_harga_paket}
            onChange={(e) => setHarga_paket(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Estimasi_Paket</label>
          <input
            type="text"
            placeholder="Estimasi paket"
            className="form-control"
            id="estimasi_paket"
            value={_estimasi_paket}
            onChange={(e) => setEstimasi_paket(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </>
  );
};

export default UpdatePaket;
