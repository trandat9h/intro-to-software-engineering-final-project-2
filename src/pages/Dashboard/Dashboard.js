import Mainpage from "../../components/Dashboard/Mainpage"
import Homestay from "../../components/Dashboard/Homestay"
import Reservation from "../../components/Dashboard/Reservation/Reservation"
import Sales from "../../components/Dashboard/Sales"
import Setting from "../../components/Dashboard/Setting"
import User from "../../components/Dashboard/User"
import Sidebar from "../../components/Shared/Sidebar"
import Header from "../../components/Shared/Header"

import {Switch, Route, Redirect} from "react-router-dom"
import { useSelector} from 'react-redux'

function Dashboard() {
    const { role, email} = useSelector((state) => state.authReducer)
    return(
        <div className="grid grid-cols-7">
            <Sidebar className="col-span-1 "/>
            <div className="col-start-2 col-end-8 flex-shrink bg-white">
                <Header email={email} />
                <Switch>
                    <Route path="/dashboard/mainpage" exact>
                        <Mainpage />
                    </Route>
                    <Route path="/dashboard/sales" exact>
                        <Sales />
                    </Route>
                    <Route path="/dashboard/reservation-management" exact>
                        <Reservation />
                    </Route>
                    <Route path="/dashboard/homestay-management" exact>
                        <Homestay />
                    </Route>
                    <Route path="/dashboard/user-management" exact>
                        <User />
                    </Route>
                    <Route path="/dashboard/setting" exact>
                        <Setting />
                    </Route>
                    <Redirect path="/dashboard/mainpage"/>
                </Switch>
            </div>    
        </div>
    )

}

export default Dashboard