import Dashboard from "./Dashboard";

const AdminLayout = ({children}) => {
    return (
        <div>
            <Dashboard>
                {children}
            </Dashboard>
        </div>
    )
}

export default AdminLayout