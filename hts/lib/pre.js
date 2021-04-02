var transliterate={
            "क":"k", "ख":"kh", "ग":"g", "घ":"gh", "ङ":"N1", "च":"c", "छ":"ch", "ज":"j", "झ":"jh", "ञ":"N2", "ट":"T", "ठ":"Th", "ड":"D", "ढ":"Dh", "ण":"N3", "त":"t", "थ":"th", "द":"d", "ध":"dh", "न":"n", "प":"p", "फ":"ph", "ब":"b", "भ":"bh", "म":"m", "य":"y", "र":"r", "ल":"l", "ळ":"L", "व":"v", "श":"s1", "ष":"s2", "स":"s", "ह":"h", "ं":"M", "ः":"H", "अ":"a", "आ":"A", "इ":"i", "ई":"I", "उ":"u", "ऊ":"U", "ऋ":"R", "ॠ":"R", "ऌ":"l1", "ॡ":"l2", "ए":"e", "ऐ":"ai", "ओ":"o", "औ":"au", "लँ":"ln"
        }
function len(x)
{return x.length}
function varnzanirnzayah(word)
{
        let s=word
        //shabdah=[]
        //for i in s:
        //    shabdah.push(i.encode('utf-8'))
        let shabdah=word
        let varnzaah=[]
        let svrah=[]
        let svrahL=[]
        let svrahR=[]
        let svrh=2
        for (let i=0;i<shabdah.length;i++)
        {
            //console.log(shabdah[i])
            if('कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह'.includes(shabdah[i]))
            {
            	//console.log('c1')
                if(len(shabdah)==i+1){
                    varnzaah=varnzaah.concat([shabdah[i],'अ'])
                    svrah=svrah.concat([3,svrh])
                }
                else if(shabdah[i+1] == '्'){
                    varnzaah=varnzaah.concat([shabdah[i]])
                    svrah=svrah.concat([3])
                    }
                else if('ा ि ी ु ू ृ ॄ ॢ ॣ े ै ो ौ'.split(' ').includes(shabdah[i+1])){
                    varnzaah=varnzaah.concat([shabdah[i],'आइईउऊऋॠऌॡएऐओऔ'['ा ि ी ु ू ृ ॄ ॢ ॣ े ै ो ौ'.split(' ').indexOf(shabdah[i+1])]])
                    svrah=svrah.concat([3,svrh])
                   	}
                else{
                    varnzaah=varnzaah.concat([shabdah[i],'अ'])
                    svrah=svrah.concat([3,svrh])
                    }
            }
            else if('अआइईउऊऋॠऌॡएऐओऔ'.includes(shabdah[i] )){
            	//console.log('c2')
                varnzaah=varnzaah.concat([shabdah[i]])
                svrah=svrah.concat([svrh])
                }
            else if(('ं'+'ः').includes(shabdah[i])){
            	//console.log('c3')
            	varnzaah=varnzaah.concat([shabdah[i]])
            	svrah=svrah.concat([3])
            	}
            else if (shabdah[i] == 'ँ'){
            	//console.log('c3')
                varnzaah.push('न')
                svrah.push(3)
                }
                //varnzaah[-1]+='ँ'
            else if(shabdah[i]=='॒'){
            	//console.log('c4')
                svrh=2
                for (let j =len(varnzaah)-1;j>-1;j--){
                	if('अआइईउऊऋॠऌॡएऐओऔ'.includes(varnzaah[j] )){
                		svrah[j]=0;break;
                		}
                	}
                }
            else if(shabdah[i]=='॑'){
            	//console.log('c5')
            			svrh=0
            			for (let j =len(varnzaah)-1;j>-1;j--){
                	if('अआइईउऊऋॠऌॡएऐओऔ'.includes(varnzaah[j] )){
                		svrah[j]=1;break;
                		}
                	}
            		}
        //console.log(varnzaah) 
        }
        console.log(varnzaah) 
        let u=false
        for (let i=0;i<len(svrah);i++){
        	if (svrah[i]==0)u=false
        	if (svrah[i]==2)u=true
        	if (svrah[i]==1 && u)svrah[i]=0
        }
        let vrnah=['sil']
        let dvitv=[false]
        let svrah2=[3]
        // vynjn:3 udatth:2 anudatth:0 svrith:1
        for(let i=0;i<len(varnzaah);i++){
            //if varnzaah[i]=="ऐ":vrnah+=['a','i']
            //else if varnzaah[i]=="औ":vrnah+=['a','u']
            //else:
            vrnah.push(transliterate[varnzaah[i]])
            dvitv.push(false)
            svrah2.push(svrah[i])
            if(varnzaah[i]=='ॠ'){
            	vrnah.push('R')
            	dvitv.push(false)
            	svrah2.push(svrah[i])
            }
            
            //if varnzaah[i] in 'आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ'.split(' ') and i+1<len(varnzaah):
            //	if varnzaah[i+1] in 'आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ'.split(' '):vrnah.push('X')
            //if transliterate[varnzaah[i]][0] in ['k','g','c','j','T','D','t','d','p','b'] and (i+1)<len(varnzaah):
            //	vrnah[-1]=transliterate[varnzaah[i]][0]
            //	if transliterate[varnzaah[i+1]][0]!=transliterate[varnzaah[i]][0]:vrnah.push(transliterate[varnzaah[i]]+'x')
            //console.log(varnzaah[i])
            //console.log(transliterate[varnzaah[i]])
            //console.log('thisis')
            if (['k','g','c','j','T','D','t','d','p','b'].includes(transliterate[varnzaah[i]][0] )&& i>0){
            	if (transliterate[varnzaah[i-1]][0]==transliterate[varnzaah[i]][0]){
				        console.log(svrah2)
            		vrnah.splice(vrnah.length-2,1)
            		dvitv.splice(dvitv.length-2,1)
            		svrah2.splice(svrah2.length-2,1)
            		//vrnah[-1]=vrnah[-1]+'x2'
            		dvitv[vrnah.length-1]=true
            	}
            }
            if(transliterate[varnzaah[i]]=='H' && (i+1)<len(varnzaah)){
            	if(transliterate[varnzaah[i+1]][0]=='s')vrnah[vrnah.length-1]=transliterate[varnzaah[i+1]]
            	if(transliterate[varnzaah[i+1]][0]=='p')vrnah[vrnah.length-1]='f'
            }
            if('y r l L v s1 s2 s h N1 N2 N3 n m'.split(' ').includes(vrnah[vrnah.length-1] ) && i>0){
            	if(vrnah[vrnah.length-2]==vrnah[vrnah.length-1]){
            		vrnah.splice(vrnah.length-2,1)
            		dvitv.splice(dvitv.length-2,1)
            		svrah2.splice(svrah2.length-2,1)
            		//vrnah[-1]=vrnah[-1]+'x2'
            		dvitv[vrnah.length-1]=true
            	}
            }
        }
        vrnah=vrnah.concat(['sil'])
        dvitv.push(false)
        svrah2=svrah2.concat([3])
        svrah=svrah2
        for (let i=0;i<len(vrnah);i++){
            if(svrah[i]==0){
                svrh=0
                break
              }
            else if (svrah[i]==1 || svrah[i]==2)
            {
                svrh=2
                break
            }
        }
        for (let i=0;i<len(vrnah);i++){
            svrahL.push(svrh)
            if(svrah[i]!=3){
                svrh=svrah[i]
                for (let j=i-1;j>-1;j--){
                    svrahR[j]=svrah[i]
                    if (svrah[j]!=3)break
                }
            }
            if(svrh==2)svrahR.push(2)
            else svrahR.push(0)
        }
        return [vrnah,dvitv,svrah,svrahL,svrahR]
}
function str(x){return x.toString()}
var vakarr
function labeller(d){
	let arr=varnzanirnzayah(d)
	vakarr=arr
	console.log(arr[1])
	let vrnah=arr[0],dvitv=arr[1],svrah=arr[2],svrahL=arr[3],svrahR=arr[4]
	svrah=svrah.map((a)=>{return {0:'A',2:'U',1:'S',3:'V'}[a]})
	svrahR=svrahR.map((a)=>{return {0:'A',2:'U',1:'S',3:'V'}[a]})
	svrahL=svrahL.map((a)=>{return {0:'A',2:'U',1:'S',3:'V'}[a]})
	let lab=""
	let mono=""
	if(len(vrnah)==0)return lab
	let krmh=0
	for(krmh=0;krmh<len(vrnah);krmh++){
		//console.log(vrnah[krmh])
		//console.log(dvitv[krmh])
		
		lab+='-'+vrnah[krmh]+'+/'
		let upkrmh=0
		for( upkrmh=krmh-2;upkrmh<krmh+3;upkrmh++){
			lab+=str(upkrmh-krmh+2)+':'
			if(upkrmh>=0 && upkrmh<len(vrnah))
				lab+=vrnah[upkrmh]
			else lab+='_NA_'
			lab+='/'
		}
		for( upkrmh=krmh-2;upkrmh<krmh+3;upkrmh++){
			lab+=str(upkrmh-krmh+2+5)+':'
			if(upkrmh>=0 && upkrmh<len(vrnah))
				lab+=dvitv[upkrmh]?'X':'O'
			else lab+='O'
			lab+='/'
		}
		let j=13
		let svrsuci=[svrah,svrahL,svrahR]
		//console.log(svrsuci)
		svrsuci.forEach(pdy=>{
			lab+=str(j)+':'
			lab+=pdy[krmh]
			lab+='/'
			j+=1
			}
		)
		mono+=vrnah[krmh]+'\n'
		lab+='\n'
	}
	//console.log(vrnah)
	//console.log(svrah)
	return [len(vrnah),lab,svrah,svrahL,svrahR]
}
var convertUint8ArrayToBinaryString =function(u8Array) {
	var i, len = u8Array.length, b_str = "";
	for (i=0; i<len; i++) {
		b_str += String.fromCharCode(u8Array[i]);
	}
	return b_str;
};
if(typeof window!=="undefined")
suvagarmbh=function(prtikrm) {
context=new AudioContext();
if(typeof(window)=='undefined')return;
	window.hts_prtikrm=function()
	{
		Module.ccall('hts_armbh',null,['string'],['assets/suvak.htsvoice']);
		prtikrm()
	}
	if(window.hts==='1')
	{
		window.hts_prtikrm()
	}
};
var fp;
var vakstapnm=function(vakym)
{
	let arr=labeller(vakym)
	arr[1]='0 500000 '+arr[1]
	/*var purvanvh=0
	var vrnanvh=0;
	var vrnkrmh=0
	var gnnm=false;
	var vrnanth=[]
	var anukalh=Module.ccall('hts_anukalh','double',[],[])
	var f0_=0
	*/
	FS.writeFile('assets/0.lab',arr[1])
	Module.ccall('svrstapnm',null,['number','string','string','string'],[arr[0],
		arr[2].toString().replace(/,/g,''),
		arr[3].toString().replace(/,/g,''),
		arr[4].toString().replace(/,/g,'')])
	fp=Module.ccall('svradesadesh','number',[],[])
	/*addFunction(function (f){
		//console.log(f)
		if(f-f0_!=1)
			console.log('f-f0: '+(f-f0_).toString())
		f0_=f
		if(!gnnm)
		{
			sum=0
			for(i=0;i<arr[0];i++)
			{
				v=Module.ccall('hts_vrnanvh','number',['number'],[i])
				sum+=v
				vrnanth.push(sum)
			}
			vrnanvh=vrnanth[0]
			gnnm=true
		}
		if(f>vrnanvh+purvanvh)
		{
			while(f>vrnanth[vrnkrmh])vrnkrmh+=1;
			//console.log(vrnkrmh)
			//console.log(arr[2][vrnkrmh])
			purvanvh=vrnanth[vrnkrmh-1]
			vrnanvh=vrnanth[vrnkrmh]-vrnanth[vrnkrmh-1]
			//console.log(vrnanvh)
		}
		let us=4.9,as=4.5
		//return us
		if(arr[2][vrnkrmh]=='A')return as;
		else if(arr[2][vrnkrmh]=='U')return us;
		else if(arr[2][vrnkrmh]=='S')
		{
			if((f-purvanvh)*anukalh<0.06)return us+(as-us)*(f-purvanvh)*anukalh/0.06
			else return as
		}
		else if(arr[2][vrnkrmh]=='V')
		{
			let p2=arr[4][vrnkrmh]=='A'?as:us;
			let p1=p2;
			if(vrnkrmh>0)if(arr[2][vrnkrmh-1]!='V')
				p1=arr[3][vrnkrmh]=='U'?us:as;
			if(p1!=p2)return p1+(p2-p1)*(f-purvanvh)/vrnanvh
			else return p1
		}
		return as
	},'di')*/
}
if(typeof window!=="undefined")
var suvacnm=function(vakym) {
	vakstapnm(vakym)
	Module.ccall('hts_vacnm',null,['string','string','number'],['assets/0.lab','assets/0.wav',fp])
	//removeFunction(fp)	
	var snd=new Audio('data:audio/wav;base64,' + btoa(convertUint8ArrayToBinaryString(FS.readFile('assets/0.wav'))))
	snd.play()
};
var pro_sbdh=Module.cwrap('pro_sbdh','float',[])
var pro_sbdah=Module.cwrap('pro_sbdah',null,[])
var time;
if(typeof window!=="undefined")
suvacnarmbh=function(vakym,prtikrm)
{
	time=Date.now()
	context.resume()
	var scriptNode = context.createScriptProcessor(4096, 1, 1);
	scriptNode.onaudioprocess = function(audioProcessingEvent) {
		
  // The output buffer contains the samples that will be modified and played
  let outputBuffer = audioProcessingEvent.outputBuffer;

  let outputData = outputBuffer.getChannelData(0);
		
    // Loop through the samples
    for (let sample = 0; sample < outputBuffer.length; sample++) {
      let agtih=pro_sbdh()
      //console.log(agtih)
      if(agtih>2.0)
      {
      	//removeFunction(fp)
      	scriptNode.disconnect(context.destination)
      	for(;sample<outputBuffer.length;sample++)
	 		     outputData[sample]=0.0;
 		    prtikrm()
				console.log(Date.now()-time)
      }
      else outputData[sample]=agtih
    }
	}
	vakstapnm(vakym)
	console.log(Date.now()-time)
	Module.ccall('pro_vacnarmbh','number',['string','number'],['assets/0.lab',fp])
	console.log(Date.now()-time)
	scriptNode.connect(context.destination)
}

