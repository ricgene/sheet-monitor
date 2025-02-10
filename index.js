/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloWorld = (req, res) => {
    console.log('Hello World function executed!');  // This logs to Cloud Logging
    
    // Send response
    res.status(200).send('Hello World!');
  };