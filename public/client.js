import app from './views/app.js';
import view from './views/view.js';
app.setup();
await view();
window.onpopstate = async()=>{
    await view();
}
