import Link from "next/link";
import SocialLink from "../SocialLink";

const Contact = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-[50px] right-[50px] bottom-0 bg-secondary rounded-[20px]"></div>
      <div className="container py-[110px] relative z-1">
        <div className="flex justify-between">
          <div>
            <div className="text-lg text-accent mb-[20px]">
              Do you have a project in mind?
            </div>
            <h2 className="title mb-[100px]">Let’s work together</h2>
            <div className="flex items-center">
              <ul>
                <li>
                  <SocialLink />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Link href="/projects" className="text-lg ghost-cta-circle">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
