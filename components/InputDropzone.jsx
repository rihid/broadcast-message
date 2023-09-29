import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'


export default function InputDropzone({ handleUpload }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    // console.log(acceptedFiles)
    if (!handleUpload) return;
    handleUpload(acceptedFiles)

  }, [handleUpload])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div
      className="py-[100px] border-[2px] border-dashed border-slate-200 rounded-lg"
      {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p className="text-center text-[14px] cursor-pointer">Drop the excels files here ...</p> :
          <p className="text-center text-[14px] cursor-pointer">Drag n drop some excels here, or click to select files</p>
      }
    </div>
  )
}