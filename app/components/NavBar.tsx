import { auth, signOut, signIn } from 'auth'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = async () => {
    const session = await auth;
    return (
        <h1 className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={144} height={30} />
                </Link>
                <div className="flex items-center gap text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>
                                    Create Startup
                                </span>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type='submit'>Sign Out</button>
                            </form>
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server"
                            await signIn("github")
                        }} >
                            <button type='submit'>Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </h1>
    )
}

export default NavBar