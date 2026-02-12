import wsu from "./assets/wsu.jpeg";
import deakin from "./assets/deakin.png";
import westpac from "./assets/westpac-light.png";
import macquarie from "./assets/macquarie-light.png";

export const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export const EDUCATION = [
  {
    title: "Western Sydney University",
    image: wsu,
    date: "2018 - 2020",
    degree: "Diploma in Engineering",
    achievements: [
      "Dean's Merit List recipient",
      "Western Sydney University Refugee Scholarship",
    ],
  },
  {
    title: "Deakin University",
    image: deakin,
    date: "2020 - 2024",
    degree: "Bachelor of Cyber Security",
    achievements: [
      "Member of Deakin Capture the Flag",
      "Deakin Student Support Scholarship",
    ],
  },
];

export const WORK_EXPERIENCE = {
  "Jul 2024 - Present": {
    team: "Cyber Automation",
    company: "Macquarie Group",
    logo: macquarie,
    role: "Senior Associate - Cyber Automation Engineer",
    description:
      "The Cyber Automation team is the central hub for all automation projects in Business and Financial Services (BFS) at Macquarie. They are responsible for understanding current manual processes and their issues, project planning and design, managing technology offerings and required architecture, and developing solutions to automate problems and save time and effort.",
    achievements: [
      "Automated penetration testers' manual process of bulk updating API policy controller configuration YAML files with new penetration test ticket IDs and penetration test data across different applications; built the APC Ticket Compliance full-stack solution using Python FastAPI for the backend and React for the frontend.",
      "Automated a High Risk manual process conducted by the GRC team that required them to drop other work; created an integration between SailPoint to manage ACG access (adding and removing users) and Slack to notify and collect approvals from the GRC team, saving time and allowing the team to focus on uplift and other priorities.",
      "Automated the manual process of managing HighQ data rooms that allow users to share documents to external personal emails, clients and suppliers, securely integrating Datarooms APIs with Slack for notifications and approvals.",
      "Performed DevOps operations using git for version control, Bitbucket Pipelines deployments and troubleshooting, Docker image management, cloud deployments to Google Cloud Platform, and Terraform configurations.",
      "Troubleshot legacy solutions, performed code reviews, and created test cases using pytest for the API while following code best practices.",
    ],
  },

  "Feb 2024 - Jul 2024": {
    team: "Information Security Operations",
    company: "Macquarie Group",
    logo: macquarie,
    role: "Graduate Associate - Information Security Engineer",
    description:
      "The Information Security team is responsible for the BFS cyber security posture: managing Data Loss Prevention (DLP) high-risk operations, conducting Cyber Culture and Strategy (CCS) phishing simulations and awareness activities, maintaining compliance with BFS Supplier Assurance aligned to standards like ISO27001 and CPS230, and ensuring GRC practices are followed division-wide.",
    achievements: [
      "Led automation initiatives, migrating from manual processes to automated workflows using technologies such as Python scripts, Microsoft Fabric (Power BI, Power Automate, SharePoint APIs, Lakehouse), and connecting to external data sources using Power BI service connectors.",
      "Developed PoC solutions and presented them to the team, demonstrating ease of use, time savings and effort reduction from automation.",
      "Created and managed team-specific Microsoft Fabric infrastructure including ACGs, DG, Power BI service, internal data source connections, Power Automate workflows, and Python APIs.",
      "Produced a PoC Swimlane Turbine to automate ingestion of Netskope alerts using Playbooks and webhooks.",
      "Automated the Supplier Assurance Notification process using Python scripts, Power Automate, MySupplier data connection and SharePoint list APIs to simplify manual work and report daily on supplier contracts due for review.",
      "Automated the Data Loss Prevention monthly reporting process, reducing time from one day to ten minutes and reducing effort from three staff to a one-click solution using Python scripts, Power BI, Power Automate, SharePoint APIs and Polonious cases data.",
      "Automated the Phishing Simulation monthly reporting process utilising Microsoft Fabric SaaS workflows: ingesting data from ProofPoint, transforming it, then loading it into a Power BI dashboard with row-level security for division heads.",
    ],
  },

  "Nov 2023 - Feb 2024": {
    team: "Information Security Operations",
    company: "Macquarie Group",
    logo: macquarie,
    role: "Internship - Information Security Analyst",
    description:
      "The Information Security team supports the BFS cyber security posture by managing DLP high-risk operations, conducting phishing simulations and awareness activities, maintaining supplier assurance compliance, and ensuring GRC practices across the division.",
    achievements: [
      "Conducted monthly phishing simulation data analysis using ProofPoint and Excel to report staff who clicked or reported simulations across teams, departments and divisions with monthly and yearly overviews for leadership.",
      "Handled data room creation requests to enable secure file sharing outside Macquarie with clients and vendors.",
      "Assisted onboarding of Box.com by developing a PoC, troubleshooting network issues and liaising with the Box team while documenting the process.",
      "Investigated Slack and Teams internal communications using McAfee and Netskope to report on any passwords, API keys or other sensitive information shared in public channels or outside the company to comply with DLP practices.",
      "Investigated web uploads and removable media activities involving Macquarie PII and sensitive data to unauthorised websites.",
      "Created cases using Polonious to report investigation findings and worked on DLP reporting outcomes to division heads.",
    ],
  },

  "Dec 2022 - Feb 2023": {
    team: "Engagement & Operations",
    company: "Macquarie Group",
    logo: macquarie,
    role: "Internship - Governance Risk & Compliance Analyst",
    description:
      "The E&O Team supports teams across ICS by combining processes, technology and people and working with finance, HR and business management to deliver licensing, vendor management, risk assessment and other services to manage cyber risk across Macquarie.",
    achievements: [
      "Applied business analytical skills to interpret and document business processes, products and services by analysing available data and reporting results to management.",
      "Completed an ICS-wide glossary covering new terminologies and software technologies used by different teams, business components and Agile Jira concepts for reference.",
      "Improved documentation of E&O processes by prioritising key processes and clarifying required approvals and data sources.",
      "Delivered a data model visualising entities and related data to improve clarity.",
      "Established people plans for ICS events, processes and deliverables mapped to ICS services.",
    ],
  },

  "Nov 2021 - Feb 2022": {
    team: "Critical Protective Controls (CPC)",
    company: "Westpac Banking Corporation",
    logo: westpac,
    role: "Internship - Cyber Security Analyst (SOC)",
    description:
      "The CPC Team monitors security events across the company using SIEM techniques to detect, mitigate and respond to security incidents. My role involved analysing events from multiple systems and collaborating with ISG teams.",
    achievements: [
      "Performed daily health checks using ArcSight to ensure processes were running, monitored service health via logs and looked for indicators of compromise (IOCs).",
      "Used Splunk to collect alerts and event logs, filter specific logs, and visualise data using transformation and chart commands.",
      "Identified noisy Windows events for blacklisting using event log filtering and used Splunk to assess Windows Event Log licence usage.",
      "Managed cryptographic key lifecycles in PKI by processing certificate renewal requests, provisioning certificates and retiring expired ones.",
      "Updated the VMS (Vendor Management System) calendar in Outlook and Excel by removing duplicates and extending periods while maintaining event frequency.",
      "Helped migrate infrastructure event monitoring to a mobile-friendly view by adding visualisation add-ons and integrating them with Checkmk.",
    ],
  },

  "Nov 2020 - Jul 2021": {
    team: "Technology Asset & Contract Management (TACM)",
    company: "Westpac Banking Corporation",
    logo: westpac,
    role: "Internship - Technology Asset Service Management",
    description:
      "The TACM team manages software and hardware assets for the WBC group. My role focused on data analysis within the project team to ensure high-quality data for stakeholders.",
    achievements: [
      "Matched WBC's Approved Technology Products with a Vendor Supplied Software Catalogue (Excel).",
      "Wrote fuzzy matching logic in Python to link unmatched installer evidence with the appropriate software product from the Vendor Supplied Software Catalogue.",
      "Wrote a data transformation script in Python to load data into TACM's reporting tool.",
      "Gained exposure to the ServiceNow service management tool to map infrastructure to business applications.",
      "Performed large-scale data analysis in Excel (over 300,000 rows) to validate the impact of recent changes to the vendor-supplied product catalogue.",
    ],
  },
};
