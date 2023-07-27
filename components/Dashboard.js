/* eslint-disable @next/next/no-sync-scripts */

import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const Dashboard = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <div className="body">
          <div className="sidebar close">
            <div className="logo-details ml-3">
              <a>
                <img src="../Logo.png" width={50} />
              </a>
            </div>
            <ul className="nav-links">
              <li>
                <Link href="/admin/dashboard">
                  <i className="bx bx-grid-alt" />
                  <span className="link_name">Dashboard</span>
                  <ul className="sub-menu blank">
                    <li>
                      <a>Dashboard</a>
                    </li>
                  </ul>
                </Link>
              </li>
              <li>
                <div className="iocn-link">
                  <a href="#">
                    <i className="bx bx-collection" />
                    <span className="link_name"></span>
                  </a>
                  <i className="bx bxs-chevron-down arrow" />
                </div>
                <ul className="sub-menu">
                  <li>
                    <a className="link_name">Data</a>
                  </li>
                  <li>
                    <Link href="/admin/datapelanggan" legacyBehavior id="link">
                      <a>Data Pelanggan</a>
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="/admin/datapaket">
                      <a>Data Paket</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/datapemesanan" legacyBehavior id="link">
                      <a>Data Pemesanan</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                  <a href="#">
                    <i className="bx bx-book-alt" />
                    <span className="link_name">Input Data</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow" />
                </div>
                <ul className="sub-menu">
                  <li>
                    <a href="../admin/createpaket">Input Data Paket</a>
                  </li>
                  <li>
                    <a href="../admin/createpelanggan">Input Data Pelanggan</a>
                  </li>
                  <li>
                    <a href="../admin/createpemesanan">Input Data Pemesanan</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="name-job">
                  <div className="profile_name"></div>
                  <div className="job"></div>
                </div>
                <Link href="/" legacyBehavior id="link">
                  <a>
                    <i className="bx bx-log-out" />
                  </a>
                </Link>
                <div className="profile-details">
                  <div className="profile-content">
                    <img src="/Jugram.jpg" alt="profileImg" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <section className="home-section">
            <div className="home-content">
              <span
                className="logo_name ml-3 "
                style={{ fontSize: "30px", fontWeight: "bold" }}
              >
                Salsabila Laundry
              </span>
              <span className="text"></span>
            </div>
            <div className="table-responsive">{children}</div>
          </section>
        </div>
      </div>

      <script src="/script.js"></script>
    </>
  );
};
export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
