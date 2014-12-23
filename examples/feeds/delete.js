var path = require('path'),
    AIO = require(path.resolve(__dirname, '..', '..', 'index.js'));

// create an instance
aio = AIO(process.env.AIO_KEY || 'xxxxxxxxxxxx');

// delete 'Test Feed Two' by key
aio.feeds('test-feed-two').delete(function(err, deleted) {

  if(err) {
    return console.error(err);
  }

  console.log(deleted ? 'Test Feed Two deleted!' : 'deletion failed :(');

});