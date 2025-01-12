"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getTaskUser, getTaskUserById } from "./services";

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

export async function updateTask(taskId){
  const session = await auth();
  if (!session) throw new Error("You must logged in to your account.");
const taskDataById = await getTaskUserById(taskId);


// const { data, error } = await supabase
// .from('tasks')
// .update({ other_column: 'otherValue' })
// .eq('some_column', 'someValue')
// .select()

}