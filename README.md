# आ॒न्ध्र॒वा॒च॒कम्
    git clone https://github.com/031323/andrvackm.git
    git clone https://github.com/031323/MBROLA.git
    cd MBROLA
    make
    cd ../andrvackm
    make
    wget https://raw.githubusercontent.com/numediart/MBROLA-voices/master/data/tl1/tl1
    echo "सं॒स्कृ॒त॒वाच॑नाय॒ यन्त्र॑मि॒दम्।" | ./vackm | ../MBROLA/Bin/mbrola -e -v 3 tl1 - -.au | aplay
