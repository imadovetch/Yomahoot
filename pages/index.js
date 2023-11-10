import { uniqueidUser } from "../utils/modules";
import Link from "next/link";
export {user_id}
export {name}
var name = "imad";
let user_id = ''; 

function generateuserid() {
  user_id = uniqueidUser(); 
  localStorage.setItem("userid",user_id)
}

export default function Register() {
  return (
    <Link onClick={generateuserid} href="./Interface" className="center gap-2">
      <span>go</span>
    </Link>
  );
}