import Heading from '../components/Heading'
import Layout from '../components/Layout'
import skillsData from '../data/data.json'
import { SkillIconsMap } from '../data/SkillIconsMap'
import { useMyThemeContext } from "../context/ThemeContext"

const Skills = () => {

  const { theme } = useMyThemeContext();

  return (
    <>
      <div id='skills' className='py-25 max-sm:py-15'>
        <Layout>
          <Heading subHeading='My Expertise' mainHeading='Skills & Technologies' headingDescription='A comprehensive toolkit of modern technologies and frameworks' style={{ textAlign: 'center' }} />
          <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 pt-12 gap-6'>
            {skillsData.skillsData.map((item) => {

              const SkillIcons = SkillIconsMap[item.skillIcon];

              return (
                <div key={item.id} className='bg-[#0F172A] p-8 rounded-2xl border border-[#ffffff]/10 hover:border-[#6366F1] transition ease-in-out delay-50 group'>

                  <span className='text-2xl  bg-[#171F3E] text-[#6366F1] rounded-xl  flex justify-center items-center size-13'>{SkillIcons && <SkillIcons className='group-hover:text-3xl transition-all ease-in delay-50' />}</span>

                  <h3 className='text-xl font-semibold text-white pb-3 pt-5'>{item.skillHeading}</h3>
                  <p className='text-sm text-white/60'>{item.skillDescription}</p>

                  <ul className='pt-5'>
                    {item.skills.map((skill, index) => {
                      return (
                        <li key={index} className='p-2 bg-[#1E293B] inline-block rounded-lg my-1 me-2 text-sm text-white/60'>{skill}</li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Skills
