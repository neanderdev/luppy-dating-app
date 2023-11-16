import { createContext, ReactNode, useEffect, useState } from "react";

import { storageUserGet, storageUserRemove, storageUserSave } from '../storage/storageUser';

import { UserDTO } from "../dtos/UserDTO";

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    isLoadingUserStorageData: boolean;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

    async function userUpdate(userData: UserDTO) {
        setUser(userData);
    }

    async function storageSaveUser(userData: UserDTO) {
        try {
            setIsLoadingUserStorageData(true);

            await storageUserSave(userData);
        } catch (error) {
            throw error
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    async function signIn(email: string, password: string) {
        try {
            console.log({ email, password });

            const user = {
                id: 'id',
                name: 'Neander de Souza',
                email: 'mcspipoca47@gmail.com',
                avatar: 'https://github.com/neanderdev.png'
            };

            if (user) {
                await storageSaveUser(user);
                userUpdate(user);
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    async function signOut() {
        try {
            setIsLoadingUserStorageData(true);

            setUser({} as UserDTO);

            await storageUserRemove();
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    async function loadUserData() {
        try {
            setIsLoadingUserStorageData(true);

            const userLogged = await storageUserGet();

            if (userLogged) {
                userUpdate(userLogged);
            }
        } catch (error) {
            throw error
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    useEffect(() => {
        loadUserData()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signOut,
            isLoadingUserStorageData
        }}>
            {children}
        </AuthContext.Provider>
    )
}
