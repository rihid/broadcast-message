import { useState, } from 'react'
import FormOption from './FormOption'

export default function TableContacts({
    handleOpenForm,
    loadingTable,
    data,
    handleSendMessage,
    handleEdit,
    handleDelete,
}) {

    const [searchField, setSearchField] = useState('');
    const [selectView, setSelectView] = useState(50);

    const filterData = data.filter(row => {
        if (searchField == '') {
            return row
        }
        else if (row.name?.toLowerCase().includes(searchField.toLowerCase())) {
            return row
        }
        else if (row.phone?.toLowerCase().includes(searchField.toLowerCase())) {
            return row
        }
    });

    const TableHead = () => {
        return (
            <thead className="text-normall text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">NO</th>
                    <th scope="col" className="px-6 py-3">Nama</th>
                    <th scope="col" className="px-6 py-3">No HP</th>
                    <th scope="col" className="px-6 py-3">Broadcast</th>
                    <th scope="col" className="px-6 py-3">Aksi</th>
                </tr>
            </thead>
        )
    }

    const TableRow = ({ index, row, sendMessage, editRow, deleteRow }) => {
        return (
            <tr className="bg-white border-b hover:bg-gray-50 " key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.phone}</td>
                <td className="px-6 py-4">
                    <span
                        className="font-medium text-green-500 cursor-pointer hover:underline"
                        onClick={() => sendMessage(row)}
                    >
                        Kirim Pesan
                    </span>
                </td>
                <td className="px-6 py-4">
                    <span
                        className="font-medium text-[#6f6fe3] cursor-pointer hover:underline"
                        onClick={() => editRow(row)}
                    >
                        Edit
                    </span>
                    <span> | </span>
                    <span
                        className="font-medium text-red-500 cursor-pointer hover:underline"
                        onClick={() => deleteRow(row.id)}
                    >
                        Hapus
                    </span>
                </td>
            </tr>
        )
    }

    const TableCount = ({ count }) => {
        return <div className="text-[14px] text-gray-400 py-[20px]">Total {count} data.</div>
    }

    if (!loadingTable) {
        return (
            <>
                <FormOption
                    handleOpenForm={handleOpenForm}
                    searchField={searchField}
					setSearchField={setSearchField}
                />
                <div className="p-[20px] overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <TableHead />
                        {/* {filterData.length > 0 && */}
                        <tbody>
                            {filterData.map((row, index) =>
                                <TableRow
                                    key={index}
                                    index={index}
                                    row={row}
                                    sendMessage={handleSendMessage}
                                    editRow={handleEdit}
                                    deleteRow={handleDelete}
                                />
                            )}
                        </tbody>
                        {/* } */}
                    </table>
                    <TableCount count={filterData.length} />
                </div>
            </>
        )
    }
    return (
        <div className="flex justify-center py-[20px]">
            Loading...
        </div>
    )
}
