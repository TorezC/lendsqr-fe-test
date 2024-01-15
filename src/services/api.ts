import axios from "axios"

export const getAllUsers = async () => {
    const result = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
    console.log(result)
    return result;
}