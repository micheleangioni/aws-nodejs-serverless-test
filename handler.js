'use strict';

module.exports.hello = (event, context, callback) => {
  process.stdout.write('Starting hello function');

  // if (event.Records && event.Records[0]) {
  //   process.stdout.write(event.Records[0].EventSource);
  //   process.stdout.write(event.Records[0].Sns.Message);
  //   return  { message: 'Hello!', event };
  // }

  // callback(null, { message: 'Hello!', event });

  callback(null, { message: 'Hello!', event });
};

