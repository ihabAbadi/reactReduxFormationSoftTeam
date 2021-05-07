import React,{useState, useEffect} from "react"


function useConnected() {
    const [firstLoading, setFirstLoading] = useState(true) 
    const [isLogged, setIsLogged] = useState(false)
    useEffect(()=>{
        //vérifier si l'utilisateur est connecté
        setTimeout(()=> {
            setIsLogged(true)
        },4000)
    },[firstLoading])
    return isLogged
}

export const ComponentWithHook = (props) => {
    // const [firstLoading, setFirstLoading] = useState(true) 
    // // const [count, setCount] = useState(0)
    // // const [count2, setCount2] = useState(0)
    // // // const theme = useContext(ThemeContext)
    // // //componentDidMount
    // // useEffect(() => {
    // //     console.log("just when component did mounted")
    // // },[firstLoading])

    // // //Componentdidupdate uniquement pour count
    // // useEffect(() => {
    // //     console.log("change life cycle")
    // // },[count])

    // const [isLogged, setIsLogged] = useState(false)
    
    // useEffect(()=>{
    //     //vérifier si l'utilisateur est connecté
    //     setTimeout(()=> {
    //         setIsLogged(true)
    //     },4000)
    // },[firstLoading])
    const isLogged = useConnected()
    return(
        <div>
            <span>{isLogged ? "connecté" : "non connecté"}</span>
            {/* <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount2(count2+1)}>+</button> */}
        </div>
    )
}