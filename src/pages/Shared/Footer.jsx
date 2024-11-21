const Footer = () => {
  return (
    <footer className="footer p-10">
      <div>
        <img
          className="h-[50px]"
          src="https://t4.ftcdn.net/jpg/05/28/69/29/240_F_528692947_a24JXuek0FtFN2GVUwf0vNvBHltKbGkC.jpg"
          alt="Airlines"
        />
        <p>
          Head Office,
          <br />
          Balaka, Kurmitola,
          <br />
          Dhaka-1229, Bangladesh.
        </p>
      </div>
      <div>
        <span className="text-2xl text-green-700 footer-title">
          Useful Links
        </span>
        <a href="#" className="text-lg link link-hover">
          Accessibility Plan
        </a>
        <a href="#" className="text-lg link link-hover">
          Latest News
        </a>
        <a href="#" className="text-lg link link-hover">
          Feedback
        </a>
        <a href="#" className="text-lg link link-hover">
          Careers
        </a>
        <a href="#" className="text-lg link link-hover">
          Contacts
        </a>
        <a href="#" className="text-lg link link-hover">
          Tender
        </a>
      </div>
      <div>
        <span className="text-2xl text-green-700 footer-title">
          Other Links
        </span>
        <a href="#" className="text-lg link link-hover">
          Biman Govt. Portal
        </a>
        <a href="#" className="text-lg link link-hover">
          Biman Flight Catering Centre
        </a>
        <a href="#" className="text-lg link link-hover">
          Civil Aviation Authority, Bangladesh
        </a>
        <a href="#" className="text-lg link link-hover">
          Ministry of Health and Family Welfare
        </a>
        <a href="#" className="text-lg link link-hover">
          Parjatan Corporation
        </a>
      </div>
      <div>
        <span className="text-2xl text-green-700 footer-title">
          Travel Agents
        </span>
        <a href="#" className="text-lg link link-hover">
          Online Travel Agency
        </a>
        <a href="#" className="text-lg link link-hover">
          Booking Policy
        </a>
        <a href="#" className="text-lg link link-hover">
          ADM Policy
        </a>
      </div>
      <div>
        <span className="text-2xl text-green-700 footer-title">Follow Us</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
