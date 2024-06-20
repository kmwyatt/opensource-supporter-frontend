import { useDispatch, useSelector } from 'react-redux'

import { userSlice } from '@/store'
import { authService } from '@/services/index.js'

export function useUserController() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    async function login(payload) {
        try {
            const { status, data } = await authService.callLogin(payload)
            if (status !== 200) {
                return false
            }

            dispatch(userSlice.actions.set(data))
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function logout() {
        try {
            const { status, data } = await authService.callLogout()
            if (status !== 200) {
                return false
            }

            dispatch(userSlice.actions.clear())
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function withdraw() {
        try {
            const { status, data } = await authService.callWithdraw()
            if (status !== 200) {
                return false
            }

            dispatch(userSlice.actions.clear())
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function refresh() {
        try {
            const { status, data } = await authService.callRefresh()
            if (status !== 200) {
                return false
            }
            if (user.username !== data.username) {
                dispatch(userSlice.actions.clear())
                return false
            }

            dispatch(
                userSlice.actions.set({
                    accessToken: user.accessToken,
                    ...data,
                }),
            )
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    return {
        data: user,
        isLoggedIn: user.username !== 'guest',

        login,
        logout,
        withdraw,
        refresh,
    }
}
