import { prisma } from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'

async function loadTasks () {
  const task = await prisma.task.findMany()
  return task
}

async function HomePage () {
  const task = await loadTasks()

  return (
    <section className="container">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {task.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
