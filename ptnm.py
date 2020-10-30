#!/usr/bin/env python
import curses
import re
import os
import signal
from subprocess import Popen
lekh=[]
p=None
def vacnm(lekkrmh):
	global lekh
	global p
	if p:
		os.killpg(os.getpgid(p.pid), signal.SIGTERM)
	p=Popen('echo "'+lekh[lekkrmh]+'।"|./suvackm|../espeak-ng-3/espeak-ng/src/espeak-ng -p 30 -v"sa" -s 100  --path=../espeak-ng-3/espeak-ng/',shell=True,preexec_fn=os.setsid)
	
def ptnm(nam,adikrm=0):
	sncika=open(nam,'r')
	global lekh
	global p
	lekh=list(filter(None,re.split('।|॥|\n',sncika.read())))
	sncika.close()
	c=0
	if(len(lekh)<1):c='62'
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
			elif c==ord('<'):
				lekh.insert(krmh,nvlekh.decode("utf-8"))
			elif c==ord('>'):
				lekh.insert(krmh+1,nvlekh.decode("utf-8"))
				krmh+=1
			stdscr.addstr(0,0,' ')
			vacnm(krmh)
		elif c==ord('x'):
			lekh.pop(krmh)
			if krmh==len(lekh)-1:krmh-=1
		elif c==ord('s'):
			sncika=open(nam,'w')
			sncika.writelines([l+'\n' for l in lekh])
			sncika.close()
		elif c==ord('z'):
			if p:
				os.killpg(os.getpgid(p.pid), signal.SIGTERM)
				
			
	curses.nocbreak()
	stdscr.keypad(False)
	curses.echo()
	curses.endwin()
	sncika=open(nam,'w')
	sncika.writelines([l+'\n' for l in lekh])
	sncika.close()
	if p:
		os.killpg(os.getpgid(p.pid), signal.SIGTERM)
def main():
	import argparse
	parser = argparse.ArgumentParser('ptnm')
	parser.add_argument('infile',metavar='path')
	parser.add_argument('-l',nargs='?',type=int,default=0)
	args = parser.parse_args()
	ptnm(args.infile,args.l)
main()
