import { supabase } from "./supabase";

export async function getTask() {
  const { data, error } = await supabase.from("tasks").select("*");

  if (error) console.log(error);

  return data;
}

export async function getUser() {
  const { data, error } = await supabase.from("guests").select("*");

  if (error) throw new Error("could not fetch user");
  return data;
}


export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();
  if (error) throw new Error("Could not fetch the User");
  return data;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);
  if (error) throw new Error("Could not create new Guest");
  return data;
}
