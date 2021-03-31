#!/usr/bin/env python
import curses
import re
from os import system, devnull
from subprocess import Popen
import lbllr
lekh=[]
ptitani=[]
p=None
htsvoice=""
def vacnm(lekkrmh):
	global lekh
	global ptitani
	global htsvoice
	if not ptitani[lekkrmh]:
		ptitani[lekkrmh]=True
		lab,mono=lbllr.labeller(lekh[lekkrmh])
		sncika=open('./1/'+str(lekkrmh)+'.lab','w')
		sncika.write(lab)
		sncika.close()
		system('~/Downloads/hts_engine_API-1.10/bin/hts_engine -m '+htsvoice+' -u 0.2 -g 1 -ot ./1/'+str(lekkrmh)+'.trace -ow ./1/'+str(lekkrmh)+'.wav ./1/'+str(lekkrmh)+'.lab')
		#system('~/Downloads/hts_engine_API-1.10/bin/hts_engine -m ../marathiHTS/voices/ver1/cmu_us_arctic_slt.htsvoice -g 1 -ot ./1/'+str(lekkrmh)+'.trace -ow ./1/'+str(lekkrmh)+'.wav ./1/'+str(lekkrmh)+'.lab')
	global p
	if p:p.terminate()
	p=Popen(['aplay','-q','./1/'+str(lekkrmh)+'.wav'],stdout=open(devnull, 'wb'),stderr=open(devnull, 'wb'))
	
def ptnm(nam,adikrm=0):
	system('mkdir -p 1')
	sncika=open(nam,'r')
	global lekh
	lekh=list(filter(None,re.split('।|॥|\n',sncika.read())))
	sncika.close()
	c=0
	if(len(lekh)<1):c='62'
	global ptitani
	ptitani=[False]*len(lekh)
	krmh=0
	if adikrm<len(lekh):krmh=adikrm
	stdscr=curses.initscr()
	curses.noecho()
	curses.cbreak()
	stdscr.keypad(True)
	
	while True:
		if c!='62':c=stdscr.getch()
		else:
			c=ord('>')
			krmh=-1
		if c==ord('q') or c==27:break
		elif c==curses.KEY_LEFT and krmh>0:
			krmh-=1
			vacnm(krmh)
		elif c==curses.KEY_RIGHT and krmh+1<len(lekh):
			krmh+=1
			vacnm(krmh)
		elif c==ord(' '):
			vacnm(krmh)
		elif c==10 or c==ord('<') or c==ord('>') or c=='62':
			stdscr.addstr(0,0,':')
			nvlekh=stdscr.getstr()
			if nvlekh.decode("utf-8")=='':
				if krmh==-1:break
				else:pass
			elif c==10:
				lekh[krmh]=nvlekh.decode("utf-8")
				ptitani[krmh]=False
			elif c==ord('<'):
				lekh.insert(krmh,nvlekh.decode("utf-8"))
				ptitani.insert(krmh,False)
				ptitani[krmh:]=[False]*(len(ptitani)-krmh)
			elif c==ord('>'):
				lekh.insert(krmh+1,nvlekh.decode("utf-8"))
				ptitani.insert(krmh+1,False)
				ptitani[krmh+1:]=[False]*(len(ptitani)-krmh-1)
				krmh+=1
			stdscr.addstr(0,0,' ')
			vacnm(krmh)
		elif c==ord('x'):
			lekk.pop(krmh)
			ptitani.pop(krmh)
		elif c==ord('s'):
			sncika=open(nam,'w')
			sncika.writelines([l+'\n' for l in lekh])
			sncika.close()
			
	curses.nocbreak()
	stdscr.keypad(False)
	curses.echo()
	curses.endwin()
	sncika=open(nam,'w')
	sncika.writelines([l+'\n' for l in lekh])
	sncika.close()
	global p
	if p:p.terminate()
def main():
	import argparse
	global htsvoice
	parser = argparse.ArgumentParser('ptnm')
	parser.add_argument('htsvoice')
	parser.add_argument('path')
	parser.add_argument('-l',nargs='?',type=int,default=0,help='adykrmh')
	args = parser.parse_args()
	htsvoice=args.htsvoice
	ptnm(args.path,args.l)
main()
