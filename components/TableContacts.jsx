import React from 'react'
import FormOption from './FormOption'

export default function TableContacts({
    handleOpenForm,
    data,
}) {
    return (
        <>
            <FormOption
                handleOpenForm={handleOpenForm}
            />
            <div className="p-[20px]">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-normall text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">NO</th>
                            <th scope="col" className="px-6 py-3">Nama</th>
                            <th scope="col" className="px-6 py-3">No HP</th>
                            <th scope="col" className="px-6 py-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (row, index) => 
                            <tr className="bg-white border-b hover:bg-gray-50 " key={index}>
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{row.name}</td>
                                <td className="px-6 py-4">{row.phone}</td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-blue-500 cursor-pointer hover:underline">
                                        Edit
                                    </span>
                                    <span> | </span>
                                    <span className="font-medium text-red-500 cursor-pointer hover:underline">
                                        Hapus
                                    </span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
