import React from "react";
import Link from "next/link";
import { useDataPaket } from "../lib/swr.fetch";
import { mutate } from "swr";
import Router from "next/router";
const DataPaket = () => {
  const { data, error } = useDataPaket();

  if (error) {
    return <div>Error Landing</div>;
  }
  if (!data) {
    return <div>Loading</div>;
  }
  async function hapuspaket(id_paket) {
    let res = await fetch(`/api/delete-paket?id_paket=${id_paket}`, {
      method: "DELETE",
    });
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate("/api/delete-paket");

    alert("Data Paket Telah Dihapus");
    Router.push("/admin/datapaket");
  }
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h3 className="text-center">Data Paket</h3>
        </div>
        <div>
          <table className="table table-dark table-bordered border-dark">
            <thead className="table-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Jenis</th>
                <th scope="col">Harga</th>
                <th scope="col">Estimasi</th>
                <th scope="col">Opsi</th>
              </tr>
            </thead>

            <tbody>
              {data.map((pkt) => (
                <tr key={pkt}>
                  <th scope="row">{pkt.id_paket}</th>
                  <td>{pkt.jenis_paket}</td>
                  <td>{pkt.harga_paket}</td>
                  <td>{pkt.estimasi_paket}</td>
                  <td>
                    <div className="justify-content-between">
                      <Link
                        href={`/admin/updatepaket?id_paket=${pkt.id_paket}&jenis_paket=${pkt.jenis_paket}&harga_paket=${pkt.harga_paket}&estimasi_paket=${pkt.estimasi_paket}`}
                        legacyBehavior
                        id="link"
                      >
                        <button className="btn-editpk">Edit</button>
                      </Link>
                      <button
                        className="btn-hapuspk text-white "
                        type="submit"
                        value={pkt.id_paket}
                        onClick={(e) => hapuspaket(e.target.value)}
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
      </div>
    </>
  );
};

export default DataPaket;
