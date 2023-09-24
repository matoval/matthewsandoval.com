import Link from "next/link";

export default function Header({isMobile, isMobileNavOpen, setIsMobileNavOpen}) {
  return(
    <header>
      <h1>
        <Link href="/">Matthew Sandoval</Link>
      </h1>
      {isMobile && (
        <button 
          className="mobile-nav-btn"
          onClick={ () => setIsMobileNavOpen(prevState => !prevState) }
        >
          {isMobileNavOpen ? "[X]" : "[ ]"}
        </button>
      )}
    </header>
  )
}