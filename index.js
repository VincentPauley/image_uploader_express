var path = require( 'path' ),
    multer = require( 'multer' ), // allows parsing of multipart requests
    express = require( 'express' ),
    app = express();


// serve public directory
app.use( express.static( path.join( __dirname, 'public' ) ) );

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback( null, 'public/uploads' );
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname)
  }
});

// set file destination for uploads
var upload = multer({storage : storage}).single( 'photo' );

app.post('/upload', function(req, res ) {
    upload(req, res, function( err ) {
        if( err ) {
            console.error( 'ERROR OCCURED' );
            console.error( err );
            return;
        }
        console.log( req.file );
        res.end( 'File has been uploaded!' );
        console.log( 'Photo Uploaded' );
    });
});

app.listen( 3000 );

console.log( 'Server running on port 3000' );
