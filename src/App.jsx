
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm'
// import HookForm2 from './components/HookForm2'
// import HookForm from './components/HookForm'
// import RefForm from './components/RefForm'
// import SimpleForm from './components/SimpleForm'
// import StatefulFrom from './components/StatefulFrom'

function App() {
//  const handleSignUp = data =>{
//   console.log(data)
//  }

//   const handleUpdate = data =>{
//    console.log(data)
//   }
  return (
    <>
      <h1>React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulFrom></StatefulFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <HookForm2></HookForm2> */}
      {/* <ReusableForm formTitle="Sign Up" btnText ="login" handleSubmit={handleSignUp}>
      <div>
          <h3>Sign Up</h3>
          <p>Please sign up first</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle= "Update Profile" btnText='update' handleSubmit={handleUpdate}>
        <div>
          <h3>Update</h3>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
