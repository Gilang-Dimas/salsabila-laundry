import react from "react";
import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useDataPelanggan, useDataPaket } from "../lib/swr.fetch";

const Createpemesanan = () => {
  const [nama, setNama] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [jenis_paket, setJenis_paket] = useState("");
  const [berat_baju, setBerat_baju] = useState("");
  const [harga, setHarga] = useState("");
  const [data_masuk, setData_masuk] = useState("");
  const [data_selesai, setData_selesai] = useState("");
  const [tgl_pengambilan, setTgl_pengambilan] = useState("");
  const [status_transaksi, setStatus_transaksi] = useState("");
  const { data: dataPack, error: errPacket } = useDataPaket();
  const { data: dataPel, error: errPel } = useDataPelanggan();

  if (errPel && errPacket) {
    return <div>Error Landing</div>;
  }
  if (!dataPack && !dataPel) {
    return <div>Loading</div>;
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/create-pemesanan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          no_telp,
          jenis_paket,
          berat_baju,
          harga,
          data_masuk,
          data_selesai,
          tgl_pengambilan,
          status_transaksi,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Penambahan Data Sukses");

      Router.push("/admin/datapemesanan");
    } catch (e) {
      throw Error(e.message);
    }
  }

  function datapaketId(id_paket) {
    setJenis_paket(id_paket);
  }
  return (
    <div>
      <div className="container mt-5 justify-content-center"></div>
      <form className="w-50 mx-auto" onSubmit={submitHandler}>
        <h1 className="w-75 text-center">Input Data Pemesanan</h1>

        <div className="w-75">
          <div className="form-floating">
            <select
              name="Nama"
              id=""
              className="form-select mb-3"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            >
              <option value="Nama">Nama</option>
              {dataPel?.map((v, idx) => {
                return (
                  <option key={idx} value={v.id_pelanggan}>
                    {v.nama}
                  </option>
                );
              })}
              {/* <option value="Yusuf Alvino Yusrifan">
                Yusuf Alvino Yusrifan
              </option>
              <option value="Andika Putra Aprilianto">
                Andika Putra Aprilianto
              </option>
              <option value="Galuh Arvana Syahputra">
                Galuh Arvana Syahputra
              </option>
              <option value="Ulul Azmi">Ulul Azmi</option>
              <option value="Ferdi Wahyudi">Ferdi Wahyudi</option>
              <option value="Kharisma Riski">Kharisma Riski</option> */}
            </select>{" "}
          </div>

          <div className="form-floating">
            <input
              className="form-control mb-3"
              id="telp"
              type="text"
              placeholder="No_telp"
              value={no_telp}
              onChange={(e) => setNo_telp(e.target.value)}
            />
            <label htmlFor="telp">No Telp</label>
          </div>
          <div className="w-100">
            <div className="form-floating">
              <select
                name="Jenis Paket"
                id=""
                className="form-select mb-3"
                value={jenis_paket}
                onChange={(e) => datapaketId(e.target.value)}
              >
                <option value="Silahkan pilih Status">
                  {" "}
                  Pilih Jenis Paket{" "}
                </option>
                {dataPack?.map((v, idx) => {
                  return (
                    <option key={idx} value={v.id_paket}>
                      {v.jenis_paket}
                    </option>
                  );
                })}
                {/* <option value="Cuci Pakaian">Cuci Pakaian</option>
                <option value="Cuci Bedcover">Cuci Bedcover</option>
                <option value="Cuci Selimut">Cuci Selimut</option>
                <option value="Cuci Karpet">Cuci Karpet</option> */}
              </select>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="berat"
                type="text"
                placeholder="Berat_baju"
                value={berat_baju}
                onChange={(e) => setBerat_baju(e.target.value)}
              />
              <label htmlFor="berat">Berat Baju</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="harga"
                type="text"
                placeholder="Harga"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
              <label htmlFor="harga">Harga</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="data masuk"
                type="date"
                placeholder="Data_masuk"
                value={data_masuk}
                onChange={(e) => setData_masuk(e.target.value)}
              />
              <label htmlFor="data masuk">Data Masuk</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="data selesai"
                type="date"
                placeholder="Data_selesai"
                value={data_selesai}
                onChange={(e) => setData_selesai(e.target.value)}
              />
              <label htmlFor="data selesai">Data Selesai</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="tanggal"
                type="date"
                placeholder="Tgl_pengambilan"
                value={tgl_pengambilan}
                onChange={(e) => setTgl_pengambilan(e.target.value)}
              />
              <label htmlFor="tanggal">Tanggal Pengambilan</label>
            </div>
            <div className="form-floating">
              <div className="w-100">
                <select
                  name="status"
                  id=""
                  className="form-select"
                  value={status_transaksi}
                  onChange={(e) => setStatus_transaksi(e.target.value)}
                >
                  <option value="Silahkan pilih Status">
                    Status Transaksi
                  </option>
                  <option value="Baru">Baru</option>
                  <option value="Proses">Proses</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </div>
            </div>
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

export default Createpemesanan;
