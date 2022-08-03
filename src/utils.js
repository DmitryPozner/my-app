export function createTodoItem(label, id) {
  return {
    label,
    important: false,
    done: false,
    id,
  };
}
