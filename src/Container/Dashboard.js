import {connect} from "react-redux"
import Dashboard from "../components/Dashboard"

const mapStateToProps = (state) => {
    return {
        cars: state.cars, 
        user: state.user
    }
}

// wrap the visual React Component "Dashboard" with the Redux Container Component Dashboard
export default connect(mapStateToProps)(Dashboard)