import { React, useState } from 'react'
import TablePreview from './TablePreview'
import Icon from './Icon';

export default function Accordion({ title, data, handleClickAccordion }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded((current) => !current)
    }

    return (
        <div className="relative mt-4 text-blue-800 rounded-lg bg-blue-50">
            <div className="flex items-center p-4" onClick={toggleExpanded}>
                <div className="flex items-center">
                    <span className="flex-none">{expanded ? 
                        <Icon name="arrow-down" size={12} /> : 
                        <Icon name="arrow-up" size={12} />}
                    </span>
                    <span className="sr-only">Info</span>
                    <p className="ml-2 text-sm font-medium">{title}</p>
                </div>

            </div>
            <button
                type="button"
                className="absolute top-3 right-3 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8" onClick={handleClickAccordion}>
                <span className="sr-only">Close</span>
                <Icon name="icon-close" size={12} />
            </button>
            <div className={`overflow-auto transition-[max-height] duration-500 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
                <TablePreview data={data} />
            </div>
        </div>

    )
}
