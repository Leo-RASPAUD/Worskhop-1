import React, { useState, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import queries from '../queries/Todos';
import mutations from '../mutations/Todos';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({ username: null });
  const [isLoading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(null);

  const addTodo = async () => {
    setLoading(true);
    try {
      await API.graphql(graphqlOperation(mutations.addTodo, { username: user.username, text: newTodo }));
      getTodos();
    } catch (error) {
      setError('Error while trying to get the todos');
      setLoading(false);
    }
  };

  const getUser = async () => {
    setUser(await Auth.currentAuthenticatedUser());
  };

  const getTodos = async () => {
    try {
      const {
        data: { getTodos: todos },
      } = await API.graphql(graphqlOperation(queries.getTodos, { username: user.username }));
      setTodos(todos);
      setLoading(false);
    } catch (error) {
      setError('Error while trying to get the todos');
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user.username) getTodos();
  }, [user.username]);

  return (
    <div>
      <div>Todos</div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      {!isLoading && (
        <>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {todos.length === 0 && <div>No items</div>}
            {todos.map(todo => (
              <div key={todo.id} style={{border: '1px solid #61dafb', padding: 5, width: 150, margin: 10, borderRadius: 4, backgroundColor: '#61dafb', color: 'black'}}>{todo.text}</div>
            ))}
          </div>
          <div>
            <input
              type="text"
              value={newTodo}
              placeholder="New todo..."
              onChange={event => setNewTodo(event.target.value)}
              style={{border: '1px solid black', padding: 5, width: 150, margin: 10, borderRadius: 4, backgroundColor: 'white'}}
            />
            <button type="button" onClick={addTodo} style={{padding: 5,borderRadius: 4}}>
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todos;
