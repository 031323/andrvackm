let arbdh=context.audioWorklet.addModule(import.meta.url.split('/').slice(0,-1).join('/')+'/suvakworker.js');
arbdh.then(() => {suvakw=true;})
function bhaashasva(x,s0,s1)
{
    return new Promise((resovle, reject) => {
        if(typeof(s0)!='undefined'&&typeof(s1)!='undefined'){
            suvak_svr0=s0,suvak_svr1=s1;
            suvak_svritanudatth=-1;
            suvak_svritodatth=-1;
            suvak_udattpurvanudatth=-1;
            suvak_adisvrh=-1;
        } 
        arbdh.then(()=>{suvacnarmbh(x,()=>{},()=>{resovle();});});
    });
}
export {bhaashasva};
