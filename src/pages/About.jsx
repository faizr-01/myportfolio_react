import React from 'react'
import { Header } from '../components/Header'
import { Link } from 'react-router-dom'
import { svg_skill } from '../assets/icons/Icon'
// import profile_pic from '../assets/imgs/profile_pic.png'

export const About = () => {
  return (
    <div>
      <Header />

      <div className='grid place-items-center mt-10 mx-5'>
        <div>
          <div className='min-md:flex'>
            <div className='min-md:basis-3/4 grid content-center font-khand text-web-text2 text-lg'>
              <p>You can call me Faiz.</p>
              <p>Completed my degree studies on December 2023.</p>
              <p>Started to involved myself in programming in year of 2019. </p>
              <p>Pursued my studies at SEGI college Kuala Lumpur.</p>
            </div>
            <div className='min-md:basis-1/4 grid content-center mx-20 max-md:my-10'>
              <div className='min-md:flex min-md:justify-end max-md:pt-5 max-md:flex max-md:justify-center'>
                <div>
                  <div className="avatar">
                    <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      {/* import from src */}
                      {/* <img src={profile_pic} /> */}
                      {/* import from public */}
                      <img src="assets/imgs/profile_pic.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4 font-khand text-web-text2 text-lg'>
            <p>My programming skills and learning experience have expose me to be able create a few <Link to={'/project'} className='text-web-text1'>project</Link>.</p>
            <p>A lot of tools and technologies I have used in the past few years from beginning until now.</p>
          </div>
          <div className='mt-5 font-khand text-lg text-web-text1 font-bold'>
            <div className='mb-10'>
              <h4>Programming Languages</h4>
              <div className='grid grid-cols-5 gap-5 w-fit mt-4 bg-web-back2 p-5 rounded-xl shadow-xl'>
                <img src={svg_skill.cs} />
                <img src={svg_skill.python} />
                <img src={svg_skill.java} />
                <img src={svg_skill.javascript} />
                <img src={svg_skill.php} />
              </div>

            </div>
            <div className='mb-10'>
              <h4>Framework/Library</h4>
              <div className='grid grid-cols-8 gap-5 w-fit mt-4 bg-web-back2 p-5 rounded-xl shadow-xl'>
                <img src={svg_skill.laravel} />
                <img src={svg_skill.django} />
                <img src={svg_skill.dotnet} />
                <img src={svg_skill.react} />
                <img src={svg_skill.cordova} />
                <img src={svg_skill.android} />
                <img src={svg_skill.bootstrap} />
                <img src={svg_skill.tailwind} />
              </div>
            </div>
            <div className='mb-10'>
              <h4>Version control</h4>
              <div className='grid grid-cols-2 gap-5 w-fit mt-4 bg-web-back2 p-5 rounded-xl shadow-xl'>
                <img src={svg_skill.github} />
                <img src={svg_skill.gitlab} />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}
