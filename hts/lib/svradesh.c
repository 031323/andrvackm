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
char svrah[VRNSIMA],svrahL[VRNSIMA],svrahR[VRNSIMA];
void svrstapnm(size_t vrnsnkya0,char *svrah0,char *svrahL0,char *svrahR0)
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
			if(anukalh*(double)(f-purvanvh)<0.06)return us+(as-us)*(double)(f-purvanvh)*anukalh/0.06;
			else return as;
		}
		else if(svrah[vrnkrmh]=='V')
		{
			double p2=svrahR[vrnkrmh]=='A'?as:us;
			double p1=p2;
			if(vrnkrmh>0)if(svrah[vrnkrmh-1]!='V')
				p1=svrahL[vrnkrmh]=='U'?us:as;
			if(p1!=p2)return p1+(p2-p1)*(double)(f-purvanvh)/(double)vrnanvh;
			else return p1;
		}
		return as;
	}
void* svradesadesh(){return &svradesh0;}
