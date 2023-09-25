import React from 'react'
import Button from './Button'
import Input from './Input'
import Icon from './Icon'

export default function FormOption({
    handleOpenForm,
    searchField,
    setSearchField
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
            <Button
                label="+ Kontak"
                onClick={handleOpenForm}
            />
        </div>
    )
}
