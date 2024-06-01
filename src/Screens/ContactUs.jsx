import React from 'react'
import Layout from './../Layout/Layout'
import Head from '../Components/Head'
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi'

function ContactUs() {
  const ContactData = [
    {
      id: 1,
      title: 'Email Us',
      info: 'Get contact to us essily by email.',
      icon: FiMail,
      contact: 'info@netflixo.com'
    },
    {
      id: 2,
      title: 'Call Us',
      info: 'Call me tonight',
      icon: FiPhoneCall,
      contact: '+84 376 073 869'
    },
    {
      id: 3,
      title: 'Location',
      info: 'University of Information Technology, Linh Trung, Thu Duc, Ho Chi Minh City',
      icon: FiMapPin,
      contact: '+84 75 898 888'
    }
  ];
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="Contact Us" />
        <div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
          {
            ContactData.map((item) => (
              <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                  <item.icon/>
                </span>
                <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
                <p className='mb-0 text-sm text-text leading-7'>
                  <a href={`mailto:${item.contact}`} className='text-blue-600'>{item.contact}</a> <br/>
                  {item.info}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs