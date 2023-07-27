-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2023 at 04:12 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `salsabila_laundry`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `data_paket`
--

CREATE TABLE `data_paket` (
  `id_paket` int(11) NOT NULL,
  `jenis_paket` text DEFAULT NULL,
  `harga_paket` text DEFAULT NULL,
  `estimasi_paket` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_paket`
--

INSERT INTO `data_paket` (`id_paket`, `jenis_paket`, `harga_paket`, `estimasi_paket`) VALUES
(8, 'Cuci Selimut', 'Rp. 20.000', '4 Hari'),
(11, 'Cuci Karpet', 'Rp. 25.000', '3 Hari'),
(12, 'Cuci Bedcover', 'Rp. 30.000', '3 Hari'),
(13, 'Cuci Pakaian', 'Rp. 7.000', '2 Hari');

-- --------------------------------------------------------

--
-- Table structure for table `data_pelanggan`
--

CREATE TABLE `data_pelanggan` (
  `id_pelanggan` int(11) NOT NULL,
  `nama` text DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `no_telp` text DEFAULT NULL,
  `tgl_cuci` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_pelanggan`
--

INSERT INTO `data_pelanggan` (`id_pelanggan`, `nama`, `alamat`, `no_telp`, `tgl_cuci`) VALUES
(12, 'Yusuf Alvino Yusrifan', 'Karangrejo', '082634362735', '2023-07-01'),
(13, 'Andika Putra Aprilianto', 'Kalipuro', '085637291835', '2023-07-14'),
(16, 'Kharisma Denji', 'Singojuruh', '082635478576', '2023-07-07');

-- --------------------------------------------------------

--
-- Table structure for table `data_pemesanan`
--

CREATE TABLE `data_pemesanan` (
  `id_pemesanan` int(11) NOT NULL,
  `nama` text DEFAULT NULL,
  `no_telp` text DEFAULT NULL,
  `jenis_paket` text DEFAULT NULL,
  `berat_baju` text DEFAULT NULL,
  `harga` text DEFAULT NULL,
  `data_masuk` date DEFAULT NULL,
  `data_selesai` date DEFAULT NULL,
  `tgl_pengambilan` date DEFAULT NULL,
  `status_transaksi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_pemesanan`
--

INSERT INTO `data_pemesanan` (`id_pemesanan`, `nama`, `no_telp`, `jenis_paket`, `berat_baju`, `harga`, `data_masuk`, `data_selesai`, `tgl_pengambilan`, `status_transaksi`) VALUES
(21, 'Yusuf Alvino Yusrifan', '08463728463', 'Cuci Pakaian', '3 Kg', 'Rp. 21.000', '2023-07-12', '2023-07-14', '2023-07-16', 'Proses'),
(22, 'Andika Putra Aprilianto', '08253674681', 'Cuci Pakaian', '4 Kg', 'Rp. 28.000', '2023-08-02', '2023-07-05', '2023-07-07', 'Baru'),
(23, 'Galuh Arvana Syahputra', '08253674681', 'Cuci Pakaian', '1 Kg', '50000', '2023-07-27', '2023-07-28', '2023-07-29', 'Baru'),
(24, '12', '08253674681', 'Cuci Bedcover', '1 Kg', '48000', '2023-07-27', '2023-07-28', '2023-07-29', 'Proses');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_paket`
--
ALTER TABLE `data_paket`
  ADD PRIMARY KEY (`id_paket`);

--
-- Indexes for table `data_pelanggan`
--
ALTER TABLE `data_pelanggan`
  ADD PRIMARY KEY (`id_pelanggan`);

--
-- Indexes for table `data_pemesanan`
--
ALTER TABLE `data_pemesanan`
  ADD PRIMARY KEY (`id_pemesanan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `data_paket`
--
ALTER TABLE `data_paket`
  MODIFY `id_paket` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `data_pelanggan`
--
ALTER TABLE `data_pelanggan`
  MODIFY `id_pelanggan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `data_pemesanan`
--
ALTER TABLE `data_pemesanan`
  MODIFY `id_pemesanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
