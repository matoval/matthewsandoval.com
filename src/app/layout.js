"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./components/Header"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [promptText, setPromptText] = useState("")
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState([])
  const [fullWord, setFullWord] = useState("")
  
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  const count = () => {
    setTimeout(() => {
      setCounter(prevState => prevState + 1)
    }, 100)
  }

  useEffect(() => {
    if (text.length == 0) {
      setCounter(0)
    }
    if (counter < text.length) {
      setFullWord(prevState => prevState + text[counter])
    }
  },[counter, text])

  useEffect(() => {
    if (fullWord != "") {
      setPromptText(fullWord)
      count()
    }
  }, [fullWord])

  
  useEffect(() => {
    const checkInnerWidth = () => {
      if (innerWidth == 0) {
        setTimeout(() => checkInnerWidth(), 100)
      } else {
        new Promise((resolve) => setTimeout(resolve, 800)).then(() => {
          switch (pathname) {
            case '/':
              setText('cat home')
              break
            case '/blog':
              setText('cat blog')
              break
            case '/blog/web-voice-command-package':
              setText('cat blog -t web-voice-command-package')
          }
        })
        innerWidth <= 720 ? setIsMobile(true) : setIsMobile(false)
        new Promise((resolve) => setTimeout(resolve, 4500)).then(() => {
          setIsLoading(false)
        })
      }
    }
    checkInnerWidth()
  },[pathname])

  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>
          <main>
          { isLoading ? (
            <div className="loading">
              [matthewsandoval.com ~]$ <span className="prompt-text">{promptText}</span>
              <span className="prompt">&#9646;</span> 
            </div>
            ):(
              <div>
                <Header isMobile={isMobile} isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />
                <div className='main'>
                  { !isMobile ? (
                    <div className='main-content'>
                      <section>
                        <div className="nav">
                          <div className="nav-title">main</div>
                          <ul className="ul">
                            <li className={`li ${pathname === "/" && "active"}`}>
                              <Link href="/" className={`a ${pathname === "/" && "active"}`}>
                                home
                              </Link>
                            </li>
                            <li className={`li ${pathname === "/blog" && "active"}`}>
                              <Link href="/blog" className={`a ${pathname === "/blog" && "active"}`}>
                                blog
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="nav">
                          <div className="nav-title">links</div>
                          <ul className="ul">
                            <li className="li">
                              <Link href="https://www.linkedin.com/in/matoval/" target="_blank" rel="noopener noreferrer">
                                linkedin
                              </Link>
                            </li>
                            <li className="li">
                              <Link href="https://github.com/matoval" target="_blank" rel="noopener noreferrer">
                                github
                              </Link>	
                            </li>
                            <li className="li">
                              <Link href="public/Matthew_Sandoval_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                resume
                              </Link>
                            </li>
                            <li className="li">
                              <Link href="mailto:mat24c@gmail.com">
                                email
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="nav">
                          <div className="nav-title">
                            <Link href="/blog">
                              blog
                            </Link>
                          </div>
                          <ul className="ul">
                            <li className={`li ${pathname === "/blog/web-voice-command-package" && "active"}`}>
                              <Link href="/blog/web-voice-command-package" className={`a ${pathname === "/blog/web-voice-command-package" && "active"}`}>
                                web-voice-command Package
                              </Link>
                            </li>
                            {/* <li className="li" className={pathname === "/blog/next" && "active"}>
                              <Link href="/blog/next" className={"a " + pathname === "/blog/next" && "active"}>Next</a>
                            </li>
                            <li className="li" className={pathname === "/blog/test1" && "active"}>
                              <Link href="/blog/test1" className={"a " + pathname === "/blog/test1" && "active"}>Test 1</a>
                            </li>
                            <li className="li" className={pathname === "/blog/test2" && "active"}>
                              <Link href="/blog/test2" className={"a " + pathname === "/blog/test2" && "active"}>Test 2</a>
                            </li>
                            <li className="li">
                              <Link href="/blog">more blogs...</a>
                            </li> */}
                          </ul>
                        </div>
                      </section>
                      <div className='desktop-main-content'>
                        {children}
                      </div>
                    </div>
                  ):(
                    <div className='main-content'>
                      { isMobileNavOpen ? (
                        <section className='mobile-nav'>
                          <div className="nav">
                            <div className="nav-title">main</div>
                            <ul className="ul">
                              <li className={`li ${pathname === "/" && "active"}`}>
                                <Link onClick={() => setIsMobileNavOpen(prevState => !prevState)} href="/" className={`a ${pathname === "/" && "active"}`}>
                                  home
                                </Link>
                              </li>
                              <li className={`li ${pathname === "/blog" && "active"}`}>
                                <Link onClick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog" className={`a ${pathname === "/blog" && "active"}`}>
                                  blog
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="nav">
                            <div className="nav-title">links</div>
                            <ul className="ul">
                              <li className="li">
                                <Link href="https://www.linkedin.com/in/matoval/" target="_blank" rel="noopener noreferrer">
                                  linkedin
                                </Link>
                              </li>
                              <li className="li">
                                <Link href="https://github.com/matoval" target="_blank" rel="noopener noreferrer">
                                  github
                                </Link>	
                              </li>
                              <li className="li">
                                <Link href="public/Matthew_Sandoval_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                  resume
                                </Link>
                              </li>
                              <li className="li">
                                <Link href="mailto:mat24c@gmail.com">
                                  email
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="nav">
                            <div className="nav-title">
                              <Link href="/blog">
                                blog
                              </Link>
                            </div>
                            <ul className="ul">
                              <li className={`li ${pathname === "/blog/web-voice-command-package" && "active"}`}>
                                <Link href="/blog/web-voice-command-package" className={`a ${pathname === "/blog/web-voice-command-package" && "active"}`}>
                                  web-voice-command Package
                                </Link>
                              </li>
                              {/* <li className="li" className={pathname === "/blog/next" && "active"}>
                                <Link onclick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog/next" className={"a " + pathname === "/blog/next" && "active"}>Next</a>
                              </li>
                              <li className="li" className={pathname === "/blog/test1" && "active"}>
                                <Link onclick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog/test1" className={"a " + pathname === "/blog/test1" && "active"}>Test 1</a>
                              </li>
                              <li className="li" className={pathname === "/blog/test2" && "active"}>
                                <Link onclick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog/test2" className={"a " + pathname === "/blog/test2" && "active"}>Test 2</a>
                              </li>
                              <li className="li">
                                <Link onclick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog">more blogs...</a>
                              </li> */}
                            </ul>
                          </div>
                        </section>
                      ):(
                        <div className='main-content'>
                          {children}
                        </div>
                      )}
                    </div>
                )}
                </div>
              </div>
          )}

          <footer>
            <p>Copyright &copy; {currentYear} Matthew Sandoval All Rights Reserved</p>
          </footer>
        </main>
      </body>
    </html>
  )
}
