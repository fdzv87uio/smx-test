
interface AlertProps {
    message: string;
    setAlertOpen: any;
}

export default function CustomAlert({ message, setAlertOpen }: AlertProps) {
    return (
        <div className="alert-wrapper">
            <h1>Alert Message!</h1>
            <p className="text-red-500 text-xl">
                {message}
            </p>
            <div onClick={() => setAlertOpen(false)} className="alert-button">
                X
            </div>
        </div>
    )
}