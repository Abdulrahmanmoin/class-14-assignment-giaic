import React from 'react'

interface PropsInterface { params: { id: number }, searchParams: {} }

const page = async (props: PropsInterface) => {

    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
    const res = await url.json()

    return (
        <div className='bg-blue-600 m-10'>
            <p className='p-4'>
                User ID: {res.userId}
            </p>
            <br></br>
            <p className='p-4'>
                TITLE: {res.title}
            </p>
            <br></br>
            <p className='p-4'>
                DESCRIPTION: {res.body}
            </p>
        </div>
    )
}

export default page
