import { useState } from "react";


export default function StatefulFrom() {
    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [error,setError]=useState("")

    const handleSubmit=(e)=>{
       e.preventDefault();
       if(password.length < 5){
        setError("password must be contain atleast 5 character")
       }
       else{
        setError("")
        console.log(name,email,password)
       }
    }
    const handleNameChange=(e)=>{
          setName(e.target.value)
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} type="text" name="name"/>
            <br />
            <input onChange={handleEmailChange} type="email" name="email"/>
            <br />
            <input onChange={handlePasswordChange} type="password" name="password"/>
            <br />
            <input type="submit" value="submit" />
        </form>
        {
            error&&<p>Error Ocuured!!!</p>
        }
    </div>
  )
}
