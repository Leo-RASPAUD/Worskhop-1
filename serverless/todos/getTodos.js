const AWS = require('aws-sdk');

const dynamoClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-southeast-2' });
const TableName = 'TestAppTodos';

const getTodos = async username => {
  const params = {
    TableName,
    IndexName: 'username-index',
    KeyConditionExpression: 'username = :username',
    ExpressionAttributeValues: {
      ':username': username,
    },
  };
  const result = await dynamoClient.query(params).promise();
  return result.Items.sort((a,b) => a.id > b.id);
};

module.exports.handler = async event => {
  const { username } = event;
  try {
    const todos = await getTodos(username);
    return todos;
  } catch (error) {
    console.log(error);
    return [];
  }
};
