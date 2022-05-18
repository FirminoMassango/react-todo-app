function ListTodos() {
  return (
    <ul>
      <li>
        <input type="checkbox" className="mr-5" />
        <span>Do coding challenges</span>
      </li>
      <li>
        <input type="checkbox" className="mr-5" />
        <span>Do coding challenges</span>
      </li>
      <li>
        <input type="checkbox" className="mr-5" checked />
        <span>
          <s>Do coding challenges</s>
        </span>
      </li>
    </ul>
  );
}
export default ListTodos;
