import { useDispatch, useSelector } from 'react-redux'

import { repoInfoSlice } from '@/store/index.js'
import { repoClient } from '@/client/index.js'

export function useRepoInfo() {
    const repoInfo = useSelector((state) => state.repoInfo)
    const dispatch = useDispatch()

    async function getRepoInfo(payload) {
        try {
            const { status, data } = await repoClient.callGetInfo(payload)
            if (status !== 200) {
                return false
            }

            dispatch(repoInfoSlice.actions.set({ ...data }))
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function getInfoWithViewCount(payload) {
        try {
            const { status, data } =
                await repoClient.callGetInfoWithViewCount(payload)
            if (status !== 200) {
                return false
            }

            dispatch(repoInfoSlice.actions.set({ ...data }))
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    function clearData() {
        dispatch(repoInfoSlice.actions.clear())
    }

    return {
        data: repoInfo,

        clearData,
        getRepoInfo,
        getInfoWithViewCount,
    }
}
