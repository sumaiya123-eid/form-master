

export default function ReusableForm({formTitle , btnText="submit",handleSubmit ,children}) {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data={
            name : e.target.name.value ,
            email : e.target.email.value,
            password : e.target.password.value
        }
        handleSubmit(data)
    }
  return (
    <div>
        <form onSubmit={handleLocalSubmit}>
           {children}
            <input type="text" name="name"/>
            <br />
            <input type="email" name="email"/>
            <br />
            <input type="password" name="password"/>
            <br />
            <input type="submit" value={btnText} />
        </form>
    </div>
  )
}
