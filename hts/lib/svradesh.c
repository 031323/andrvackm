#define VRNSIMA 65536
#include<string.h>
#include<emscripten.h>
double hts_anukalh();
size_t hts_vrnanvh(size_t krmh);
size_t purvanvh=0;
size_t vrnanvh=0;
size_t vrnkrmh=0;
int gnnm=0;
size_t vrnanth[VRNSIMA];
double anukalh;
size_t vrnsnkya,aa;
char svrah[VRNSIMA],svrahL[VRNSIMA],svrahR[VRNSIMA],dvitv[VRNSIMA],gosyh[VRNSIMA];
double us=4.9,as=4.6,sa=4.6,su=4.9,snn=4.6,adi=4.6;
void svrprivrtnm(double as_,double us_,double sa_,double su_,double snn_,double adi_)
{
	us=us_,as=as_;sa=sa_;su=su_;snn=snn_;adi=adi_;
}
void svrstapnm(size_t vrnsnkya0,char *svrah0,char *svrahL0,char *svrahR0,char *dvitv0
//,size_t aa0
//,char *gosyh0
)
{
	purvanvh=0;
	vrnanvh=0;
	vrnkrmh=0;
	gnnm=0;
	anukalh=hts_anukalh();
	vrnsnkya=vrnsnkya0;
	//aa=aa0;
	memcpy(svrah,svrah0,vrnsnkya);
	memcpy(svrahL,svrahL0,vrnsnkya);
	memcpy(svrahR,svrahR0,vrnsnkya);
	memcpy(dvitv,dvitv0,vrnsnkya);
	//memcpy(gosyh,gosyh0,vrnsnkya);
}	
double svradesh0(size_t f){
		//EM_ASM({console.log('g:'+$0)},gosyh);
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
		//EM_ASM({console.log($4+' '+$3+' ) '+$0+': '+$1+' -> '+$2)},f,purvanvh,purvanvh+vrnanvh,vrnkrmh,dvitv[vrnkrmh]);
		//return us
		//double as=vrnkrmh<aa?adi:as;
		if(svrah[vrnkrmh]=='A')return svrahR[vrnkrmh]!='A'?snn:as;
		else if(svrah[vrnkrmh]=='U')return us;
		else if(svrah[vrnkrmh]=='S')
		{
			double udattkalh=(double)vrnanvh*anukalh;
			if(udattkalh>0.1)udattkalh=0.1;
			if(anukalh*(double)(f-purvanvh)<udattkalh)return su+(sa-su)*(double)(f-purvanvh)*anukalh/udattkalh;
			else return sa;
		}
		else if(svrah[vrnkrmh]=='V')
		{
			int dlh=0;
			double bedh=0.9;
			if(dvitv[vrnkrmh]=='X')dlh=(double)(f-purvanvh)>(double)vrnanvh*bedh;
			double p1,p2;
			p1=svrahL[vrnkrmh]=='U'||svrahR[vrnkrmh]!='A'?us:as;
			p2=p1;
			if(vrnkrmh>0)
			{
				if((svrah[vrnkrmh-1]=='A'||svrah[vrnkrmh-1]=='S')&&!dlh)
				{
					p1=svrahR[vrnkrmh-1]!='A'?snn:as;
					if(vrnkrmh<vrnsnkya-1)
					{
						if(svrah[vrnkrmh+1]=='V'||dvitv[vrnkrmh]=='X')p2=as;
					}
				}
				if(svrah[vrnkrmh-1]=='S'&&!dlh)p1=sa;
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
				if(svrah[vrnkrmh+1]=='A'&&(dvitv[vrnkrmh]!='X'||dlh))
					p2=svrahR[vrnkrmh+1]!='A'?snn:as;
				if(svrah[vrnkrmh+1]=='S'&&(dvitv[vrnkrmh]!='X'||dlh))
					p2=su;
			}
			/*
			double p2=svrahR[vrnkrmh]=='A'?as:us;
			double p1=p2;
			if(vrnkrmh>0)if(svrah[vrnkrmh-1]!='V')
				p1=svrahL[vrnkrmh]=='U'?us:as;*/
			if(p1!=p2)
			{
				if(dvitv[vrnkrmh]!='X')
				{
					//EM_ASM({console.log('P ')});
					return p1+(p2-p1)*(double)(f-purvanvh)/(double)vrnanvh;
				}
				else if(!dlh)return p1+(p2-p1)*(double)(f-purvanvh)/(double)vrnanvh/bedh;
				else return p1+(p2-p1)*((double)(f-purvanvh)/(double)vrnanvh/bedh-1.0);
			}
			else return p1;
		}
		return as;
	}
void* svradesadesh(){return &svradesh0;}
