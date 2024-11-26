import Image from 'next/image';
import '/gallery.css'

function page(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td><Image src="/images/kitten-1.jpg" width={50} height={50} /></td>
                    <td><Image src="/images/kitten-2.jpg" width={50} height={50} /></td>
                    <td><Image src="/images/kitten-3.jpg" width={50} height={50} /></td>
                </tr>
                <tr>
                    <td><Image src="/images/tree-1.jpg" width={50} height={50} /></td>
                    <td><Image src="/images/tree-2.jpg" width={50} height={50} /></td>
                    <td><Image src="/images/tree-3.jpg" width={50} height={50} /></td>
                </tr>
            </tbody> 
        </table>
    );
}

export default page;