import React, {useEffect, useState} from "react";
import axios from "axios";

interface resultTypes {
    content: any,
    prevPage: any,
    nextPage: any,
    pageList: any,
}

const Board: React.FC = () => {
    const [result, setResult] = useState<resultTypes>({content: [], prevPage: null, nextPage: null, pageList: []})
    const [searchOption, setSearchOption] = useState<string>('');

    const getList = (page: number) => {
        axios.get('/api/board/list', {
            params: {
                page: page,
                // searchOption: searchOption,
                // searchText: searchText,
                size: 10
            }
        })
            .then(response => setResult(
                response.data),
            )
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getList(1);
    }, [])

    return (
        <>
            <select name={"searchOption"}>
                <option>제목</option>
                <option>내용</option>
            </select>
            <input type={"text"} name={"searchText"}/>
            <button name={"searchButton"} onClick={()=>getList(1)}>검색</button>
            <table>
                <tbody>
                {result.content.length > 0 ? result.content.map((data: any, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{data.no}</td>
                            <td>{data.title}</td>
                        </tr>
                    )
                }) : ''}
                </tbody>
            </table>
            <ul className={"pagination"}>
                {
                    result.prevPage ?
                        <li><a onClick={() => getList(result.prevPage.pageNumber + 1)}>prev</a></li> : ''
                }
                {
                    result.pageList.length > 0 ?
                        result.pageList.map((item: any, index: number) => {
                            return (
                                <li key={index}>
                                    <a onClick={() => getList(item.pageNumber + 1)}>{item.pageNumber + 1}</a>
                                </li>
                            )
                        })
                        : ''
                }
                {
                    result.nextPage ?
                        <li><a onClick={() => getList(result.nextPage.pageNumber + 1)}>next</a></li> : ''
                }
            </ul>
        </>
    )
}

export default Board;