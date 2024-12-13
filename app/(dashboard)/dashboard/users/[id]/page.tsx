import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
    const { id } = params
    return (
        <h1 className='text-2xl font-bold'>User Details Page for User: {id}</h1>
    )
}

export default page