"use client";
import { useFormStatus } from "react-dom";

function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <button className="btn-submit" disabled={pending}>
      {pending ? "Updating..." : "Update"}
    </button>
  );
}

export default UpdateButton;
