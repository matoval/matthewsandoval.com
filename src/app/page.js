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
      <p className="home-p">Matthew is a core maintainer of Receptor, the mesh networking engine that powers distributed automation across enterprise infrastructure. At Red Hat, he maintains and enhances the overlay network that connects Ansible controllers with execution nodes across DMZs, VPCs, and dispersed geographies. His work on Kubernetes integration, workunit orchestration, and fault-tolerant mesh routing improves the functionality and resilience that enables thousands of organizations to scale automation beyond traditional network boundaries. Working primarily in Go, he builds the resilient distributed systems that keep mission-critical automation running when networks fail.</p>
	</div>
  )
}
