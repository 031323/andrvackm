# सु॒वाक्
## प्र॒यो॒गः
    cat << EOF > index.html
    <html>
    <head>
    <meta charset="UTF-8">
    </head>
    <body>
    <button id="b1" disabled>?</button>
    <script src="https://031323.github.io/suvak/suvak.js"></script>
    <script>
    website='https://031323.github.io/suvak/';
    suvagarmbh(
      ()=>{b1.disabled=false;},
      ()=>{console.log('error');}
    );
    b1.onclick=()=>{
      suvacnarmbh('सं॒स्कृ॒त॒वाच॑नाय॒यन्त्र॑मि॒दम्',
        ()=>{console.log('वा॒क्या॒दिः');},
        ()=>{console.log('वा॒क्या॒न्तः');},
      );
    }
    </script>
    </body>
    </html>
    EOF
    python -m http.server 8000
तत॑ ए॒तद्ग॑म्यताम् - [http://localhost:8000](http://localhost:8000)
## अ॒न्यत्किञ्चि॑त्
    git clone https://github.com/031323/suvak.git
    git clone https://github.com/031323/MBROLA.git
    cd MBROLA
    make
    cd ../suvak
    make
    wget https://raw.githubusercontent.com/numediart/MBROLA-voices/master/data/tl1/tl1
    echo "सं॒स्कृ॒त॒वाच॑नाय॒ यन्त्र॑मि॒दम्।" | ./vackm | ../MBROLA/Bin/mbrola -e -v 3 tl1 - -.au | aplay
