import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import DataPemesanan from '../../components/DataPemesanan';
const datapemesanan= () => {
  return (
    <div>
        <AdminLayout>
            <DataPemesanan/>
        </AdminLayout>
    </div>
  )
}

export default datapemesanan