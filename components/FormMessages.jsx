import { useState } from 'react'
import Button from './Button'
import ButtonIcon from './ButtonIcon'
import Input from './Input'
import InputSelect from './InputSelect'
import InputTextarea from './InputTextarea'

export default function FormMessages({
    data,
    method,
    handleOpen,
    loadingForm,
    handleChange,
    handleInsert,
    handleUpdate,
}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        method === 'POST' ? handleInsert() : handleUpdate();
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000d4]">
            <div className="fixed top-0 right-0 w-full md:w-[440px] h-full bg-white overflow-auto">
                <div className="flex justify-between border-b">
                    <div className="p-[20px]">
                        <div className="text-[20px] font-[700]">{method === 'POST' ? 'Tambah Data' : 'Edit Data'}</div>
                    </div>
                    <div className="p-[20px]">
                        <ButtonIcon icon="icon-close" size={12} onClick={handleOpen} />
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-[20px] p-[20px]"
                >
                    <div className="">
                        <Input
                            label="Judul*"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="">
                        <InputTextarea
                            label="Isi Pesan"
                            id="body"
                            name="body"
                            value={data.body}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1">
                        <Button
                            type="submit"
                            label={loadingForm ? 'Loading...' : 'Simpan'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
