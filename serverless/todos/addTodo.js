const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');

const dynamoClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-southeast-2' });
const TableName = 'TestAppTodos';

module.exports.handler = async event => {
  const { username, text } = event;
  try {
    var params = {
      TableName,
      Item: {
        username,
        text,
        id: uuidv4(),
      },
    };

    const result = dynamoClient.put(params).promise();
    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
};
