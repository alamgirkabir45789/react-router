function getData( data, callback ) {
    setTimeout( () => {
        console.log( 'reading data' )
        callback( { data: data } )
    }, 2000 );
}
getData( 4, function ( data ) {
    console.log( data )
} )