var path = require( 'path' ),
    express = require( 'express' ),
    app = express();

app.use( express.static( path.join( __dirname, 'public' ) ) );

app.listen( 3000 );

console.log( 'Server running on port 3000' );
