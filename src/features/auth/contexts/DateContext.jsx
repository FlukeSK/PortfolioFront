import { useState, createContext } from "react";


export const DateContext = createContext();

export default function DateContextProvider ({ children }) {
    const [date, setDate] = useState(null);  
    const [hr, setHr] = useState(null);  


    return (
        <DateContext.Provider value={{ setDate, date, hr, setHr }} 
        >
            {children}
        </DateContext.Provider>
    )
}

