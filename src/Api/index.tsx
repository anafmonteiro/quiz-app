import axios from "axios";

export const getQuestions = async() => {
    try {
        const  response = await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy")
        return [...response.data.results]
    } catch (e) {
        return e
    }
}