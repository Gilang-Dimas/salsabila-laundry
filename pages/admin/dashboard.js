import React from "react";
import AdminLayout from "../../components/AdminLayout";
import {
  useDataPaket,
  useDataPelanggan,
  useDataPemesanan,
} from "../../lib/swr.fetch";
import Link from "next/link";
const Dataadmin = () => {
  const { data: paket, errPaket } = useDataPaket();
  const { data: pelanggan, errCust } = useDataPelanggan();
  const { data: pemesanan, errPems } = useDataPemesanan();
  if (errPaket && errCust && errPems) {
    return <div>Error Landing</div>;
  }
  if (!paket && !pelanggan && !pemesanan) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <AdminLayout>
        <div className="py-5" id="awal">
          <div
            className="container shadow d-flex align-items-center justify-content-center px-3 mb-3 bg-light py-5 rounded"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/laundry-washing-isometric-composition-with-small-human-characters-illustration_1284-54068.jpg?w=740&t=st=1685338179~exp=1685338779~hmac=e0568ba146179bf01c1f43d47812d9f97d6edf75e486a1a06d64232cf06e59bb)",
            }}
            id="pagetop"
          >
            <div className="align-items-center justify-content-center">
              <h1
                className="text-dark text-center"
                style={{ fontSize: "3rem" }}
              >
                Welocome Pada Halaman Admin
              </h1>
              <h1 className="display-5 fw-bold text-dark text-center">
                Salsabila Laundry
              </h1>
            </div>
          </div>
        </div>

        <div className="container-fluid my-5 row justify-content-center">
          <div className="row ">
            <div className="col">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body shadow-lg">
                  <i
                    className="fas fa-database"
                    style={{ fontSize: "30px" }}
                  ></i>
                  <h5 className="card-title">Data Paket</h5>
                  <p className="card-text">
                    Data yang berisikan tentang paket salsabila laundry yang
                    sudah diinput.
                  </p>
                  <a href="#" className="btn btn-primary">
                    {paket ? paket.length : 0}
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body shadow-lg">
                  <i
                    className="fas fa-database"
                    style={{ fontSize: "30px" }}
                  ></i>
                  <h5 className="card-title">Data Pelanggan</h5>
                  <p className="card-text">
                    Data yang berisikan tentang pelanggan salsabila laundry yang
                    sudah diinput.
                  </p>
                  <a href="#" className="btn btn-primary">
                    {pelanggan ? pelanggan.length : 0}
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body shadow-lg">
                  <i
                    className="fas fa-database"
                    style={{ fontSize: "30px" }}
                  ></i>
                  <h5 className="card-title">Data Transaksi</h5>
                  <p className="card-text">
                    Data yang berisikan tentang transaksi salsabila laundry yang
                    sudah diinput.
                  </p>
                  <a href="#" className="btn btn-primary">
                    {pemesanan ? pemesanan.length : 0}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Dataadmin;
