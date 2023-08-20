import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {

  const task = await prisma.task.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  if (task === null) {
    return NextResponse.json({ message: "Task not found with id: " + params.id });
  }

  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const task = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json({ message: "Task updater" + task });
}

export async function DELETE(request, { params }) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json({ message: "Deleting task" + params.id });
  } catch (error) {
    return NextResponse.json({ message: "Task not found with id: " + params.id });
  }
}