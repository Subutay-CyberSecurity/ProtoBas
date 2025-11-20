🌐 ProtoBas | Protocol Baseline: A Comprehensive Reference for Network and Security Fundamentals

🚀 Project Mission

ProtoBas (Protocol Baseline) is a dedicated, open-source repository meticulously curated by the Subutay Cyber Security team. The primary mission of this project is to serve as a highly structured and readily accessible baseline reference for fundamental network protocols and their associated port assignments, with a specific focus on their relevance in the context of cybersecurity and infrastructure management.

This resource is designed for a diverse audience, including aspiring cybersecurity analysts, network engineers, penetration testers, and academic researchers, offering a clear and pragmatic approach to understanding the mechanics, security implications, and common attack vectors associated with essential internet protocols.

✨ Key Features & Design Principles

The architecture of the ProtoBas repository is intentionally designed for maximum usability, navigability, and pedagogical value:

    Port-Centric Organization: The core of the repository is structured around standardized port numbers (both **TCP** and **UDP**). Each protocol is housed within a dedicated directory named using the format [Port_Number]_[Protocol_Name], enabling users to instantly correlate services with their transport identifiers.

        Example: 443_Hyper_Text_Transfer_Protocol_Secure

    Educational Focus: While serving as a reference, the content within each protocol directory is tailored to highlight security best practices, common vulnerabilities (e.g., unencrypted protocols, configuration flaws), and the role of the protocol in network reconnaissance.

    Web Interface (Static **HTML**/**CSS**/JS): The inclusion of index.html, Style.css, and Script.js signifies a built-in static web interface. This allows the entire knowledge base to be easily deployed or viewed locally via a web browser, transforming the repository files into an interactive, self-contained educational platform.

    Modular and Extensible: The modular file structure makes it straightforward to add new protocols, update existing information, or integrate additional educational materials without disrupting the overall organization.

📁 Repository Structure and Protocol Coverage

The ProtoBas repository systematically covers a wide spectrum of Application Layer protocols and underlying security mechanisms, grouped here by function:

## Web & Secure Communications

These directories focus on the backbone of web access and secure data transmission.
Port	Protocol Name	Description
80	Hyper_Text_Transfer_Protocol (**HTTP**)	The foundational protocol for data communication on the World Wide Web.
**443**	Hyper_Text_Transfer_Protocol_Secure (**HTTPS**)	**HTTP** communication over **TLS**/**SSL** for encryption and integrity.
- **SSL** (Secure Sockets Layer)	Legacy cryptographic protocol for securing communications (kept for historical context).
- **TLS** (Transport Layer Security)	The modern successor to **SSL**, providing end-to-end encryption.

## Mail Transfer & Access

Essential protocols governing the sending and retrieval of electronic mail.
Port	Protocol Name	Description
25	Simple_Mail_Transfer_Protocol (**SMTP**)	Used for sending emails between mail servers.
**110**	Post_Office_Protocol (**POP3**)	Used by email clients to retrieve mail from a server, often removing it.
**143**	Internet_Message_Access_Protocol (**IMAP**)	Allows email clients to access and manage email on a server.

## File Transfer & Remote Access

Protocols crucial for system management, remote shell access, and large data transfers.
Port	Protocol Name	Description
21	File_Transfer_Protocol (**FTP**)	Standard network protocol used for the transfer of computer files between a client and server.
**115**	Secure_File_Transfer_Protocol (**SFTP**)	**FTP** secure transport, typically over **SSH**, for enhanced data security.
22	Secure_Shell (**SSH**)	Cryptographic network protocol for operating network services securely over an unsecured network.
23	Telnet	Legacy, unencrypted network protocol used to provide a bidirectional interactive text-oriented communication facility.

## Naming, Databases & Communication

Other fundamental services critical to modern computing environments.
Port	Protocol Name	Description
53	Domain_Name_System (**DNS**)	The hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet.
**135**	Remote_procedure_call (**RPC**)	A powerful technique for inter-process communication used to execute code on a remote system.
**194**	Internet_Relay_Chat (**IRC**)	An application layer protocol for real-time text messaging.
**33006**	MySQL (Non-Standard Port)	Reference for the widely used relational database management system (**RDBMS**) access.

⚙️ Getting Started

To utilize the ProtoBas knowledge base, simply clone the repository and open the primary index file:

Prerequisites

You only need a modern web browser to view the content.

Installation and Usage

    Clone the Repository:
    Bash

git clone [https://github.com/Subutay-CyberSecurity/ProtoBas.git](https://github.com/Subutay-CyberSecurity/ProtoBas.git) cd ProtoBas

Access the Interface: Open the index.html file in your preferred web browser (e.g., Chrome, Firefox). The included Style.css and Script.js will render the organized, easy-to-navigate interface automatically. Bash

    # Command to open in many systems
    open index.html

🤝 Contribution Guidelines

We highly encourage contributions from the community to ensure the accuracy, completeness, and relevance of the protocol information.

What We Are Looking For:

    New Protocol Submissions: Adding coverage for widely used or critical new protocols.

    Security Notes: Enhancing existing protocol folders with current best practices, known vulnerabilities (CVEs), and defensive countermeasures.

    Protocol Details: Expanding the documentation within each folder (e.g., command examples, packet structure analysis).

    Code Improvements: Refinements to the Style.css, Script.js, or index.html to improve the front-end user experience and accessibility.

How to Contribute:

    Fork the project.

    Create your Feature Branch (git checkout -b feature/AddProtocol-**XYZ**).

    Commit your Changes (git commit -m 'feat: Added detailed section for **XYZ** protocol').

    Push to the Branch (git push origin feature/AddProtocol-**XYZ**).

    Open a Pull Request and describe your changes clearly.

📄 License

This project is released under the **GNU** General Public License v3.0 (**GPL**-3.0). This ensures that the knowledge contained within remains free to share, modify, and distribute for all users. See the **LICENSE** file for more details.
