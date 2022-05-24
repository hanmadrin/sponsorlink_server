const app ={
    id: 'sponsorLinkApp',
    url: window.location.host,
    node: document.createElement('div'),
    setup: ()=>{
        app.node.id = app.id;
        document.body.replaceChildren(app.node);
    }
};
export default app;