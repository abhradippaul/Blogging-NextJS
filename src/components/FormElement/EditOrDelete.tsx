import { SetStateAction } from 'react';
import SubmitButton from './SubmitButton'
import { updateBlog } from '@/utils/ConnectApi';

type PropsValue = {
  setEdit : React.Dispatch<SetStateAction<boolean>>
  functionality : () => void
}

function EditOrDelete({setEdit,functionality}:PropsValue) {
  return (
    <div>
        <SubmitButton children="Edit" setEdit={setEdit} className="border-2 text-xl mx-2 border-green-500 px-4 py-1  rounded-md hover:bg-green-500 hover:text-white sm:text-2xl" />
        <SubmitButton children="Delete" functionality={functionality} className="border-2 text-xl mx-2 border-red-500 px-4 py-1  rounded-md hover:bg-red-500 hover:text-white sm:text-2xl" />
    </div>
  )
}

export default EditOrDelete