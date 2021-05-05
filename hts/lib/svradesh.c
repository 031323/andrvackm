#define VRNSIMA 65536
#include<string.h>
double hts_anukalh();
size_t hts_vrnanvh(size_t krmh);
size_t purvanvh=0;
size_t vrnanvh=0;
size_t vrnkrmh=0;
int gnnm=0;
size_t vrnanth[VRNSIMA];
double anukalh;
size_t vrnsnkya;
char svrah[VRNSIMA],svrahL[VRNSIMA],svrahR[VRNSIMA],dvitv[VRNSIMA];
void svrstapnm(size_t vrnsnkya0,char *svrah0,char *svrahL0,char *svrahR0,char *dvitv0)
{
	purvanvh=0;
	vrnanvh=0;
	vrnkrmh=0;
	gnnm=0;
	anukalh=hts_anukalh();
	vrnsnkya=vrnsnkya0;
	memcpy(svrah,svrah0,vrnsnkya);
	memcpy(svrahL,svrahL0,vrnsnkya);
	memcpy(svrahR,svrahR0,vrnsnkya);
	memcpy(dvitv,dvitv0,vrnsnkya);
}	
double svradesh0(size_t f){
		if(!gnnm)
		{
			size_t sum=0;
			for(size_t i=0;i<vrnsnkya;i++)
			{
				size_t v=hts_vrnanvh(i);
				sum+=v;
				vrnanth[i]=sum;
			}
			vrnanvh=vrnanth[0];
			gnnm=1;
		}
		if(f>vrnanvh+purvanvh)
		{
			while(f>vrnanth[vrnkrmh])vrnkrmh+=1;
			//console.log(vrnkrmh)
			//console.log(arr[2][vrnkrmh])
			purvanvh=vrnanth[vrnkrmh-1];
			vrnanvh=vrnanth[vrnkrmh]-vrnanth[vrnkrmh-1];
			//console.log(vrnanvh)
		}
		double us=4.9,as=4.6;
		//return us
		if(svrah[vrnkrmh]=='A')return as;
		else if(svrah[vrnkrmh]=='U')return us;
		else if(svrah[vrnkrmh]=='S')
		{
			double udattkalh=(double)vrnanvh*anukalh;
			if(udattkalh>0.1)udattkalh=0.1;
			if(anukalh*(double)(f-purvanvh)<udattkalh)return us+(as-us)*(double)(f-purvanvh)*anukalh/udattkalh;
			else return as;
		}
		else if(svrah[vrnkrmh]=='V')
		{
			int dlh=0;
			double bedh=0.9;
			if(dvitv[vrnkrmh])dlh=(double)(f-purvanvh)>(double)vrnanvh*bedh;
			double p1,p2;
			p1=svrahL[vrnkrmh]=='U'||svrahR[vrnkrmh]!='A'?us:as;
			p2=p1;
			if(vrnkrmh>0)
			{
				if((svrah[vrnkrmh-1]=='A'||svrah[vrnkrmh-1]=='S')&&!dlh)
				{
					p1=as;
					if(vrnkrmh<vrnsnkya-1)
					{
						if(svrah[vrnkrmh+1]=='V'||dvitv[vrnkrmh])p2=as;
					}
				}
				if(svrah[vrnkrmh-1]=='V'||dlh)
				{
					if(vrnkrmh>1&&!dlh)
					{
						if(svrah[vrnkrmh-2]=='A'||svrah[vrnkrmh-2]=='S')p1=as;
					}
					if(dlh)
					{
						if(svrah[vrnkrmh-1]=='A'||svrah[vrnkrmh-1]=='S')p1=as;
					}
				}
			}
			if(vrnkrmh<vrnsnkya-1)
			{
				if(svrah[vrnkrmh+1]=='A'&&(!dvitv[vrnkrmh]||dlh))
					p2=as;
			}
			/*
			double p2=svrahR[vrnkrmh]=='A'?as:us;
			double p1=p2;
			if(vrnkrmh>0)if(svrah[vrnkrmh-1]!='V')
				p1=svrahL[vrnkrmh]=='U'?us:as;*/
			if(p1!=p2)
			{
				if(!dvitv[vrnkrmh])return p1+(p2-p1)*(double)(f-purvanvh)/(double)vrnanvh;
				else if(!dlh)return p1+(p2-p1)*(double)(f-purvanvh)/(double)vrnanvh/bedh;
				else return p1+(p2-p1)*((double)(f-purvanvh)/(double)vrnanvh/bedh-1.0);
			}
			else return p1;
		}
		return as;
	}
void* svradesadesh(){return &svradesh0;}
