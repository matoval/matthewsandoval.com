import Image from "next/image"
import profilePic from "../../public/ProfilePicture.jpg"

export const metadata = {
  title: 'Matthew Sandoval',
  description: 'Matthew Sandoval\'s Software Engineer Portfolio and Blog',
}

export default function Home() {
  return (
    <div className="home-main-content">
      <Image src={profilePic} alt="Matthew Sandoval" width={300} height={300} />
      <p className="home-p">Matthew is an experienced and versatile Senior Software Engineer with a track record of success in diverse roles. His career began as a Web Developer, where he built performance-driven websites and collaborated with design teams. At ChipDrop, he added map-based features to a Django app and conducted comprehensive testing. Matthew`s skills also encompass Python, Go, Linux, Ansible, HTML5, CSS3, JavaScript, Svelte.JS, and React.JS, with four years of experience. His tenure at Red Hat saw him contribute significantly to Edge-Frontend, take on repository maintenance and CI/CD pipeline management, and mentor team members. In end-to-end delivery, he introduced tools, improved processes, and maintained a customer-centric focus. Matthew`s transition to Ansible collections further showcased his technical prowess, leadership, and mentorship abilities. Currently contributing to the Receptor project in Golang, he continues to enhance code quality and reliability. Matthew is a well-rounded and impactful engineer with a proven history of delivering high-quality solutions and fostering team growth.</p>
	</div>
  )
}
