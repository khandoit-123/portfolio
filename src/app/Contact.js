import {Field, Fieldset, Input, Label, Select, Textarea} from '@headlessui/react'
import * as Yup from 'yup';

const Contact = () =>{
    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log('Submitted!')

        const selectedValue = e.target.query.value
        const name = e.target.name.value
        const email = e.target.email.value

        try {
            await Yup.string().required('Name is required').validate(name);
            await Yup.string().required('Please select a valid query').validate(selectedValue);
            await Yup.string().email('Invalid email format').required('Email is required').validate(email);
            alert('Form is valid! ✅');
          } catch (error) {
            alert(error.message)
            }
    }

    return(
        <div className="text-3xl font-bold text-center text-white">
            <h1 className="pt-10">Contact me!</h1>
            <form onSubmit={handleSubmit}>
                <Fieldset className='text-xl border-5 m-10 bg-black opacity-75'>
                    <Field className='flex flex-col items-center'>
                        <Label>Name</Label>
                        <Input name="name" className='text-center w-[30%] bg-white rounded-3xl p-3 text-black'/>
                    </Field>
                    <Field className='flex flex-col items-center'>
                        <Label>Query</Label>
                        <Select className='text-center w-[30%] bg-white rounded-3xl p-3 text-black' name="query">
                            <option value="">Select one</option>
                            <option>Freelance</option>
                            <option>Hiring</option>
                            <option>Interview</option>
                        </Select>
                    </Field>
                    <Field className='flex flex-col items-center'>
                        <Label>Email</Label>
                        <Input className='text-center w-[30%] bg-white rounded-3xl p-3 text-black' name="email"/>
                    </Field>
                    <button type="submit" className="mt-5 bg-white text-black px-6 py-2 rounded-2xl hover:bg-gray-300">
                        Submit
                    </button>
                </Fieldset>
            </form>
        </div>
    )
}

export default Contact