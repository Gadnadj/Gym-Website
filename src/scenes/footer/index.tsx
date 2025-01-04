import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                {/* Logo and Description */}
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="Evogym Logo" />
                    <p className="my-5">
                        Discover a space where health and wellness meet. At Evogym, we provide
                        state-of-the-art facilities and personalized support to help you reach your fitness goals.
                        Join our community and elevate your fitness journey.
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>

                {/* Quick Links */}
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Our Programs</p>
                    <p className="my-5">Membership Options</p>
                    <p>About Us</p>
                </div>

                {/* Contact Information */}
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">We’re here to help with any questions or concerns. Get in touch with us today.</p>
                    <p className="">(333) 425-6825</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
