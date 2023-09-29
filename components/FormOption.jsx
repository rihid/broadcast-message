import React from 'react'
import Button from './Button'
import Input from './Input'
import Icon from './Icon'

export default function FormOption({
    handleOpenForm,
    handleOpenFormExcel,
    searchField,
    setSearchField,
    withExportExcel,
}) {
    return (
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center p-[20px]">
            <div className="relative w-full md:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon name="icon-search" size={20} />
                </div>
                <Input
                    type="search"
                    placeholder="Cari..."
					value={searchField}
					onChange={(e) => setSearchField(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full items-center md:flex-row md:justify-end gap-4">
                {withExportExcel && 
                    <Button
                        label="+ Excel"
                        color="secondary"
                        onClick={handleOpenFormExcel}
                    />
                }
                <Button
                    label="+ Kontak"
                    color="primary"
                    onClick={handleOpenForm}
                />
            </div>
        </div>
    )
}
