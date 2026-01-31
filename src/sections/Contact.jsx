import Heading from '../components/Heading'
import Layout from '../components/Layout'
import ContactCard from '../components/ContactCard'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import ContactForm from '../components/ContactForm';
import { useMyThemeContext } from "../context/ThemeContext"

const Contact = () => {

  const { theme } = useMyThemeContext();

  return (
    <>
      <div id='contact' className='py-25 max-sm:py-15' /* style={{ backgroundColor: theme && '#ffffff' }} */>
        <Layout>
          <Heading subHeading='Get In Touch' mainHeading='Lets Work Together' headingDescription='Have a project in mind? Lets discuss how I can help bring your ideas into life' style={{ textAlign: 'center' }} />
          <div className='grid grid-cols-3 max-sm:grid-cols-1 pt-12 gap-6'>
            <ContactCard icon={<FaEnvelope />} contactTitle='Email' contactText='mehmi.harjit@gmail.com' />

            <ContactCard icon={<FaPhone />} contactTitle='Phone' contactText='+91 (797) 303-2770' />

            <ContactCard icon={<FaLocationDot />} contactTitle='Location' contactText='Jalandhar, Punjab, India' />
          </div>
          <div className='mt-10 p-10 max-sm:p-6 bg-[#0F172A] rounded-2xl border border-[#ffffff]/10'>
            <ContactForm />
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Contact
