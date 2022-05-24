import app from './app.js';
import links from './links.js';
const view = async ()=>{
    const path = window.location.pathname;
    let serial;
    if(/(^\/links\/[0-9]*$)/.test(path) || /(^\/links\/[0-9]*\/$)/.test(path)){
        serial = (path.match(/^\/links\/([0-9]*)$/) || path.match(/^\/links\/([0-9]*)\/$/))[1];
        await links({serial});
    }
    
};
export default view;