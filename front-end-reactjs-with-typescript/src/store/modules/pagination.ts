import axios from "axios";

let type: any;
let keyword : any;
let result : any;

//actions
export const getList = (page: number) => {

    axios.get('/api/board/list', {
        params: {
            page: page,
            type: type,
            keyword: keyword,
            size: 10
        }
    })
        .then(response => setResult(
            response.data),
        )
        .catch(error => console.log(error));
}

