import { createContext, useState } from "react";
import Father from "../Father/Father";

export const AssetContext = createContext(null)
export const MoneyContext = createContext(1000)

export default function Grandpa() {
    const [money,setMoney] = useState(1000);
  return (
    <div className="border-2 p-4">
        <h3>Grandpa</h3>
        <MoneyContext.Provider value={[money ,setMoney]}>
        <AssetContext.Provider value="gold">
        <Father></Father>
        </AssetContext.Provider>
        </MoneyContext.Provider>
        
        </div>
  )
}
