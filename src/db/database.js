const mysql = require('mysql2/promise')


async function createConnection(){
   return mysql.createConnection({
        host: '20.115.48.167',
        user: 'bhuvi',
        password: 'Bhuvi@922',
        database: 'shopping_cart'
    })
}

async function updateUser(name,email){
    const connection = await createConnection()
    try{
    const sql = 'insert into user_info (name,email) values(?,?);'
    const values = [name,email]
    await connection.execute(sql,values)
    }
    finally{
        await connection.end()
    }
}
async function deleteUser(email){
    const connection = await createConnection()
    try{
    const sql = 'delete from user_info where email = ?;'
    const values = [email]
    await connection.execute(sql,values)
    }
    finally{
        await connection.end()
    }
}
async function getUser(email){
    const connection = await createConnection()
    try{
    const sql = 'select * from user_info where email = ?;'
    const values = [email]
    const users = await connection.execute(sql,values)
    return (users[0])[0]
    }
    finally{
        await connection.end()
    }
}
module.exports = {updateUser,deleteUser,getUser}