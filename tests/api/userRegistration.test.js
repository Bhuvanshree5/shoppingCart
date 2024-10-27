const {userRegistration} = require('../../src/api/userRegistration');

test('should throw an error if name field is missing', () => {
        expect(()=>{
            userRegistration("","mail@gmail.com","password")
        }).toThrow("Mandatory Fields are missing");
        
})

test('should throw an error if email field is missing', () => { 
        expect(()=>{
            userRegistration("name","","password")
        }).toThrow("Mandatory Fields are missing");
        
})

test('should throw an error if password field is missing', () => { 
        expect(()=>{
            userRegistration("name","mail@gmail.com","")
        }).toThrow("Mandatory Fields are missing");
        
})

test('should throw an error if email is not valid', () => { 
        expect(()=>{
            userRegistration("name","mailgmail.com","password")
        }).toThrow("Invalid Email");
        
})

test('should throw an error if password is less than 6 characters', () => { 
        expect(()=>{
            userRegistration("name","mail@gmail.com","pass")
        }).toThrow("Password should be at least 6 characters");
        
})


test('should throw an error if user already exists', () => { 
        expect(()=>{
            userRegistration("name","mail@gmail.com","password")
            userRegistration("name","mail@gmail.com","password")
        }).toThrow("User already exists");
        
})

test('should create a new user', () => { 
    const user = userRegistration("name", "test@gmail.com", "password");
    expect(user.name).toEqual( 'name' );
});