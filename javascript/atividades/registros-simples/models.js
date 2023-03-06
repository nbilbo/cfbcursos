export class User {
    constructor(name, telephone, email) {
        this.name = name
        this.telephone = telephone
        this.email = email
    }
}


export class DataBase {
    constructor(name) {
        this.name = name
        this.users = []
    }

    insert_user(user) {
        this.users.push(user)
    }

    get_users() {
        return this.users
    }
}
