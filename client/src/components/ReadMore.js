import { useState } from "react"

const ReadMore = ({children}) => {

    const [readMoreLess, setReadMoreLess] = useState(false)

    return(
        <div>
            <p>
             {children}   
            </p>
        </div>
    )
}

export default ReadMore