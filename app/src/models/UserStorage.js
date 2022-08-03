"use strict"

class UserStorage {
    static #users ={
        id:['김팅장','김성훈'],
        pwd:['1234','12345'],
        name:["우리밋","헬로우"],
    }

     static  getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers ;
    }
}

module.exports = UserStorage;