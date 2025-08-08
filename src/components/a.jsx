import B from "./b"
// function a(props) {
function a({user,age,fruits})
{
    // let {user,age} = props

    // console.log(props)
    console.log(user)
    console.log(age)
    console.log(fruits)
    return(
        <div>
        {/* <h1> hello {props.user} this is a component and your age is {props.age}</h1> */}
        <u>this is a component</u>
        <h3>name is {user} and age is {age}</h3>
        <B username={user} userage={age}/>
        <h4>first fruit is {fruits[0]}</h4>
        <h4>first fruit is {fruits[1]}</h4>
        <h4>first fruit is {fruits[2]}</h4>
        
        </div>
    )
}

export default a