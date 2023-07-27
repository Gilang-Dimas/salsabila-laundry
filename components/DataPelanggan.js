import React from "react";
import { useDataPelanggan } from "../lib/swr.fetch";
import Link from "next/link";
import { mutate } from "swr";
import Router from "next/router";
const DataPelanggan = () => {
  const { data, error } = useDataPelanggan();

  if (error) {
    return <div>Error Landing</div>;
  }
  if (!data) {
    return <div>Loading</div>;
  }
  async function hapuspelanggan(id_pelanggan) {
    let res = await fetch(
      `/api/delete_pelanggan?id_pelanggan=${id_pelanggan}`,
      {
        method: "DELETE",
      }
    );
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate("/api/delete-pelanggan");

    alert("Data Pelanggan Telah Dihapus");
    Router.push("/admin/datapelanggan");
  }
  console.log(data);
  return (
    <>
      <div className="container">
        <h3 className="text-center">Data Pelanggan</h3>
        <table className="table table-dark table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Alamat</th>
              <th scope="col">No Telp</th>
              <th scope="col">Tanggal Cuci</th>
              <th scope="col">Opsi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((plg, idx) => (
              <tr key={idx}>
                <th scope="row">{plg.id_pelanggan}</th>
                <td>{plg.nama}</td>
                <td>{plg.alamat}</td>
                <td>{plg.no_telp}</td>
                <td>{plg.tgl_cuci.substring(0, 10)}</td>
                <td>
                  <div className="justify-content-between">
                    <Link
                      href={`/admin/updatepelanggan?id_pelanggan=${plg.id_pelanggan}&nama=${plg.nama}&alamat=${plg.alamat}&no_telp=${plg.no_telp}&tgl_cuci=${plg.tgl_cuci}`}
                      legacyBehavior
                      id="link"
                    >
                      <button className="btn-editpl">Edit</button>
                    </Link>
                    <button
                      className="btn-hapuspl text-white "
                      type="submit"
                      value={plg.id_pelanggan}
                      onClick={(e) => hapuspelanggan(e.target.value)}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataPelanggan;
