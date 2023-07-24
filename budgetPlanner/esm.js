// ESM - ECMA Script Modules
import SomeResource from '../sample-route';

// Code...

export const someNiceFunction = () => { // named export
    // Code...
    return SomeResource;
}

export default someNiceFunction;


// OTRO ARCHIVO

import { someNiceFunction } from '-.--';
import newName from '...';