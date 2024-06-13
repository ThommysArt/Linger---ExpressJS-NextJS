"use server"

import { Language } from "@/constants/types"

// NOTES:
/*
- DO NOT FORGET TO ADD use server AT THE TOP OF THE PAGE
- async() property helps our function to wait for incoming data from the api in case of server slowdown
- The await keyword specifies which function require delay for incoming data
- The Promise<> ensure the datatype of the function's return object is as specified
- The response.json() is used to convert the api response form JSON format to our actual datatypes found in our database
- The fetch() method takes 2 arguments, the api url, and the request options
- There is a file in /clent/constants/types.ts that contains all the data types of the Classes you were assigned, import them
*/

import { API_URL } from "@/constants/urls"

// Function to get all languages from the database using our api
const getAllLanguages = async (): Promise<Language[] | null> => {
    try {
        const response = await fetch(`${API_URL}/languages`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}

// Function to get a particular language from the database
const getLanguage = async (id: number): Promise<Language | null> => {
    try {
        const response = await fetch(`${API_URL}/languages`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}

// Function to create a new language in our database using our api
const createLanguage = async (language: Language): Promise<Language | null> => {
    try {
        const response = await fetch(`${API_URL}/languages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(language)
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}

// Function to update a language using our api
/*
const updateLanguage = async (language: Language): Promise<Language | null> => {
    try {
        const response = await fetch("http://localhost:8000/api/v1/languages", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(language)
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}
*/

// Function delete a particular language form the database using our api
const deleteLanguage = async (id: number): Promise<Language | null> => {
    try {
        const response = await fetch(`${API_URL}/languages`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}


export {getAllLanguages, getLanguage, createLanguage, deleteLanguage};