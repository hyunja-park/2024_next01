"use client"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import './guestBookList.css';

function Page(props) {
    const [list, setList] = useState([]);
    // const API_URL = "http://localhost:8080/api/guestbook/list";
    const API_URL = "/guestbook/list";
    const getDate = () => {
        axios.get(
            API_URL
        ).then(res => {
            setList(res.data);
            console.log(res.data);
        }).catch(
            console.log("에러 발생")
        )
    }
    
    // 최초 한번만 실행
    useEffect(() => {
        getDate();
    },[])
    return (
        <>
            <h2 className="title">GuestBookList</h2>
            <TableContainer component={Paper} className="table-container">
                <Table className="custom-table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">이름</TableCell>
                            <TableCell className="table-header">제목</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((item) => (
                            <TableRow key={item.gb_idx}>
                                <TableCell className="table-cell">{item.gb_name}</TableCell>
                                <TableCell className="table-cell">
                                    <Link href={`/guestBookDetails/${item.gb_idx}`}>{item.gb_subject}</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Page;