'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)

  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])

  return (
    <nav className="  flex-between w-full mb-10 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text ">Prompt Hub</p>
      </Link>

      {/*Desktop Navigation */}

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={38}
                height={38}
                className="rounded-full "
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id)
                  }}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/*Mobile Navigation */}

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div>
            <Image
              src={session?.user.image}
              width={38}
              height={38}
              className="rounded-full cursor-pointer"
              onClick={() => {
                setToggleDropDown((prev) => !prev)
              }}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  className="dropdown_link"
                  href="/profile"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  className="dropdown_link"
                  href="/create-prompt"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  className="black_btn mt-3 w-full"
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false)
                    signOut()
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id)
                  }}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}
export default Nav
