import { extendObservable } from 'mobx';

/**
 * User Store
 */

class UserStore {
    constructor(){
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            admin: false,
            username: ''

        })
    }
}
export default new UserStore();