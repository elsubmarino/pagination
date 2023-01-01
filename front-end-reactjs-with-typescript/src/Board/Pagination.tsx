import React,{useEffect, useState} from "react";
import axios from "axios";


type Props = {
    result: any,
    getList: (value: number) => void;
}

const Pagination:React.FC<Props> = ({result, getList}) =>{
    return(
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
    )
}

export default Pagination;