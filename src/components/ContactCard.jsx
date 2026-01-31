
const ContactCard = ({ icon, contactTitle, contactText }) => {
    return (
        <>
            <div className='bg-[#0F172A] py-8 rounded-2xl border border-[#ffffff]/10 hover:border-[#6366F1] transition ease-in-out delay-50 text-center group'>
                <div className='text-2xl  bg-[#171F3E] text-[#6366F1] rounded-full size-15 mx-auto leading-15 flex items-center justify-center group-hover:text-3xl transition-all ease-in delay-50'>{icon}</div>
                <h3 className='text-xl font-semibold text-white pb-1 pt-5'>{contactTitle}</h3>
                <a href="#" className='text-sm text-white/60'>{contactText}</a>
            </div>
        </>
    )
}

export default ContactCard
