import React from "react";
import Link from "next/link";
import { useDataPemesanan } from "../lib/swr.fetch";
import { mutate } from "swr";
import Router from "next/router";
const DataPemesanan = () => {
  const { data, error } = useDataPemesanan();

  if (error) {
    return <div>Error Landing</div>;
  }
  if (!data) {
    return <div>Loading</div>;
  }
  async function hapusPemesanan(id_pemesanan) {
    let res = await fetch(
      `/api/delete-pemesanan?id_pemesanan=${id_pemesanan}`,
      {
        method: "DELETE",
      }
    );
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate("/api/delete-pemesanan");

    alert("Data Pemesanan Telah Dihapus");
    Router.push("/admin/datapemesanan");

    console.log(data);
  }
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h3 className="text-center">Data Pemesanan</h3>
        </div>
        <div>
          <table className="table table-dark table-bordered border-dark">
            <thead>
              <tr>
                <th scope="col">Id Pemesanan</th>
                <th scope="col">Nama</th>
                <th scope="col">No Telp</th>
                <th scope="col">Jenis Paket</th>
                <th scope="col">Berat Baju</th>
                <th scope="col">Harga</th>
                <th scope="col">Data Masuk</th>
                <th scope="col">Data Selesai</th>
                <th scope="col">Tanggal Pengambilan</th>
                <th scope="col">Status Transaksi</th>
                <th scope="col">Opsi</th>
              </tr>
            </thead>

            <tbody>
              {data.map((pms, idx) => (
                <tr key={idx}>
                  <th scope="row">{pms.id_pemesanan}</th>
                  <td>{pms.nama}</td>
                  <td>{pms.no_telp}</td>
                  <td>{pms.jenis_paket}</td>
                  <td>{pms.berat_baju}</td>
                  <td>{pms.harga_paket}</td>
                  <td>{pms.data_masuk.substring(0, 10)}</td>
                  <td>{pms.data_selesai.substring(0, 10)}</td>
                  <td>{pms.tgl_pengambilan.substring(0, 10)}</td>
                  <td>{pms.status_transaksi}</td>
                  <div className="justify-content-between">
                    <Link
                      href={`/admin/updatepemesanan?id_pemesanan=${pms.id_pemesanan}&nama=${pms.nama}&no_telp=${pms.no_telp}&jenis_paket=${pms.jenis_paket}&berat_baju=${pms.berat_baju}&harga=${pms.harga}&data_masuk=${pms.data_masuk}&data_selesai=${pms.data_selesai}&tgl_pengambilan=${pms.tgl_pengambilan}&status_transaksi=${pms.status_transaksi}`}
                      legacyBehavior
                      id="link"
                    >
                      <button className="btn-editpm">Edit</button>
                    </Link>
                    <Link
                      href={`/admin/nota?id_pemesanan=${pms.id_pemesanan}&nama=${pms.nama}&no_telp=${pms.no_telp}&jenis_paket=${pms.jenis_paket}&berat_baju=${pms.berat_baju}&harga=${pms.harga}&data_masuk=${pms.data_masuk}&data_selesai=${pms.data_selesai}&tgl_pengambilan=${pms.tgl_pengambilan}&status_transaksi=${pms.status_transaksi}`}
                      legacyBehavior
                      id="link"
                    >
                      <button className="btn-editpm">Nota</button>
                    </Link>
                    <button
                      className="btn-hapuspm text-white "
                      type="submit"
                      value={pms.id_pemesanan}
                      onClick={(e) => hapusPemesanan(e.target.value)}
                    >
                      Hapus
                    </button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataPemesanan;
