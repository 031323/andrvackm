import re
transliterate={
            "क":"k", "ख":"kh", "ग":"g", "घ":"gh", "ङ":"N1", "च":"c", "छ":"ch", "ज":"j", "झ":"jh", "ञ":"N2", "ट":"T", "ठ":"Th", "ड":"D", "ढ":"Dh", "ण":"N3", "त":"t", "थ":"th", "द":"d", "ध":"dh", "न":"n", "प":"p", "फ":"ph", "ब":"b", "भ":"bh", "म":"m", "य":"y", "र":"r", "ल":"l", "ळ":"L", "व":"v", "श":"s1", "ष":"s2", "स":"s", "ह":"h", "ं":"M", "ः":"H", "अ":"a", "आ":"A", "इ":"i", "ई":"I", "उ":"u", "ऊ":"U", "ऋ":"R", "ॠ":"R", "ऌ":"l1", "ॡ":"l2", "ए":"e", "ऐ":"ai", "ओ":"o", "औ":"au", "लँ":"ln"
        }
def varnzanirnzayah(word):
        #print [word]
        s=word#unicode(word,"utf-8")
        #shabdah=[]
        #for i in s:
        #    shabdah.append(i.encode('utf-8'))
        shabdah=word
        varnzaah=[]
        svrah=[]
        svrahL=[]
        svrahR=[]
        svrh=2
        for i in range (0,len(shabdah)):
            #print shabdah[i]
            if shabdah[i] in 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह':
                if len(shabdah)==i+1:
                    varnzaah+=[shabdah[i],'अ']
                    svrah+=[3,svrh]
                elif shabdah[i+1] == '्':
                    varnzaah+=[shabdah[i]]
                    svrah+=[3]
                elif shabdah[i+1] in 'ा ि ी ु ू ृ ॄ ॢ ॣ े ै ो ौ'.split(' '):
                    varnzaah+=[shabdah[i],'आइईउऊऋॠऌॡएऐओऔ'['ा ि ी ु ू ृ ॄ ॢ ॣ े ै ो ौ'.split(' ').index(shabdah[i+1])]]
                    svrah+=[3,svrh]
                else:
                    varnzaah+=[shabdah[i],'अ']
                    svrah+=[3,svrh]
            elif shabdah[i] in 'अआइईउऊऋॠऌॡएऐओऔ'+'ं'+'ः':
                varnzaah+=[shabdah[i]]
                svrah+=[svrh]
            elif shabdah[i] == 'ँ':
                pass
                #varnzaah[-1]+='ँ'
            elif shabdah[i]=='॒':
                svrh=2
                svrah[-1]=0
            elif shabdah[i]=='॑':
                svrh=0
                svrah[-1]=1
                
        
        vrnah=[]
        dvitv=[]
        for i in range(0,len(varnzaah)):
            #if varnzaah[i]=="ऐ":vrnah+=['a','i']
            #elif varnzaah[i]=="औ":vrnah+=['a','u']
            #else:
            vrnah.append(transliterate[varnzaah[i]])
            dvitv.append(False)
            if varnzaah[i]=='ॠ':vrnah.append('R')
            #if varnzaah[i] in 'आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ'.split(' ') and i+1<len(varnzaah):
            #	if varnzaah[i+1] in 'आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ'.split(' '):vrnah.append('X')
            #if transliterate[varnzaah[i]][0] in ['k','g','c','j','T','D','t','d','p','b'] and (i+1)<len(varnzaah):
            #	vrnah[-1]=transliterate[varnzaah[i]][0]
            #	if transliterate[varnzaah[i+1]][0]!=transliterate[varnzaah[i]][0]:vrnah.append(transliterate[varnzaah[i]]+'x')
            
            if transliterate[varnzaah[i]][0] in ['k','g','c','j','T','D','t','d','p','b'] and i>0:
            	if transliterate[varnzaah[i-1]][0]==transliterate[varnzaah[i]][0]:
            		vrnah.pop(-2)
            		dvitv.pop(-2)
            		#vrnah[-1]=vrnah[-1]+'x2'
            		dvitv[-1]=True
            if transliterate[varnzaah[i]]=='H' and (i+1)<len(varnzaah):
            	if transliterate[varnzaah[i+1]][0]=='s':vrnah[-1]=transliterate[varnzaah[i+1]]
            	if transliterate[varnzaah[i+1]][0]=='p':vrnah[-1]='f'
            
            if vrnah[-1] in [transliterate[j] for j in 'य र ल ळ व श ष स ह ङ ञ ण न म'.split(' ')] and i>0:
            	if vrnah[-2]==vrnah[-1]:
            		vrnah.pop(-2)
            		dvitv.pop(-2)
            		#vrnah[-1]=vrnah[-1]+'x2'
            		dvitv[-1]=True
        return vrnah,dvitv


def labeller(d):
	vrnah=['sil']
	dvitv=[False]
	for c in list(filter(None,re.split(',|;',d))):
		for w in [c]:
			wv,wdv=varnzanirnzayah(w)
			if len(wv)==0:continue
			#if wv[-1]=='a':wv.pop()
			vrnah+=wv
			dvitv+=wdv
		vrnah+=['sil']
		dvitv+=[False]
	lab=""
	mono=""
	if len(vrnah)==0:return lab,mono
	for krmh in range(0,len(vrnah)):
		lab+='-'+vrnah[krmh]+'+/'
		for upkrmh in range(krmh-2,krmh+3):
			lab+=str(upkrmh-krmh+2)+':'
			if upkrmh>=0 and upkrmh<len(vrnah):
				lab+=vrnah[upkrmh]
			else:lab+='_NA_'
			lab+='/'
		for upkrmh in range(krmh-2,krmh+3):
			lab+=str(upkrmh-krmh+2+5)+':'
			if upkrmh>=0 and upkrmh<len(vrnah):
				lab+='X' if dvitv[upkrmh] else 'O'
			else:lab+='O'
			lab+='/'
		mono+=vrnah[krmh]+'\n'
		lab+='\n'
	return lab,mono
