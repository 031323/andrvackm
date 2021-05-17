# सु॒वाक्
    <html>
    <body>
    <button id="b1"></button>
    <script src="https://031323.github.io/suvak/suvak2.js"></script>
    <script>
    b1.disabled=true;
    suvagarmbh(
    	()=>{b1.disabled=false;},
    	()=>{console.log('error');}
    )
    b1.onclick=()=>{
    	
    }
    </script>
    </body>
    </body>
## अ॒न्यत्किञ्चि॑त्
    git clone https://github.com/031323/suvak.git
    git clone https://github.com/031323/MBROLA.git
    cd MBROLA
    make
    cd ../suvak
    make
    wget https://raw.githubusercontent.com/numediart/MBROLA-voices/master/data/tl1/tl1
    echo "सं॒स्कृ॒त॒वाच॑नाय॒ यन्त्र॑मि॒दम्।" | ./vackm | ../MBROLA/Bin/mbrola -e -v 3 tl1 - -.au | aplay
