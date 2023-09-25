import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Layout, MenuItems, TableMessages, FormMessages } from '@/components'

// Supabase
import supabase from '@/config/supabase'

const initialForm = {
    title: '',
    body: '',
}

export default function Message() {

    // Options State
    const [openForm, setOpenForm] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    const [method, setMethod] = useState('POST');
    // Data State
    const [message, setMessage] = useState([]);
    const [form, setForm] = useState(initialForm);

    // Feth all data
    // Message
    const fetchReadAllMsg = async () => {
        const { data, error } = await supabase.from('messages').select()
        if (error) {
            console.log(error)
            setIsloading(false)
        }
        if (data) {
            setMessage(data);
            setIsloading(false)
        }
    }
    // Open Create Form
    const _handleOpenForm = () => {
        setOpenForm(true);
        setForm(initialForm);
        setMethod('POST')
    }

    // handle form input data
    const _handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    // Submit new data
    const _handleAddData = async () => {
        setIsloading(true);

        const { data, error } = await supabase.from('messages').insert(form);
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log("success")
        }
        await fetchReadAllMsg();
        setIsloading(false);
        setOpenForm(false)
        setForm(initialForm)
    }

    // Handle edit
    const _handleEditData = (contact) => {
        // console.log(contact)
        setOpenForm(true);
        setForm(contact);
        setMethod('PUT')
    }

    const _handleUpdatedData = async () => {
        // console.log(form.id)
        // e.preventDefault();
        setIsloading(true);
        const { data, error } = await supabase.from('messages').update(form).eq('id', form.id);
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data)
        }
        await fetchReadAllMsg();
        setIsloading(false);
        setOpenForm(false);
        setForm(initialForm)
    }

    // Handle delete data
    const _handleDeleteData = async (id) => {

        const confirm = window.confirm(`Apakah anda yakin ingin menghapus data ini`);
        if (!confirm) return;
        const { error } = await supabase.from('messages').delete().eq('id', id);
        setMessage(prev => {
            return prev.filter(row => row.id !== id)
        })
    }


    // Fetch data form API

    // Message
    useEffect(() => {
        fetchReadAllMsg();
    }, [])

    // Post Contact 

    return (
        <Layout>
            <div className="max-w-full md:max-w-5xl mx-auto py-[40px]">
                <div className="...">
                    <MenuItems />
                </div>
                <div className="text-[24px] font-[700] mb-[20px] mx-4 md:mx-0 lg:mx-0">
                    <h2>Daftar Pesan Default</h2>
                </div>
                <div className="bg-white rounded-md mx-4 md:mx-0 lg:mx-0">
                    <TableMessages
                        data={message}
                        loadingTable={isLoading}
                        handleOpenForm={_handleOpenForm}
                        handleEdit={_handleEditData}
                        handleDelete={_handleDeleteData}
                    />
                </div>
                {openForm &&
                    <FormMessages
                        data={form}
                        method={method}
                        loadingForm={isLoading}
                        handleOpen={() => setOpenForm(false)}
                        handleChange={_handleChangeForm}
                        handleInsert={_handleAddData}
                        handleUpdate={_handleUpdatedData}
                    />
                }
            </div>
        </Layout>
    )
}
