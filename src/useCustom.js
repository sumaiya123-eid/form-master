import { useState } from "react"

export default function useCustom(defaultValue=null) {
    const [value , setValue] = useState(defaultValue)
    const handleChange=e=>{
        setValue(e.target.value)
    }
  return [value , handleChange]
}
