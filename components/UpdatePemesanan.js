import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Updatepemesanan = () => {
  const [_nama, setNama] = useState("");
  const [_no_telp, setNo_Telp] = useState("");
  const [_jenis_paket, setJenis_paket] = useState("");
  const [_berat_baju, setBerat_baju] = useState("");
  const [_harga, setHarga] = useState("");
  const [_data_masuk, setData_masuk] = useState("");
  const [_data_selesai, setData_selesai] = useState("");
  const [_tgl_pengambilan, setTgl_pengambilan] = useState("");
  const [_status_transaksi, setStatus_transaksi] = useState("");
  const [_id_pemesanan, setId_pemesanan] = useState("");

  const router = useRouter();
  const {
    nama,
    no_telp,
    jenis_paket,
    berat_baju,
    harga,
    data_masuk,
    data_selesai,
    tgl_pengambilan,
    status_transaksi,
    id_pemesanan,
  } = router.query;

  useEffect(() => {
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof no_telp == "string") {
      setNo_Telp(no_telp);
    }
    if (typeof jenis_paket == "string") {
      setJenis_paket(jenis_paket);
    }
    if (typeof berat_baju == "string") {
      setBerat_baju(berat_baju);
    }
    if (typeof harga == "string") {
      setHarga(harga);
    }
    if (typeof data_masuk == "string") {
      setData_masuk(data_masuk);
    }
    if (typeof data_selesai == "string") {
      setData_selesai(data_selesai);
    }
    if (typeof tgl_pengambilan == "string") {
      setTgl_pengambilan(tgl_pengambilan);
    }
    if (typeof status_transaksi == "string") {
      setStatus_transaksi(status_transaksi);
    }
    if (typeof id_pemesanan == "string") {
      setId_pemesanan(id_pemesanan);
    }
  }, [
    nama,
    no_telp,
    jenis_paket,
    berat_baju,
    harga,
    data_masuk,
    data_selesai,
    tgl_pengambilan,
    status_transaksi,
    id_pemesanan,
  ]);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/update-pemesanan", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_pemesanan: _id_pemesanan,
          nama: _nama,
          no_telp: _no_telp,
          jenis_paket: _jenis_paket,
          berat_baju: _berat_baju,
          harga: _harga,
          data_masuk: _data_masuk,
          data_selesai: _data_selesai,
          tgl_pengambilan: _tgl_pengambilan,
          status_transaksi: _status_transaksi,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Update Data Sukses");

      router.push("/admin/datapemesanan");
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <>
      <Head>
        <title>Update Data Pemesanan</title>
        <link rel="icon" href="/lg.png" />
      </Head>
      <div className=" mt-5">
        <div className="text-center">
          <h3 className="display-12" style={{ color: "orange" }}>
            <em>Update Data Pemesanan</em>
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
          <label htmlFor="exampleInputPassword1">No Telp</label>
          <input
            type="text"
            placeholder="No telp"
            className="form-control"
            id="no_telp"
            value={_no_telp}
            onChange={(e) => setNo_Telp(e.target.value)}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Berat Baju</label>
          <input
            type="text"
            placeholder="Berat Baju"
            className="form-control"
            id="berat_baju"
            value={_berat_baju}
            onChange={(e) => setBerat_baju(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Harga</label>
          <input
            type="text"
            placeholder="Harga"
            className="form-control"
            id="harga"
            value={_harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Data Masuk</label>
          <input
            type="date"
            placeholder="Data Masuk"
            className="form-control"
            id="data_masuk"
            value={_data_masuk}
            onChange={(e) => setData_masuk(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Data Selesai</label>
          <input
            type="date"
            placeholder="Data Selesai"
            className="form-control"
            id="data_selesai"
            value={_data_selesai}
            onChange={(e) => setData_selesai(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Tanggal Pengambilan</label>
          <input
            type="date"
            placeholder="Tgl Pengambilan"
            className="form-control"
            id="tgl_pengambilan"
            value={_tgl_pengambilan}
            onChange={(e) => setTgl_pengambilan(e.target.value)}
          />
        </div>
        <div className="w-100">
          <select
            name="Status Transaksi"
            id=""
            className="form-select"
            value={_status_transaksi}
            onChange={(e) => setStatus_transaksi(e.target.value)}
          >
            <option value="Baru">Baru</option>
            <option value="Proses">Proses</option>
            <option value="Selesai">Selesai</option>
          </select>
                    
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </>
  );
};

export default Updatepemesanan;
