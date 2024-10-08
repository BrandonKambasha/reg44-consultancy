import Image from 'next/image'
import { UserGroupIcon, ShieldCheckIcon, AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import myImage from '../../images/reg44.png'
import teamImage from '../../images/img3.jpeg'
import officeImage from '../../images/img9.avif'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 opacity-80"></div>
          <Image
            src={teamImage}
            alt="Team background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">About REG 44 CONSULTANCY</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">Pioneering the future of care with expertise and innovation</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At REG 44 CONSULTANCY, we are dedicated to supporting Semi Independent Accommodation and Residential Children's Home Providers across the United Kingdom. Our mission is to help organizations meet the needs of young people they support, ensuring the best possible outcomes for children and young adults in care settings.
              </p>
              <p className="text-gray-600 mb-4">
                We work with Local Authorities, Organizations, and private companies, offering our expertise to those working with Families on the Edge of Care, Children who are Looked After, Unaccompanied Asylum Seeking Children, Care Leavers, Migrant Families, and families from Black Asian and Ethnic Minority Backgrounds.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl">
              <Image src={myImage} alt="REG 44 CONSULTANCY Team" width={600} height={400} className="rounded-lg" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: UserGroupIcon, title: "Expertise", description: "We bring over 20 years of experience in Local Authorities to every project." },
                { icon: ShieldCheckIcon, title: "Quality", description: "We uphold the highest standards in our services and recommendations." },
                { icon: AcademicCapIcon, title: "Innovation", description: "We continuously seek new ways to improve care standards and practices." },
              ].map((value, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                  <value.icon className="h-12 w-12 text-orange-300 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Team's Expertise</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-3xl font-bold text-blue-600">Safeguarding</span>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600">Our team includes experienced Safeguarding Audit Officers, ensuring the highest standards of child protection in care settings.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-3xl font-bold text-blue-600">Quality Assurance</span>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600">With Quality Assurance Leads on our team, we help organizations implement robust quality management systems.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-3xl font-bold text-blue-600">Social Work</span>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600">Our team includes experienced Social Workers who understand the complexities of child care and protection.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <Image
            src={officeImage}
            alt="Office background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Ready to Elevate Your Care Standards?</h2>
            <a href="/contact" className="bg-gradient-to-r from-orange-400 to-blue-500 text-white hover:from-orange-500 hover:to-blue-600 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center">
              Get in Touch
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}