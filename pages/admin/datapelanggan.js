import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import DataPelanggan from '../../components/DataPelanggan';
const datapelanggan= () => {
  return (
    <div>
        <AdminLayout>
            <DataPelanggan/>
        </AdminLayout>
    </div>
  )
}

export default datapelanggan;