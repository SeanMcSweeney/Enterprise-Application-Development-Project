import { extendObservable } from 'mobx';

/**
 * Page Store
 */

class PageStore {
    constructor(){
        extendObservable(this, {

            home: true,
            information: false,
            login: false,
            register: false,
            admin: false,
            profile: false

        })
    }
}
export default new PageStore();