import { SetStateAction } from 'react';
import SubmitButton from './SubmitButton'

type PropsValue = {
  setEdit : React.Dispatch<SetStateAction<boolean>>
}

function EditOrDelete({setEdit}:PropsValue) {
  return (
    <div>
        <SubmitButton children="Edit" setEdit={setEdit} className="border-2 text-xl mx-2 border-green-500 px-4 py-1  rounded-md hover:bg-green-500 hover:text-white sm:text-2xl" />
        <SubmitButton children="Delete" setEdit={setEdit} className="border-2 text-xl mx-2 border-red-500 px-4 py-1  rounded-md hover:bg-red-500 hover:text-white sm:text-2xl" />
    </div>
  )
}

export default EditOrDelete