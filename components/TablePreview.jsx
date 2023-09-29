import React from 'react'

export default function TablePreview({data}) {
    return (
        <div>
            <table className="w-full border border-slate-200 !rounded-lg">
                <thead>
                    <tr>
                        <th className="text-[12px] text-neutral-600 font-[700] p-[9px]">NO</th>
                        <th className="text-[12px] text-neutral-600 font-[700] p-[9px]">KOPERASI</th>
                        <th className="text-[12px] text-neutral-600 font-[700] p-[9px]">TAHUN</th>
                        <th className="text-[12px] text-neutral-600 font-[700] p-[9px]">VOLUME USAHA</th>
                        <th className="text-[12px] text-neutral-600 font-[700] p-[9px]">SHU</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => 
                        <tr className="border border-b-slate-200 last:border-b-none" key={index}>
                            <td className="text-[13px] p-[9px]">#{index + 1}</td>
                            <td className="text-[13px] p-[9px]">{row.corp_name}</td>
                            <td className="text-[13px] p-[9px]">{row.year}</td>
                            <td className="text-[13px] p-[9px] text-right">Rp {row.business_volume}</td>
                            <td className="text-[13px] p-[9px] text-right">Rp {row.shu}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
