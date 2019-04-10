import Todo from '../Types/Todo';

const getTodos = `query getTodos($username: String!) {
    getTodos(username: $username) {
        ${Todo}
    }
}`;

export default {
  getTodos,
};
