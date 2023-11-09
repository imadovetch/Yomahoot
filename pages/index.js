import { uniqueidUser } from "../utils/modules";
import Link from "next/link";
export {user_id}
let user_id = ''; 

function generateuserid() {
  user_id = uniqueidUser(); 
}

export default function Register() {
  return (
    <Link onClick={generateuserid} href="./Interface" className="center gap-2">
      <span>go</span>
    </Link>
  );
}