import { ITask } from "../../types/task";
import './styles.css'

interface TaskProps {
    props: ITask,
    deleteTask(DeleteById: number): void
};

function TodoTask({ props, deleteTask }: TaskProps) {

    return (
        <div className="card" >
            <div>
                <p>{props.title}</p>
            </div>

            <div className="line2" onClick={() => deleteTask(props.id)}>
                <span className="btn-card">X</span>
            </div>
        </div>
    );
}

export default TodoTask;
