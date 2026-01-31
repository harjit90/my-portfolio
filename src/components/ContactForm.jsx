import Button from './Button';
import { useMyThemeContext } from "../context/ThemeContext"

const ContactForm = () => {

    const { theme } = useMyThemeContext();

    return (
        <>
            <form action="/submit-page" method="POST">
                <div className='flex flex-row max-sm:flex-col gap-6'>

                    <div className='pb-5 max-sm:pb-0 flex flex-col w-1/2 max-sm:flex-col max-sm:w-full'>
                        <label htmlFor="name" className='text-white pb-3'>Name:</label>
                        <input type="text" id="name" name="user_name" placeholder='Your name' required className='bg-[#020617] p-2 rounded-md border border-[#ffffff]/50 text-white/60' />
                    </div>

                    <div className='pb-5 flex flex-col w-1/2 max-sm:flex-col max-sm:w-full'>
                        <label htmlFor="mail" className='text-white pb-3'>E-mail:</label>
                        <input type="email" id="mail" name="user_email" placeholder='your@email' required className='bg-[#020617] p-2 rounded-md border border-[#ffffff]/50 text-white/60' />
                    </div>
                </div>

                <div className='grid grid-rows-1 pb-5'>
                    <label htmlFor="subject" className=' text-white pb-3'>Subject:</label>
                    <input type="text" id="subject" name="subject" placeholder='How can I help you?' required className='bg-[#020617] p-2 rounded-md border border-[#ffffff]/50 text-white/60' />
                </div>

                <div className='grid grid-rows-1 pb-5'>
                    <label htmlFor="msg" className='text-white pb-3'>Message:</label>
                    <textarea id="msg" name="user_message" rows={5} placeholder='Tell me about your project' required className='bg-[#020617] p-2 rounded-md border border-[#ffffff]/50 text-white/60'></textarea>
                </div>

                <div className='flex text-center'>
                    <Button style={{ width: '100%', backgroundColor: '#6366F1', color: '#ffffff' }}>Send Message</Button>
                </div>
            </form>
        </>
    )
}

export default ContactForm
