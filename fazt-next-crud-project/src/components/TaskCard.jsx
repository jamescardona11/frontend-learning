'use client'

import { useRouter } from 'next/navigation'

function TaskCard ({ task }) {
  const router = useRouter()
  return (
    <div className="bg-slate-800 p-3 mb-4 mx-4 my-2 rounded-md" onClick={
      () => router.push(`/tasks/${task.id}`)
    }>
      <h1 className="font-bold text-2xl">{task.title}</h1>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
