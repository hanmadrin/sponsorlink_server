import app from "./app.js";
import style from "../styles/style.js";
const links = async({serial})=>{
    try{
        const id = app.id;
        const response = await fetch(`/api/links/${serial}`, {method: 'GET',});
        if(response.status===200){
                const links = await response.json();
                const neoTable = document.createElement('table');
                neoTable.classList.add('table');
            if(links.length===0){
                const noData = document.createElement('h2');
                noData.className = style.neoTable.noData.join(' ');
                noData.innerText = 'No data found for this query';
                neoTable.appendChild(noData);
            }else{
                links.forEach(link => {
                    const tr = document.createElement('div');
                    tr.className = style.neoTable.tr.join(' ');
                    const td = document.createElement('div');
                    td.className = style.neoTable.td.join(' ');
                    const a = document.createElement('a');
                    a.innerText = link.url;
                    a.href = link.url;
                    a.target = '_blank';
                    a.className=`bg-${link.status}`;
                   
                    const td2 = document.createElement('div');
                    td2.className = style.neoTable.td.join(' ');
                    const select = document.createElement('select');
                    ['new','success','wasted','later'].forEach(status=>{
                        const option = document.createElement('option');
                        option.value = status;
                        option.innerText = status;
                        if(status===link.status){
                            option.selected = true;
                        }
                        select.appendChild(option);
                    });
                    select.addEventListener('change',async(e)=>{
                        // const status = e.target.value;
                        const response = await fetch(`/api/links/${link.id}`, {method: 'PUT',body: JSON.stringify({status:select.value}),headers: {'Content-Type': 'application/json'}});
                        if(response.status===200){
                            const updatedLink = await response.json();
                            a.className=`bg-${updatedLink.status}`;
                            select.value = updatedLink.status;
                        }
                    });
                    td.appendChild(a);
                    tr.appendChild(td);
                    td2.appendChild(select);
                    tr.appendChild(td2);
                    neoTable.appendChild(tr);
                });
            }
            const app = document.getElementById(id);
            app.replaceChildren(neoTable);
        }else{
            alert('error');
        }
    }catch(err){
        console.log(err);
    }
    
};
export default links;
