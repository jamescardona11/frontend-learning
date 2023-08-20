'use client'
import { useRouter } from 'next/navigation'

const NewTask = () => {

  const router = useRouter()

  const onSubmit = async (e) => {


    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value

    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    })

    const data = await res.json()

    router.push('/')
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-700 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>
        <label htmlFor="title">
          <h2 className="text-sm font-bold mb-4">Task title</h2>
        </label>
        <input id="title" className="border border-gray-400 p-2 mb-4 w-full text-black" type="text" placeholder="Title" />

        <label htmlFor="description">
          <h2 className="text-sm font-bold mb-4">Task description</h2>
        </label>
        <textarea id="description" className="border border-gray-400 p-2 mb-4 w-full  text-black" rows="3" placeholder="Description"></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Create</button>
      </form>
    </div>
  )
}

export default NewTask
