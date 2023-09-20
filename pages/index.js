import { useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Input from '@/components/Input'
import TableContacts from '@/components/TableContacts'
import FormContact from '@/components/FormContact'
import FormEditContact from '@/components/FormEditContact'

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
    id: Date.now(),
    name: '',
    phone: '',
}

export default function Home() {

    // Options State
    const [openForm, setOpenForm] = useState(false);
    const [openEditForm, setEditForm] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    // Data State
    const [contacts, setContact] = useState(dataContact);
    const [form, setForm] = useState(initialForm);

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
    const handleAddContact = (contact) => {
        setContact([...contacts, contact]);
        setOpenForm(false)
    }

    // Submit data after Add
    const _handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.phone) return
        handleAddContact(form);
        setForm(initialForm)
    }

    // Handle edit
    const _handleEditData = (contact) => {
        setEditForm(true)
        setForm({ id: contact.id, name: contact.name, phone: contact.phone })
    }
    // Update data
    const _handleUpdateData = (id, updatedData) => {
        setEditForm(false)
        setContact(contacts.map(row => (row.id === id ? updatedData : row)));
    }

    // Handle delete data
    const _handleDeleteData = (id) => {
        setContact(contacts.filter(row => row.id !== id))
    }

    return (
        <Layout>
            <div className="max-w-full md:max-w-5xl mx-auto py-[40px]">
                <div className="text-[40px] font-[700] pb-[20px]">Daftar Kontak</div>
                <div className="bg-white">
                    <TableContacts
                        data={contacts}
                        handleOpenForm={_handleOpenForm}
                        handleEdit={_handleEditData}
                        handleDelete={_handleDeleteData}
                    />
                </div>
                {openForm &&
                    <FormContact
                        data={form}
                        handleOpen={() => setOpenForm(false)}
                        handleChange={_handleChangeForm}
                        handleSubmit={_handleSubmit}
                    />
                }
                {openEditForm &&
                    <FormEditContact
                        data={form}
                        handleOpen={() => setEditForm(false)}
                        handleChange={_handleChangeForm}
                        handleUpdate={_handleUpdateData}
                    />
                }
            </div>
        </Layout>
    )
}
