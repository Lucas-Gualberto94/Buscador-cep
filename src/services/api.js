import axios from "axios";

//

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/" /* baseURL é algo que nao vai mudar, vai ficr fixo ali*/
});

export default api;
