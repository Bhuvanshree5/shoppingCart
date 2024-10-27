let users = [];  
const userRegistration = (name, email, password) => {
    const invalidNamePattern = /[\'\";]+|--/;
    if (!name || !email || !password || invalidNamePattern.test(name)) {
        throw new Error("Mandatory Fields are missing");
    }
    if (!email.includes("@gmail.com")) {
        throw new Error("Invalid Email");
    }
    if (password.length < 6) {
        throw new Error("Password should be at least 6 characters");
    }
    if (users.find(user => user.email === email)) {
        throw new Error("User already exists");
    }
    const user = { name, email, password };
    users.push(user);
    return user;  
    
    
}
module.exports = { userRegistration };
