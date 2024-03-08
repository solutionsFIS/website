import Footer from "../components/footer";
import NavBar from "../components/navBar";
import { CheckCircleIcon, InformationCircleIcon, BookOpenIcon , ShieldCheckIcon, ChatBubbleLeftRightIcon} from '@heroicons/react/20/solid'

export default function AboutUs() {
    return(
        <div>
            <NavBar></NavBar>
            <div className="bg-white px-6 py-12 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    <span className="font-bold text-solutions-blue-900">Solutions - For Information Systems:</span> Your trusted partner in hospitality software solutions, delivering excellence since <span className="font-bold">1996.</span>
                    </p>
                </div>
            </div>
            <div className="bg-white px-6 py-2 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-solutions-blue-600">Company</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solutions - For Information Systems</h1>
        <p className="mt-6 text-xl leading-8">
        Since our founding in 1996, Solutions has been a beacon of excellence in the hospitality software industry. With a rich history spanning over two decades, we have earned the trust of over 500 businesses worldwide, becoming their go-to partner for all their software needs.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
          At Solutions, we understand the unique challenges faced by hospitality businesses, which is why we've dedicated ourselves to providing tailored software solutions that address your specific needs. Whether you're a boutique hotel, a bustling restaurant, or a sprawling resort, our team is here to help streamline your operations and elevate your business to new heights.
          </p>
          <br></br>
          <p>
          Our commitment to excellence extends beyond just delivering software - it's about building lasting relationships with our clients. From initial consultation to ongoing support, we're here for you every step of the way, ensuring that you have the tools and resources you need to succeed.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <ChatBubbleLeftRightIcon className="mt-1 h-5 w-5 flex-none text-solutions-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Customer Service:</strong> Our dedicated support team ensures you're never left in the dark, providing assistance whenever you need it.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-solutions-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Reliability:</strong> With a proven track record spanning over two decades, we're the dependable partner your business can rely on.
              </span>
            </li>
            <li className="flex gap-x-3">
              <BookOpenIcon className="mt-1 h-5 w-5 flex-none text-solutions-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Expertise:</strong> Benefit from the collective knowledge and experience of our seasoned professionals, who craft tailored solutions to suit your unique needs.
              </span>
            </li>
          </ul>
          <p className="mt-8">
          With Solutions by your side, you can trust that you're getting more than just a software provider - you're getting a partner who is invested in your success. Join the hundreds of businesses who have already experienced the Solutions difference and discover what we can do for you.
          </p>
      </div>
    </div>
    </div>
            <Footer></Footer>
        </div>
    )
}