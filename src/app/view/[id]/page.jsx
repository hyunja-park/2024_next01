
import Item from '@/app/item/page';
import axios from 'axios';

// 서버 컴포넌트 : 데이터를 가져오는데만 사용 (useState, useEffect 사용불가)
async function Page({ params }) {
    const param = await params;
    const id = param.id;
    const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    try {
        const response = axios.get(API_URL);
        const item =  response.data;
        return <Item item={item} />;      
    } catch (error) {
        console.error("error:", error);
        return <div>Errora.</div>;
    }

}

export default Page;