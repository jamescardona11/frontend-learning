'use client'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const NewTask = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { id } = useParams()

  useEffect(() => {
    if (id == null) return
    fetch(`/api/tasks/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setDescription(data.description)
      })
  }, [id])


  const onSubmit = async (e) => {
    e.preventDefault()

    if (id == null) {
      await createTask(title, description)
    } else {
      await updateTask(title, description)
    }

    router.refresh()
    router.push('/')

  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-700 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>
        <label htmlFor="title">
          <h2 className="text-sm font-bold mb-4">Task title</h2>
        </label>
        <input
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black" type="text" placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description">
          <h2 className="text-sm font-bold mb-4">Task description</h2>
        </label>
        <textarea
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full  text-black" rows="3" placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">{id == null ? "Create" : "Update"}</button>
      </form>
    </div>
  )
}

async function updateTask(title, description) {
  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description })
  })

  const data = await res.json()

  console.log(data)
}

async function createTask(title, description) {
  const res = await fetch('/api/tasks', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description })
  })

  const data = await res.json()

  console.log(data)

}

export default NewTask
