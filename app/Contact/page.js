'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div>
        <NavBar></NavBar>
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#016faa] to-[#47a8bd] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            We have everything to help you run your business smoothly. Get your free demo today!
            </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-solutions-blue-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-solutions-blue-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Company
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-solutions-blue-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
                </label>
                <div className="mt-2.5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-solutions-blue-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
                </label>
                <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                    Country
                    </label>
                    <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-solutions-blue-600 sm:text-sm"
                    >
                    <option>IND</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                    
                    </select>
                    <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                    />
                </div>
                <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-solutions-blue-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
                </label>
                <div className="mt-2.5">
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-solutions-blue-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                </div>
            </div>
            </div>
            <div className="mt-10">
            <button
                type="submit"
                className="block w-full rounded-md bg-solutions-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-solutions-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solutions-blue-600"
            >
                Let&apos;s talk
            </button>
            </div>
        </form>
        </div>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                    <p className="mt-4 leading-7 text-gray-600">
                    Connect with the right team for your needs.
                    </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-gray-50 p-10">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                        <div>
                            <dt className="sr-only">Email</dt>
                            <dd>
                            <a className="font-semibold text-solutions-blue-600" href="mailto:solutions_is@yahoo.com">
                            solutions_is@yahoo.com
                            </a>
                            </dd>
                        </div>
                        <div className="mt-1">
                            <dt className="sr-only">Phone number</dt>
                            <dd>+91 98250 25522</dd>
                        </div>
                        </dl>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-10">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Sales & Demo</h3>
                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                        <div>
                            <dt className="sr-only">Email</dt>
                            <dd>
                            <a className="font-semibold text-solutions-blue-600" href="mailto:press@example.com">
                                sagar@solutions-is.com
                            </a>
                            </dd>
                        </div>
                        <div className="mt-1">
                            <dt className="sr-only">Phone number</dt>
                            <dd>+91 92271 88814</dd>
                        </div>
                        </dl>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-10">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                        <div>
                            <dt className="sr-only">Email</dt>
                            <dd>
                            <a className="font-semibold text-solutions-blue-600" href="mailto:sumedh@solutions-is.com">
                                sumedh@solutions-is.com
                            </a>
                            </dd>
                        </div>
                        {/* <div className="mt-1">
                            <dt className="sr-only">Phone number</dt>
                            <dd>+1 (555) 905-4567</dd>
                        </div> */}
                        </dl>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-10">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Customer Support</h3>
                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                        <div>
                            <dt className="sr-only">Email</dt>
                            <dd>
                            <a className="font-semibold text-solutions-blue-600" href="mailto:support@solutions-is.com">
                            support@solutions-is.com
                            </a>
                            </dd>
                        </div>
                        <div className="mt-1">
                            <dt className="sr-only">Phone number</dt>
                            <dd>+91 84695 82395</dd>
                        </div>
                        </dl>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='bg-white mx-auto flex justify-center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4419991864265!2d73.17308067588867!3d22.26124074430904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc79be7fdaf2b%3A0x15c89cc2a8086f6!2sSolutions!5e0!3m2!1sen!2sca!4v1708224431793!5m2!1sen!2sca" 
        width="800" 
        height="600" 
        style={{border: '0'}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        </div>
        <Footer></Footer>
    </div>
    
  )
}
