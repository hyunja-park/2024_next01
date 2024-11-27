"use client"
import { Divider, Grid2 } from '@mui/material';
import './itemList.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';


function Page(props) {
    const [list, setList] = useState([]);
    const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const getDate = () => {
        axios.get(
            API_URL
        ).then(res => {
            // console.log(res.data)
            // setList(res.data);

            // 상위 12개 데이터만 추출 *페이징 기법으로 사용해도 됨*
            setList(res.data.slice(0, 12));

        }).catch(
            console.log("에러 발생")
        )
    }
    
    // 최초 한번만 실행
    useEffect(() => {
        getDate();
    },[])
    
    return (
        <div style={{ with: "80%", margin: "0 auto", padding:"20px" }}>
            <h2>베스트 상품</h2>
            <Divider />
            <Grid2 container spacing={2}>
                {list.map(k => {
                    // size={{ xs:3 }} => 전체 12에서 3개를 차지하자(한줄에 4개)
                    return <Grid2 key={k.id} size={{ xs:3 }}>
                        <Link href={'/view/'+k.id}>
                            <img src={k.image_link} alt=""  className='img_item' />
                            <strong>{k.name}</strong>
                            <span className='txt_info'>{k.category} &nbsp; &nbsp; {k.product_type}</span>
                            <strong className='num_price'>{k.price}</strong>
                        </Link>
                    </Grid2>
                })}
            </Grid2>
        </div>
    );
}

export default Page;