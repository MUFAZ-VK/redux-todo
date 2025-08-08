function Navbar({message, setmessage, islogged, setislogged}) {

    const HandleClick = () => {
        setmessage(" 👤 john wick")
        setislogged(true)
    }

    console.log(islogged)
    //conditional rendering - rendering components based on their conditions
    // ?true:false
    return(
        <div className="bg-gray-800 p-8 shadow-md flex justify-between items-center">
            <img className="h-10 w-auto rounded-md" src="https://envs.sh/QoN.jpg" alt="Logo"/>

            <div className="text-white textlg space-x-6">
                <a className="hover:text-purple-600" href="#">HOME</a>
                <a className="hover:text-purple-600" href="#">PRODCUTS</a>
                <a className="hover:text-purple-600" href="#">CONTACT</a>
                <a className="hover:text-purple-600" href="#">ABOUT</a>
            </div>
            <div className="text-white space-x-5 text-center">
              
                {islogged ? <p>{message}</p> :  <button onClick={HandleClick} className="bg-red-700 py-1 px-6 rounded-xl hover:bg-blue-600">LOGIN</button> }
               
                {/* <button className="bg-red-700 py-1 px-6 rounded-xl hover:bg-blue-600">SIGN UP</button> */}
            </div>
        </div>
    )
}

export default Navbar