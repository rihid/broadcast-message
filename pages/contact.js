import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Layout, MenuItems, TableContacts, FormContact } from '@/components'

// Supabase
import supabase from '@/config/supabase'

const initialForm = {
    name: '',
    phone: '',
    address: '',
    message_id: 1,
}

export default function Home() {
    // Auth
    const router = useRouter();
    const { status } = useSession();

    // Options State
    const [openForm, setOpenForm] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    const [method, setMethod] = useState('POST');
    // Data State
    const [contacts, setContact] = useState([]);
    const [message, setMessage] = useState();
    const [form, setForm] = useState(initialForm);

    // Auth 
    useEffect(() => {
        if (status === 'unauthenticated') router.replace('/auth/signin')
    }, [status, router])

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
        // e.preventDefault();
        setIsloading(true);
        if (!form.name || !form.phone) return;
        const cleanedPhone = form.phone.replace(/\D/g, '').startsWith('0') ? `62${form.phone.substring(1)}` : '';
        // console.log(cleanedPhone)
        const { data, error } = await supabase.from('contacts').insert({ ...form, phone: cleanedPhone });
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log("success")
        }
        setIsloading(false);
        await fetchReadAll();
        setOpenForm(false);
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
        if (!form.name || !form.phone) return;
        const { data, error } = await supabase.from('contacts').update(form).eq('id', form.id);
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data)
        }
        await fetchReadAll();
        setIsloading(false);
        setOpenForm(false);
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

    // Send Message
    // const _handleSendMessage = (data) => {
    //     const text = message.find(row => row.id === data.message_id).body
    //     const waSend = `https://api.whatsapp.com/send?phone=${data.phone}&text=${encodeURIComponent(text)}`
    //     // console.log(waSend)
    //     return waSend
    // }

    const _handleDefaultMessage = (id) => {
        const text = message.find( row => row.id == id).body;   
        return encodeURIComponent(text)
    }

    // Fetch data form API
    useEffect(() => {
        fetchReadAll();
        fetchReadAllMsg();
    }, [])

    // Post Contact 
    if(status === 'authenticated'){
        return (
            <Layout>
                <div className="max-w-full md:max-w-5xl mx-auto py-[40px]">
                    <div className="...">
                        <MenuItems slug="contact" />
                    </div>
                    <div className="text-[24px] font-[700] mb-[20px] mx-4 md:mx-0 lg:mx-0">
                        <h2>Daftar Kontak</h2>
                    </div>
                    <div className="bg-white rounded-md mx-4 md:mx-0 lg:mx-0 border">
                        <TableContacts
                            data={contacts}
                            loadingTable={isLoading}
                            handleOpenForm={_handleOpenForm}
                            // handleSendMessage={_handleSendMessage}
                            handleDefaultMessage={_handleDefaultMessage}
                            handleEdit={_handleEditData}
                            handleDelete={_handleDeleteData}
                        />
                    </div>
                    {openForm &&
                        <FormContact
                            data={form}
                            dataMsg={message}
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
}
