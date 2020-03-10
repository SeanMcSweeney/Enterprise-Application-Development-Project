import { extendObservable } from 'mobx';

/**
 * User Storage
 */

class UserStorage {
    constructor(){
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            username: ''

        })
    }
}
export default new UserStorage();