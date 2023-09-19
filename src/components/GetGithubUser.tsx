import axios from "axios";

import { IDataGit } from '@/types/types'

export const GetGithubUser = async (setUserData: (userData: null | IDataGit) => void, username: string, setUsername:(username: string) => void, setIsLoading:(isLoading: null | boolean) => void, setMessage:(messge: string) => void) => {
    try {
        setIsLoading(true)
        const res_userData = await axios.get(`https://api.github.com/users/${username}`)
        // const res_userRepository = await axios.get(`https://api.github.com/users/${username}/repos`)
        setUserData(res_userData.data);
        setUsername('')
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        setUserData(null);
        // alert("Something went wrong !")
        setMessage("Something went wrong !")
        console.log('Error: ', error);
    }
}