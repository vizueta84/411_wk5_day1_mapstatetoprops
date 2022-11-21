import {connect} from "react-redux"
import Car from "../components/Car"

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

// wrap the visual React Component "Car" with the Redux Container Component Car
export default connect(mapStateToProps)(Car)