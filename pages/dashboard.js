import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AdminLayout from "../components/AdminLayout";
import DataAdmin from "../components/DataAdmin";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Salsabila Laundry</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <AdminLayout>
          <DataAdmin />
        </AdminLayout>
      </div>
    </div>
  );
}
