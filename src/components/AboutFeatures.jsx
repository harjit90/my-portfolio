
const AboutFeatures = ({count, text}) => {
  return (
    <>
      <div className='py-5 text-center bg-[#1E293B] rounded-lg'>
        <h2 className='text-4xl font-bold text-[#6366F1] pb-3'>{count}</h2>
        <p className='text-white/60'>{text}</p>
      </div>
    </>
  )
}

export default AboutFeatures
