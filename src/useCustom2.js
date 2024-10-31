import { useState } from "react"


export const useCustom2 = (defaultValue=null) => {
    const [value , setValue] = useState(defaultValue)
    const onChange = e =>{
        setValue(e.target.value)
    }
  return{
    value,
    onChange
  }
}
