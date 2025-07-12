const signup = async (userData) => {
    console.log('called in singup services', userData)
        return { message: 'user created succrss', user: userData }
}
        const login = async (userData) =>{
        console.log('called in singup services', userData)
        return { message: 'user created succrss', user: userData }
}
 module.exports = {
 signup,
 login
 }