
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { auth , signOut , signIn} from "@/auth"

const Navbar = async () => {

    const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
    <nav className="flex justify-between items-center"> 
        <Link href="/" >
            <Image src="/logo.png" alt="Logo" width={144} height={50} className="object-contain" />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
            <Link href="/startup/create" >
                <span className="max-sm:hidden">Create</span>
            </Link>
           <button onClick={signOut} >
                <span className="max-sm:hidden">Sign Out</span>
           </button>
           <Link href="/user/${session?.id}" >
                <span>{session?.user?.name}</span>
           </Link>

            </>
          ) : (
            <button onClick={() => signIn({ provider: "github" })}>
                <span>Sign In</span>
            </button>

          )
          
          
          
          }


            </div>
            
    </nav>
    </header>
  )
}

export default Navbar