import React from 'react'
import SubmitButton from './SubmitButton'

function EditOrDelete() {
  return (
    <div>
        <SubmitButton children="Edit" className="border-2 text-xl mx-2 border-green-500 px-4 py-1  rounded-md hover:bg-green-500 hover:text-white sm:text-2xl" />
        <SubmitButton children="Delete" className="border-2 text-xl mx-2 border-red-500 px-4 py-1  rounded-md hover:bg-red-500 hover:text-white sm:text-2xl" />
    </div>
  )
}

export default EditOrDelete