from scipy.io import wavfile
import numpy,math
naimisikani,sbdh=wavfile.read('1.wav')
yogh=0
vistarh=naimisikani*0.5
anusbdh=numpy.copy(sbdh)
if len(sbdh)<vistarh:
	wavfile.write('2.wav',naimisikani,sbdh)
else:
	for krmh in range(0,int(vistarh)):
		yogh+=int(sbdh[krmh])*int(sbdh[krmh])
	for krmh in range(0,len(sbdh)):
		anusbdh[krmh]=sbdh[krmh]/math.sqrt(yogh)*vistarh*10
		if int(krmh-vistarh/2)>=0 and int(krmh+vistarh/2)<len(sbdh):
			yogh=yogh-int(sbdh[int(krmh-vistarh/2)])*int(sbdh[int(krmh-vistarh/2)])+int(sbdh[int(krmh+vistarh/2)])*int(sbdh[int(krmh+vistarh/2)])
	wavfile.write('2.wav',naimisikani,anusbdh)
