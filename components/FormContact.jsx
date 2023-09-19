import {useState} from 'react'
import Button from './Button'
import ButtonIcon from './ButtonIcon'
import Input from './Input'

const initialForm = {
    id: Math.random(),
    name: '',
    phone: '',
}

export default function FormContact({
    handleOpen,
    handleAdd,
}) {

    const [form, setForm] = useState(initialForm);
    // console.log(form)
    // handle form input data
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.phone) return
        handleAdd(form);
        setForm(initialForm);
    }
    
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
                    onSubmit={_handleSubmit}
                    className="flex flex-col gap-[20px] p-[20px]"
                >
                    <div className="">
                        <Input
                            label="Nama Pelanggan"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChangeForm}
                        />
                    </div>
                    <div className="">
                        <Input
                            label="No HP"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChangeForm}
                        />
                    </div>

                    <div className="grid grid-cols-1">
                        <Button
                            type="submit"
                            label={'Simpan'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
