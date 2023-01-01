import React, {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";

interface resultTypes {
    content: any,
    prevPage: any,
    nextPage: any,
    pageList: any,
}

const Board: React.FC = () => {
    const [result, setResult] = useState<resultTypes>({content: [], prevPage: null, nextPage: null, pageList: []})
    const [type, setType] = useState<string>('');
    const [keyword,setKeyword ] = useState<string>('');

    const change = (event:any) => {
        setType(event.target.value);
    }

    const change2 = (event:any) =>{
        setKeyword(event.target.value);
    }

    useEffect(() => {
        getList(1);
    }, [])

    return (
        <>
            <select name={"searchOption"} onClick={change}>
                <option value={'title'}>제목</option>
                <option value={'content'}>내용</option>
            </select>
            <input type={"text"} name={"searchText"} onChange={change2}/>
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
            <Pagination result={result} getList={getList}/>
        </>
    )
}

export default Board;