function Tasks(props) {
    return <div>
        <h1>Todo list</h1>
        <ul>
            {props.tasks.map((item) => {
                return <li key={item.id}>
                    {item.task} - {item.time}
                </li>
            })}
        </ul>
    </div>
}

export default Tasks