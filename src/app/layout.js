"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/componets/Header"
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
            case 'blog':
              setText('cat blog')
              break
          }
        })
        innerWidth <= 720 ? setIsMobile(true) : setIsMobile(false)
        new Promise((resolve) => setTimeout(resolve, 5500)).then(() => {
          setIsLoading(false)
        })
      }
    }
    checkInnerWidth()
  },[pathname])

  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="flex min-h-screen flex-col">
          { isLoading ? (
            <div className="loading">
              [matthewsandoval.com ~]$ <span className="prompt-text">{promptText}</span>
              <span className="prompt">&#9646;</span> 
            </div>
            ):(
              <div>
                <Header isMobile={isMobile} isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />
                <nav>
                  { !isMobile ? (
                    <div>
                      <section>
                        <div className="nav">
                          <div className="nav-title">main</div>
                          <ul>
                            <li activeClassName={pathname === "/"}>
                              <Link href="/" activeClassName={pathname === "/"}>
                                home
                              </Link>
                            </li>
                            <li activeClassName={pathname === "/blog"}>
                              <Link href="/blog" activeClassName={pathname === "/blog"}>
                                blog
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="nav">
                          <div className="nav-title">links</div>
                          <ul>
                            <li>
                              <Link href="https://www.linkedin.com/in/matoval/" target="_blank" rel="noopener noreferrer">
                                linkedin
                              </Link>
                            </li>
                            <li>
                              <Link href="https://github.com/matoval" target="_blank" rel="noopener noreferrer">
                                github
                              </Link>	
                            </li>
                            <li>
                              <Link href="public/Matthew_Sandoval_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                resume
                              </Link>
                            </li>
                            <li>
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
                          <ul>
                            <li activeClassName={pathname === "/blog/web-voice-command-package"}>
                              <Link href="/blog/web-voice-command-package" activeClassName={pathname === "/blog/web-voice-command-package"}>
                                web-voice-command Package
                              </Link>
                            </li>
                            {/* <li activeClassName={pathname === "/blog/next"}>
                              <Link href="/blog/next" activeClassName={pathname === "/blog/next"}>Next</a>
                            </li>
                            <li activeClassName={pathname === "/blog/test1"}>
                              <Link href="/blog/test1" activeClassName={pathname === "/blog/test1"}>Test 1</a>
                            </li>
                            <li activeClassName={pathname === "/blog/test2"}>
                              <Link href="/blog/test2" activeClassName={pathname === "/blog/test2"}>Test 2</a>
                            </li>
                            <li>
                              <Link href="/blog">more blogs...</a>
                            </li> */}
                          </ul>
                        </div>
                      </section>
                      {children}
                    </div>
                  ):(
                    <div>
                      { isMobileNavOpen ? (
                        <section>
                          <div className="nav">
                            <div className="nav-title">main</div>
                            <ul>
                              <li activeClassName={pathname === "/"}>
                                <Link onClick={() => setIsMobileNavOpen(prevState => !prevState)} href="/" activeClassName={pathname === "/"}>
                                  home
                                </Link>
                              </li>
                              <li activeClassName={pathname === "/blog"}>
                                <Link onClick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog" activeClassName={pathname === "/blog"}>
                                  blog
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="nav">
                            <div className="nav-title">links</div>
                            <ul>
                              <li>
                                <Link href="https://www.linkedin.com/in/matoval/" target="_blank" rel="noopener noreferrer">
                                  linkedin
                                </Link>
                              </li>
                              <li>
                                <Link href="https://github.com/matoval" target="_blank" rel="noopener noreferrer">
                                  github
                                </Link>	
                              </li>
                              <li>
                                <Link href="public/Matthew_Sandoval_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                  resume
                                </Link>
                              </li>
                              <li>
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
                            <ul>
                              <li activeClassName={pathname === "/blog/web-voice-command-package"}>
                                <Link href="/blog/web-voice-command-package" activeClassName={pathname === "/blog/web-voice-command-package"}>
                                  web-voice-command Package
                                </Link>
                              </li>
                              {/* <li activeClassName={pathname === "/blog/next"}>
                                <Link onclick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog/next" activeClassName={pathname === "/blog/next"}>Next</a>
                              </li>
                              <li activeClassName={pathname === "/blog/test1"}>
                                <Link onclick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog/test1" activeClassName={pathname === "/blog/test1"}>Test 1</a>
                              </li>
                              <li activeClassName={pathname === "/blog/test2"}>
                                <Link onclick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog/test2" activeClassName={pathname === "/blog/test2"}>Test 2</a>
                              </li>
                              <li>
                                <Link onclick={() => setIsMobileNavOpen(prevState => !prevState)} href="/blog">more blogs...</a>
                              </li> */}
                            </ul>
                          </div>
                        </section>
                      ):(
                        <div>
                          {children}
                        </div>
                      )}
                    </div>
                )}
                </nav>
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
