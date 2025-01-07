"use server";

import { redirect } from "next/dist/server/api-utils";
import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google",{redirectTo:'/'});
}

export async function signOutAction() {
  await signOut({redirectTo:'/'});
}

export async function updateTask(formData) {
  const task = formData.get('task');

const { data, error } = await supabase
.from('tasks')
.update({ other_column: 'otherValue' })
.eq('some_column', 'someValue')
.select()
 if(error) throw new Error('could not update ')
  
}
