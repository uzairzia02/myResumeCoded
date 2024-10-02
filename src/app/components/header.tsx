import Image from "next/image";
import profilePic from "./profilePicc.jpg";
import chase from "./chaseValueLogo.jpg";
import ronin from "./ronin.jpg"

export default function Header() {
  return (
    <div className="all">
      <div className="header">
        <div className="personalInfoArea">
          <h1>UZAIR ZIA</h1>
          <p>Address:&emsp;Block 9, FB Area, Karachi</p>
          <p>Phone:&emsp;&emsp;0334-3543884</p>
          <p>E-mail:&emsp;&emsp;Uzair9900@hotmail.com</p>
          <a
            href="https://www.linkedin.com/in/uzair-zia-67730790/"
            target="blank"
          >
            LinkedIn:&emsp;Uzair Zia
          </a>
        </div>
        <div className="image">
          <Image src={profilePic} alt="Profile Picture" />
        </div>
      </div>

      <div className="summary">
        <p className="professionalSummary">
          Dedicated and adaptable HR professional with a keen understanding of
          HR principles, exceptional interpersonal skills, and a proven track
          record of effective multitasking. Experienced in managing the complete
          spectrum of HR functions, from talent acquisition to employee
          engagement and policy development. Seeking a dynamic role in Human
          Resource with a forward-thinking organization, to deliver high-level
          support and contribute in the growth.
        </p>
      </div>

      <div className="skills">
        <h3>SKILLS</h3>

        <li>Talent Acquisition</li>
        <li>Employee engagement</li>
        <li>Policy development</li>
        <li>Data Analysis and Reporting</li>
        <li>Attention to detail</li>
        <li>MS Office</li>
      </div>

      <div className="education">
        <h3>EDUCATION</h3>
        <div className="educationStyle">
          <div className="duration">
            <p>Jan 2018 - May 2021</p>
            <br />
            <p>May 2012 - Jun 2016</p>
            <br />
            <p>Jul 2009 - Jun 2011</p>
          </div>
          <div className="degree">
            <p>MBA : HR</p>
            <br />
            <p>B.Sc</p>
            <br />
            <p>Intermediate</p>
          </div>
          <div className="institution">
            <a href="https://iqra.edu.pk/" target="_blank">
              Iqra University
            </a>
            <br />
            <br />
            <a href="https://uok.edu.pk/" target="_blank">
              Karachi University
            </a>
            <br />
            <br />
            <a>Govt. Islamia Science College</a>
          </div>
        </div>
      </div>
      <h3>WORK HISTORY</h3>
      <div className="workHistory">
        <div className="tenure">Dec 2023 - Present</div>
        <div className="designation">
          <div className="designationElement">
            <a href="https://chasevalue.pk/" target="_blank">
              Chase Value
            </a>
            <br /> HR Executive
          </div>

          <li className="listElementWorkHistory">
            Responsible for complete recruitment and ongoing talent acquisitions
          </li>
          <li className="listElementWorkHistory">
            Evaluating applications and screening candidates via call.
          </li>
          <li className="listElementWorkHistory">
            Sourcing candidates through career portals, LinkedIn, personal
            references, and social media platforms.
          </li>
          <li className="listElementWorkHistory">
            Manage the entire hiring process, including scheduling interviews,
            conducting reference checks, and extending job offers. Build
            relationships with candidates to ensure a positive candidate
            experience.
          </li>
          <li className="listElementWorkHistory">
            Managed employee life cycle i.e. hiring, onboarding, orientation,
            off boarding.
          </li>
        </div>
        <div className="logo">
          <a href="https://chasevalue.pk/" target="_blank">
            <Image src={chase} alt="ChaseValue" />
          </a>
        </div>
      </div>


      <div className="workHistory2">
        <div className="tenure">Jun 2021 - Dec 2023</div>
        <div className="designation">
          <div className="designationElement">
            <a href="https://ronin.pk/" target="_blank">
              Ronin Lifestyle Gadgets{" "}
            </a>
            <br /> Assistant Manaer HR
          </div>

          <li className="listElementWorkHistory">
          Responsible for complete recruitment and ongoing talent acquisitions of the company.
          </li>
          <li className="listElementWorkHistory">
            Evaluating applications and screening candidates via call.
          </li>
          <li className="listElementWorkHistory">
            Sourcing candidates through career portals, LinkedIn, personal
            references, and social media platforms.
          </li>
          <li className="listElementWorkHistory">
          Manage recruitment tracker, dashboards, and daily HR reporting.
          </li>
          <li className="listElementWorkHistory">
          Process required HR documents; approvals, offers, appointments, confirmations, internship
          contracts, job descriptions, policies, and organograms.
          </li>
          <li>Managed employee life cycle i.e. hiring, onboarding, orientation, off boarding</li>
          <li>Making policies and procedures</li>
          <li>Act as first point of contact for employee concerns and inquiries, while maintained a positive work
          environment</li>


        </div>
        <div className="roninLogo">
          <a href="https://ronin.pk/" target="_blank">
            <Image src={ronin} alt="Ronin" />
          </a>
        </div>
      </div>
    </div>
  );
}
