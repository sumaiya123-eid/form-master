import { useContext } from "react"
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa"


export default function Special() {
    const gift = useContext(AssetContext)
    const [money,setMoney] = useContext(MoneyContext)
  return (
    <div className="border-2 p-4">
        <h3>Special</h3>
        <p>has : {gift} </p>
        <p>money:{money}</p>
        <button onClick={()=>setMoney(money+1000)}>Add 1000</button>
    </div>
  )
}
