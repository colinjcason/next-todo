"use server"
import { revalidatePath } from "next/cache"
import prisma from "../lib/prisma"
import { redirect } from "next/navigation"

export const createTask = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const content = formData.get('content')

  try {
    await prisma.todo.create({
      data: {
        content
      }
    })
  
    revalidatePath('/todo-list')
    return {message: 'Success!'}
  } catch (error) {
    return {message: 'Error!'}
  }
   
}

export const getAllTasks = async () => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export const deleteTask = async (formData) => {
  const id = formData.get('id')
  await prisma.todo.delete({
    where: { id }
  })

  revalidatePath('/todo-list')
}

export const getTask = async (id) => {
  return prisma.todo.findUnique({
    where: { id }
  })
}

export const editTask = async (formData) => {
  const id = formData.get('id')
  const content = formData.get('content')
  const completed = formData.get('completed')

  await prisma.todo.update({
    where: { id },
    data: {
      content: content,
      completed: completed === 'on',
    }
  })

  redirect('/todo-list')
}