import { CursorArrowRaysIcon, WrenchScrewdriverIcon, FingerPrintIcon, ServerStackIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Customizibility',
      description:
        'Tailor our software to fit your unique business needs with customizable features and modules, allowing you to optimize your operations and workflows.',
      icon: WrenchScrewdriverIcon,
    },
    {
      name: 'Local Server',
      description:
        'Enjoy the reliability and speed of a local server, ensuring seamless access to your data without worrying about internet connectivity issues.',
      icon: ServerStackIcon,
    },
    {
      name: 'Free Training',
      description:
        'Maximize the potential of our software with comprehensive training sessions provided by our expert team, ensuring your staff is equipped with the knowledge and skills to succeed.',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Advanced security',
      description:
        'Rest easy knowing your data is safe and secure with our robust security measures, safeguarding your business against potential threats and breaches.',
      icon: FingerPrintIcon,
    },
  ]

export default function Features() {

    return(
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-solutions-blue-600">Streamline Operations</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Unveiling the Power of Solutions Software Suite
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Elevate Your Hospitality Business with Our Cutting-Edge Features
                </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-solutions-blue-600">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
        </div>
    )
}