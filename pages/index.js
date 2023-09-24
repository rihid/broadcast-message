import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Input from '@/components/Input'
import TableContacts from '@/components/TableContacts'
import FormContact from '@/components/FormContact'
import FormEditContact from '@/components/FormEditContact'
import MenuItems from '@/components/MenuItems'

// Supabase
import supabase from '@/config/supabase'

const dataContact = [
    {
        id: 1,
        name: "Agius",
        phone: "089111999222",
    },
    {
        id: 2,
        name: "Mahyudin",
        phone: "089111999222",
    },
];

const initialForm = {
    name: '',
    phone: '',
    address: '',
    message_id: 1,
}

export default function Home() {
    // console.log(supabase)

    // Options State
    const [openForm, setOpenForm] = useState(false);
    const [openEditForm, setEditForm] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    // Data State
    const [contacts, setContact] = useState([]);
    const [message, setMessage] = useState()
    const [form, setForm] = useState(initialForm);

    // Feth all data
    // Contact
    const fetchReadAll = async () => {
        const { data, error } = await supabase.from('contacts').select()
        if (error) {
            console.log(error)
            setIsloading(false)
        }
        if (data) {
            setContact(data);
            setIsloading(false)
        }
    }
    // MEssage
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
    }

    // handle form input data
    const _handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    // Handle add new Data
    // const handleAddContact = (contact) => {
    //     setContact([...contacts, contact]);

    // }

    // Submit new data
    const _handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);
        if (!form.name || !form.phone) return;

        const {data, error} = await supabase.from('contacts').insert(form);
        if(error){
            console.log(error);
        }
        if(data){
            console.log("success")
        }
        await fetchReadAll();
        setIsloading(false);
        setOpenForm(false)
        setForm(initialForm)
    }

    // Handle edit
    const _handleEditData = (contact) => {
        console.log(contact)
        setEditForm(true)
        setForm(contact)
    }

    const _handleUpdatedData = async (e) => {
        // console.log(form.id)
        e.preventDefault();
        setIsloading(true);
        // if (!form.name || !form.phone) return;
        const {data, error} = await supabase.from('contacts').update(form).eq('id', form.id);
        if(error){
            console.log(error);
        }
        if(data){
            console.log(data)
        }
        await fetchReadAll();
        setIsloading(false);
        setEditForm(false);
        setForm(initialForm)
    }

    // Handle delete data
    const _handleDeleteData = async (id) => {
        
        const confirm = window.confirm(`Apakah anda yakin ingin menghapus data ini`);
        if (!confirm) return;
        const { error } = await supabase.from('contacts').delete().eq('id', id);
        setContact(prev => {
            return prev.filter(row => row.id !== id)
        })
    }

    // Fetch data form API
    // Contact
    useEffect(() => {
        fetchReadAll();
    }, [])

    // Message
    useEffect(() => {
        fetchReadAllMsg();
    }, [])

    // Post Contact 

    return (
        <Layout>
            <div className="max-w-full md:max-w-5xl mx-auto py-[40px]">
                <div className="...">
                    <MenuItems/>
                </div>
                <div className="text-[24px] font-[700] mb-[20px]">
                    <h2>Daftar Kontak</h2>
                </div>
                <div className="bg-white rounded-md">
                    <TableContacts
                        data={contacts}
                        loadingTable={isLoading}
                        handleOpenForm={_handleOpenForm}
                        handleEdit={_handleEditData}
                        handleDelete={_handleDeleteData}
                    />
                </div>
                {openForm &&
                    <FormContact
                        data={form}
                        dataMsg={message}
                        loadingForm={isLoading}
                        handleOpen={() => setOpenForm(false)}
                        handleChange={_handleChangeForm}
                        handleSubmit={_handleSubmit}
                    />
                }
                {openEditForm &&
                    <FormEditContact
                        data={form}
                        loadingForm={isLoading}
                        handleOpen={() => setEditForm(false)}
                        handleChange={_handleChangeForm}
                        handleSubmit={_handleUpdatedData}
                    />
                }
            </div>
        </Layout>
    )
}
