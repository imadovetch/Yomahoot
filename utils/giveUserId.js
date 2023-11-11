import { v4 } from 'uuid'

export function giveUserId() {

    if(localStorage.getItem("userid")){ return}
    else localStorage.setItem("userid", v4())

}
