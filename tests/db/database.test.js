const {updateUser,deleteUser,getUser} = require('../../src/db/database')
const connection = require('../../src/db/database')
describe('Database operations', () => {
    test('should save data', async () => {
        const name = 'userName';
        const email = 'user@gmail.com';

        await updateUser(name,email);
        const user = await getUser(email);
        expect(user.name).toBe(name);
    }); 
    
    afterAll(async () => {
        await deleteUser('user@gmail.com');
    });
});