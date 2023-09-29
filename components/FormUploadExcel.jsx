import { useState } from 'react'
import { ButtonIcon, Button, InputDropzone, Accordion } from '.'

export default function FormUploadExcel({
    data,
    dataMsg,
    method,
    handleOpen,
    loadingForm,
    handleChange,
    handleClickAccordion,
    handleUpload,
    handleSubmit
}) {

    const _handleSubmit = (e) => {
        e.preventDefault();
        if (!handleSubmit) return;
        handleSubmit()
    }
    // console.log(data)
    const _handleUpload = (acceptedFiles) => {
        console.log(acceptedFiles);
        if (!acceptedFiles) return;
        readXlsxFile(acceptedFiles[0]).then((rows) => {
            console.log(rows)
            const results = rows.map((row, index) => (
                index > 0 ?
                    ({
                        // corp_id: row[0],
                        // corp_name: row[1],
                        // chairman_name: row[2] || "",
                        // secretary_name: row[3] || "",
                        // treasurer_name: row[4] || "",
                        // number_of_members: row[5],
                        // number_of_employees: row[6],
                        // number_of_manager: row[7],
                        // inside_capital: row[8],
                        // outside_capital: row[9],
                        // assets: row[10],
                        // business_volume: row[11],
                        // shu: row[12],
                        // month: row[13],
                        // year: row[14],
                    })
                    : null

            )).filter(row => row);

            if (handleUpload) {
                handleUpload(results)
                console.log(results)
            }
            // `rows` is an array of rows
            // each row being an array of cells.
        })
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000d4]">
            <div className="fixed top-0 right-0 w-full md:w-[440px] h-full bg-white overflow-auto">
                <div className="flex justify-between border-b">
                    <div className="p-4">
                        <div className="text-[20px] font-[700]">{method === 'POST' ? 'Tambah Data' : 'Edit Data'}</div>
                    </div>
                    <div className="p-4">
                        <ButtonIcon icon="icon-close" size={12} onClick={handleOpen} />
                    </div>
                </div>
                <form
                    onSubmit={_handleSubmit}
                    className="flex flex-col gap-[20px] p-4"
                >
                    <div className="">
                        <InputDropzone handleUpload={_handleUpload} />
                        {data.length > 0 &&
                            <section className="max-w-6xl mx-auto">
                                <Accordion
                                    title="Preview Data" 
                                    data={data}
                                    handleClickAccordion={handleClickAccordion}
                                />
                            </section>
                        }
                    </div>

                    <div className="grid grid-cols-1">
                        <Button
                            type="submit"
                            color="primary"
                            label={loadingForm ? 'Loading...' : 'Simpan'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
