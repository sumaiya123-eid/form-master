import useCustom from "../useCustom";


export default function HookForm() {
    const [name , handleNameChange] = useCustom()
    const [email , handleEmailChange ]=useCustom()
    const [password , handlePasswordChange] = useCustom()
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(name , email , password)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange} type="text" name="name"/>
            <br />
            <input value={email} onChange={handleEmailChange} type="email" name="email"/>
            <br />
            <input value={password} onChange={handlePasswordChange} type="password" name="password"/>
            <br />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
