/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */

const datastore = require('@google-cloud/datastore')();

exports.thumb = (req, res) => {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));
  res.set('Access-Control-Allow-Methods', 'OPTIONS, POST');  

  if (req.method === 'OPTIONS') {
    res.status(200).send();
    return;
  } else if (req.body.startupText && req.body.thumb) {
    const newKey = datastore.key('Rating');
    const newData = {
      startupText: req.body.startupText,
      thumb: req.body.thumb
    };
    datastore.insert({
      key: newKey,
      data: newData
    })
    .then(() => {
      res.send({success: true});
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err
      });
    });
  } else {
    console.log('Error: ' + req.body);
    res.status(400).send('Error: Body must contain \'thumb\' and \'startupText\'');
  }
};