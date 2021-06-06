import { Dispatch } from "react"
import { stateType } from "../actionTypes"


const ActionCreator = (text: string) => {
    return ((dispatch: Dispatch<any>) => {
        dispatch({ type: stateType.start_search })
        try {
            fetch(`https://registry.npmjs.org/-/v1/search?text=${text}`)
                .then(res => {
                    return res.json()
                })
                .then(
                    data => {
                        dispatch({ type: stateType.search_success, payload: data })
                    }
                )
        } catch (error) {
            dispatch({ type: stateType.search_error })
        }
    })
}


export default ActionCreator;