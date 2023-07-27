import React from "react";
import Router, { useRouter } from "next/router";
import react, { useEffect, useState } from "react";

const Nota = () => {
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
      alert("Print Out Sukses");

      router.push("/admin/datapemesanan");
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-6 offset-md-3 card py-5 shadow-lg">
          <h1 className="text-center mb-3">Nota</h1>
          <form
            onSubmit={submitHandler}
            className="container"
            style={{ maxWidth: "500px" }}
          >
            <div className="form-group">
              <label htmlFor="Nama" value={_nama}>
                Nama : {_nama}
              </label>

              <br></br>

              <label htmlFor="Telp" value={_no_telp}>
                No Telpon : {_no_telp}
              </label>
              <br></br>

              <label htmlFor="Jenis Paket" value={_jenis_paket}>
                Jenis Paket : {_jenis_paket}
              </label>
              <br></br>

              <label htmlFor="Berat Baju" value={_berat_baju}>
                Berat Baju : {_berat_baju}
              </label>
              <br></br>

              <label htmlFor="Harga" value={_harga}>
                Harga : {_harga}
              </label>
              <br></br>

              <label htmlFor="Data Masuk" value={_data_masuk}>
                Data Masuk : {_data_masuk.substring(0, 10)}
              </label>
              <br></br>

              <label htmlFor="Data Selesai" value={_data_selesai}>
                Data Selesai : {_data_selesai.substring(0, 10)}
              </label>
              <br></br>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Print
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nota;
