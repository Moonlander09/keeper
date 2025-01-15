"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google");
}

export async function signOutAction() {
  await signOut();
}

export async function createTask(formData) {
  const session = await auth();
  if (!session) throw new Error("You must logged in to your account.");
  const task = formData.get("task");
  const updateTask = { task, guestId: session.user.guest };

  const { data, error } = await supabase
    .from("tasks")
    .insert([updateTask])
    .select();
  if (error) throw new Error("Task could not added to your list.");
  revalidatePath('/');
}

export async function deleteTask(taskId) {
  const session = await auth();
  if (!session) throw new Error("You must logged in to your account.");

  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId);

  if (error) throw new Error("Could not delete the task");

  revalidatePath("/");
  return data;
}

export async function updateTask(formData){
  const session = await auth();
  if (!session) throw new Error("You must logged in to your account.");
 
  const task = formData.get("task");
  const taskId = formData.get('id')
  const updateTask = { task, guestId: session.user.guest ,id:+taskId };

const { data, error } = await supabase
    .from("tasks")
    .update({task:updateTask.task})
    .eq("id", updateTask.id).single();

  if (error) throw new Error("Could not Update the task.");

  revalidatePath("/");
  redirect('/')
  return data;

}