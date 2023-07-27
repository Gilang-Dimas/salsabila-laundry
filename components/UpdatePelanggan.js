import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UpdatePelanggan = () => {
  const [_nama, setNama] = useState("");
  const [_alamat, setAlamat] = useState("");
  const [_no_telp, setNo_Telp] = useState("");
  const [_tgl_cuci, setTgl_cuci] = useState("");
  const [_id_pelanggan, setId_pelanggan] = useState("");

  const router = useRouter();
  const { nama, alamat, no_telp, tgl_cuci, id_pelanggan } = router.query;

  useEffect(() => {
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof alamat == "string") {
      setAlamat(alamat);
    }
    if (typeof no_telp == "string") {
      setNo_Telp(no_telp);
    }
    if (typeof tgl_cuci == "string") {
      setTgl_cuci(tgl_cuci);
    }
    if (typeof id_pelanggan == "string") {
      setId_pelanggan(id_pelanggan);
    }
  }, [nama, alamat, no_telp, tgl_cuci, id_pelanggan]);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/update-pelanggan", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_pelanggan: id_pelanggan,
          nama: _nama,
          alamat: _alamat,
          no_telp: _no_telp,
          tgl_cuci: _tgl_cuci,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Update Data Sukses");

      Router.push("/admin/datapelanggan");
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <>
      <Head>
        <title>Update Data Customer</title>
        <link rel="icon" href="/lg.png" />
      </Head>
      <div className=" mt-5">
        <div className="text-center">
          <h3 className="display-12" style={{ color: "orange" }}>
            <em>Update Data Customer</em>
          </h3>
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className="container"
        style={{ maxWidth: "500px" }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nama</label>
          <input
            type="text"
            placeholder="Nama"
            className="form-control"
            id="nama"
            value={_nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Alamat</label>
          <input
            type="text"
            placeholder="Alamat"
            className="form-control"
            id="alamat"
            value={_alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">No Telp</label>
          <input
            type="text"
            placeholder="No Telp"
            className="form-control"
            id="no_telp"
            value={_no_telp}
            onChange={(e) => setNo_Telp(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Tanggal Cuci</label>
          <input
            type="date"
            placeholder="Tgl_cuci"
            className="form-control"
            id="tgl_cuci"
            value={_tgl_cuci}
            onChange={(e) => setTgl_cuci(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </>
  );
};

export default UpdatePelanggan;
