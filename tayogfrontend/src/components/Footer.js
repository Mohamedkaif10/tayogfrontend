import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] p-8 text-black">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-8">
          <Image
            src="/tayog.png"
            alt="Tayog"
            className=""
            width={248}
            height={64}
          />
          <div>
            <p className="font-medium text-sm mb-2 text-slate-500">
              Connect with Us
            </p>
            <div className="flex space-x-4">
              <InstagramIcon className="text-black" />
              <LinkedinIcon className="text-black" />
              <YoutubeIcon className="text-black" />
              <PanelTopCloseIcon className="text-black" />
            </div>
          </div>
          <p className="text-blue-600 mt-4">All rights reserved ©Tayog</p>
        </div>
        <div className="text-black">
          <h3 className="font-semibold text-blue-800 mb-4">Learn More</h3>
          <ul className="space-y-1 text-slate-500">
            <li>
              <Link className="text-sm" href="#">
                Thoughts
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Job Search
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Events
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Postings
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-blue-800 mb-4">About</h3>
          <ul className="space-y-1 text-slate-500">
            <li>
              <Link className="text-sm" href="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Contacts
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-transparent mb-4">Help</h3>
          <ul className="space-y-1 text-slate-500">
            <li>
              <Link className="text-sm" href="#">
                Need Help?
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Privacy Statement
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Terms of Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function PanelTopCloseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
