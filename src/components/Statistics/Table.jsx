import { bgColor, primaryColor } from "../../../GlobalStyle.jsx";
import { Chartdata } from "./Chartdata.jsx";

function ChartTable() {
return (
    <table style={{width:'100%',height:'100%', border:'1px solid gray', borderCollapse:'collapse'}}>
        <thead style={{backgroundColor:primaryColor,color:bgColor}}>
            <tr>
                <th style={{border:'1px solid black',padding:'10px'}}>카테고리</th>
                <th style={{border:'1px solid black',padding:'10px'}}>소비금액</th>
            </tr>
        </thead>
        <tbody>
            {Chartdata.labels.map((label, index) => (
            <tr key={label}>
                <td style={{border:'1px solid gray',padding:'10px'}}>{label}</td>
                <td style={{border:'1px solid gray', padding:'10px'}}>{Chartdata.datasets[0].data[index]}</td>
            </tr>
        ))}
        </tbody>
    </table>
    
);
}

export default ChartTable;