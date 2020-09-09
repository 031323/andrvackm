# tl1
    git clone https://github.com/031323/tl1.git
    git clone https://github.com/031323/MBROLA.git
    cd MBROLA
    make
    cd ../tl1
    make
    wget https://raw.githubusercontent.com/numediart/MBROLA-voices/master/data/tl1/tl1
    echo "सं॒स्कृ॒त॒वाच॑नाय॒ यन्त्र॑मि॒दम्।" | ./vackm | ../MBROLA/Bin/mbrola -e -v 3 tl1 - -.au | aplay
