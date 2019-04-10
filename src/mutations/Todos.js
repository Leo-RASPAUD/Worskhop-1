import Todo from '../Types/Todo';

const addTodo = `mutation addTodo($username: String!, $text: String!) {
    addTodo(username: $username, text: $text) {
        ${Todo}
    }
}`;

export default {
  addTodo,
};
