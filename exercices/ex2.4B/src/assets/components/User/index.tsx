import "./User.css"

interface UserProps {
    name: string;
    age: number;
    isOnline: boolean;
}

const User = (props : UserProps) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p className={props.isOnline ? "online" : "offline"}>
                {props.isOnline ? "En ligne" : "Hors ligne"}
            </p> 
        </div>
    )
}

export default User;