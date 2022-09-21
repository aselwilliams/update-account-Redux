import { } from './userSlice'

export const updateUser = async (user, dispatch) =>{
    dispatch(updateStart());
    try{
        const res = await axios.post('')
        dispatch(updateSuccess)

    } catch (err){
        dispatch(updateError())
    }
}