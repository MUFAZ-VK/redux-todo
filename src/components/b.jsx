import C  from "./c"
function b({username,userage}) {
    return(
        <div>
        <u>this is b component</u>
        <h3> name is {username} and age is {userage} </h3>
        <C name={username} age={userage}/>

        
        </div>
    )
}

export default b