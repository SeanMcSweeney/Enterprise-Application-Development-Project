import { extendObservable } from 'mobx';

/**
 * User Store
 */

class AllUsers {
    constructor(){
        extendObservable(this, {

            username: '',
            email: '',
            admin: '',
            aboutme: ''

        })
    }
}
export default new AllUsers();