export const hello = async (event: any, _context: any) => {
  console.log('Starting hello function');

  if (event.Records && event.Records[0]) {
    console.log(event.Records[0].EventSource);
    console.log(event.Records[0].Sns.Message);

    return  { message: 'Hello from SNS', event };
  }

  return { body: 'Hello!', statusCode: 201 }
};
