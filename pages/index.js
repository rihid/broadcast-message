import { useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Input from '@/components/Input'
import TableContacts from '@/components/TableContacts'
import FormContact from '@/components/FormContact'

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

export default function Home() {

    // Options State
    const [openForm, setOpenForm] = useState(false);
    const [isLoading, setIsloading] = useState(true)
    // Data State
    const [contacts, setContact] = useState(dataContact);

    // Open Create Form
    const _handleOpenForm = () => {
        setOpenForm(true);
    }

    // Handle add new Data
    const _handleAddContact = (contact) => {
        setContact([...contacts, contact]);
        setOpenForm(false)
    }
    
    return (
        <Layout>
            <div className="max-w-full md:max-w-5xl mx-auto py-[40px]">
                <div className="text-[40px] font-[700] pb-[20px]">Daftar Kontak</div>
                <div className="bg-white">
                    <TableContacts
                        data={contacts}
                        handleOpenForm={_handleOpenForm}
                    />
                </div>
                {openForm &&
                    <FormContact
                        handleOpen={() => setOpenForm(false)}
                        handleAdd={_handleAddContact}
                    />
                }
            </div>
        </Layout>
    )
}
