// @flow

class Helpers {

    static getKeys( /* flowlint unclear-type:off */obj:any/* flowlint unclear-type:error */ ): Array<string> {
        if ( typeof obj !== 'function' && ( typeof obj !== 'object' || obj === null ) ) {
            throw new TypeError( 'Object.getKeysArr called on non-object' );
        }
        // return Object.entries( obj ).map( entry  => {
        //     return entry[0];
        // });
        let keys = [];
        for ( let key in obj ) {
            keys.push( key );
        }
        return keys;
    }

}
export { Helpers };