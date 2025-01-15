import { supabase } from "./supabase";

export async function getTask() {
  const { data, error } = await supabase.from("tasks").select("*");

  if (error) throw new Error("Could not load Data");

  return data;
}

export async function getTaskUser(id) {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("guestId", id);

  if (error) throw new Error("Could not get User's Data");

  return data;
}
export async function getTaskUserById(id) {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Could not get User's Data");

  return data;
}

export async function getGuests() {
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

  if (error) {
    throw new Error("Could not fetch the User");
  }
  if (data) {
    return data;
  }
  return null;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);
  if (error) throw new Error("Could not create new Guest");
  return data;
}
export async function updatedTask(taskData) {
 const { data, error } = await supabase
 .from('tasks')
 .update([taskData])
 .select()

 if(error) throw new Error('Could not update the task.')

  return data;

}
// export async function getGuest(email) {
//   const { data, error } = await supabase
//     .from("guests")
//     .select("*")
//     .eq("email", email);
//   // .single();
//   if (error) {
//     throw new Error("Could not fetch the User");
//   }
//   if (data.length > 0) {
//     return data[0];

//   }

//   return null;
// }

// export async function createGuest(newGuest) {
//   console.log("creating guest:", newGuest);
//   const { data, error } = await supabase
//     .from("guests")
//     .insert({...newGuest });
//   if (error) throw new Error("Could not create new Guest");
//   return data;
// }
