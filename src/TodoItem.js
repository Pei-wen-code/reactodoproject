import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style';
import React from 'react';
import PropTypes from 'prop-types';

const TodoItemWrapper= styled.div`
  width: 90%;
  background: #E8F6EF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 4px;

  & + & {
    margin-top: 24px;
  }
`

const TodoContent = styled.div`
  color: ${props => props.theme.colors.red_300};
  font-size: 12px;

  ${props => props.size === 'XL' && `
    font-size: 20px;
  `}

  ${props => props.$isDone && `
    text-decoration: line-through;
  `}
`

const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 4px;
  color: green;
  font-size: 20px;

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 12px;
  }

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 4px;
  }
`

export default function TodoItem ({ className, size, todo, handleDeleteTodo, handleToggleIsDone }) {
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id)
  }

  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id)
  }

  return (
    <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <TodoContent $isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleToggleClick}>
          {todo.isDone ? 'Not yet':'Done'}
        </Button>
        <Button onClick={handleDeleteClick}>Delete</Button>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}

TodoItem.propTypes = {
  className: PropTypes.string, 
  size: PropTypes.string, 
  todo: PropTypes.shape({
    content: PropTypes.string,
    isDone: PropTypes.bool,
    id: PropTypes.number,
  }), 
  handleDeleteTodo: PropTypes.func, 
  handleToggleIsDone: PropTypes.func,
}