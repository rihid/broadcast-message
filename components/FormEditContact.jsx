import {useState} from 'react'
import Button from './Button'
import ButtonIcon from './ButtonIcon'
import Input from './Input'


export default function FormEditContact({
    data,
    handleOpen,
    loadingForm,
    handleChange,
    handleSubmit,
}) {
    console.log(data)
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000d4]">
            <div className="fixed top-0 right-0 w-full md:w-[440px] h-full bg-white overflow-auto">
                <div className="flex justify-between border-b">
                    <div className="p-[20px]">
                        <div className="text-[20px] font-[700]">Buat Iklan</div>
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
                            label="Nama Pelanggan"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="">
                        <Input
                            label="No HP"
                            id="phone"
                            name="phone"
                            value={data.phone}
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
