import { useCustom2 } from "../useCustom2";


export default function HookForm2() {
    const nameState = useCustom2()
    const emailState = useCustom2()
    const passwordState = useCustom2()
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(nameState.value)
        console.log(emailState.value)
        console.log(passwordState.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input {...nameState} type="text" name="name"/>
            <br />
            <input {...emailState} type="email" name="email"/>
            <br />
            <input {...passwordState} type="password" name="password"/>
            <br />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
