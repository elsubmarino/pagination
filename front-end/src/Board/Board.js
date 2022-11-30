import React, {useEffect, useState} from "react";
import axios from "axios";

export function Board() {
    const [result, setResult] = useState('')

    const getList = (page) => {
        axios.get('/api/board/list',{
            params:{
                page:page,
                size:10
            }
        })
        .then(response => setResult(
            response.data),
        )
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getList();
    }, [])

    return (
        <>
            <table>
                <tbody>
                {result != '' && result.result.content.length > 0 ? result.result.content.map((data, index) => {
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
                    result != '' && result.prevPage ?
                        <li><a onClick={()=>getList(result.prevPage.pageNumber+1)}>prev</a></li> : ''
                }
                {
                    result != '' && result.pageList.length > 0 ?
                        result.pageList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a onClick={() => getList(item.pageNumber+1)}>{item.pageNumber + 1}</a>
                                </li>
                            )
                        })
                        : ''
                }
                {
                    result != '' && result.nextPage ?
                        <li><a onClick={()=>getList(result.nextPage.pageNumber+1)}>next</a></li> : ''
                }
            </ul>
        </>
    )
}
