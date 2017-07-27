import { User } from './user'
 
export class UserData {
    constructor(
        public token: string,
        public user: User 
    ) {}
}