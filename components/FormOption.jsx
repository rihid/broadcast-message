import React from 'react'
import Button from './Button'
import Input from './Input'
import Icon from './Icon'

export default function FormOption({
    handleOpenForm,
}) {
    return (
        <div className="flex justify-between items-center p-[20px]">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon name="icon-search" size={20} />
                </div>
                <Input
                    type="search"
                />
            </div>
            <Button
                label="+ Kontak"
                onClick={handleOpenForm}
            />
        </div>
    )
}
