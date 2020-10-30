#include<list>
#include<algorithm>
#include<string>
#include<vector>
#include<map>
#include<iostream>
#include<fstream>
#include<cstdlib>
#include"anulekh.h"
#ifdef EMSCRIPTEN
#include <emscripten.h>
#endif

class वाचकम्
{
public:
	class वर्णसङ्ग्रहः
	{
		static const int अवकाशः=20;
		std::pair<वर्णः,int> सङ्ग्रहः[अवकाशः];
		size_t स्थानम्=0,आदिः=0,अन्तः=0;
		bool लोपः=false;
	public:
		struct वर्णक्रमः
		{
			std::pair<वर्णः,int> (*क्रमणम्)(void*);
			void* अन्वयः;
		};
	private:
		 वर्णक्रमः वर्णाः;
	public:
		वर्णसङ्ग्रहः(वर्णक्रमः यद्वर्णाः)
		{
			वर्णाः=यद्वर्णाः;
			सङ्ग्रहः[0]=वर्णाः.क्रमणम्(वर्णाः.अन्वयः);
		}
		
		template <typename अङ्कनम्>
		void वृद्धिः(अङ्कनम् & अङ्कः){अङ्कः++;if(अङ्कः==अवकाशः)अङ्कः=0;}
		template <typename अङ्कनम्>
		अङ्कनम् अन्तरम्(const अङ्कनम् आदिः,const अङ्कनम् अन्तः)
		{
			if(अन्तः>=आदिः)return अन्तः-आदिः;
			else return अन्तः-आदिः+अवकाशः;
		}
		
		std::pair<वर्णः,int> पठनम्(int अतिक्रमः=0)
		{
			if(अतिक्रमः==0)return सङ्ग्रहः[स्थानम्];
			else if(अतिक्रमः<0)
			{
				if(-अतिक्रमः<=अन्तरम्(आदिः,स्थानम्))
				{
					int लक्ष्यः=स्थानम्+अतिक्रमः;
					if(लक्ष्यः<0)लक्ष्यः+=अवकाशः;
					return सङ्ग्रहः[लक्ष्यः];
				}
				else if(!लोपः)return std::make_pair((वर्णः)0,सङ्ग्रहः[0].second);
				else throw(अतिक्रमः);
			}
			else
			{
				if(अतिक्रमः<=अन्तरम्(स्थानम्,अन्तः))
				{
					int लक्ष्यः=स्थानम्+अतिक्रमः;
					if(लक्ष्यः>अवकाशः)लक्ष्यः-=अवकाशः;
					return सङ्ग्रहः[लक्ष्यः];
				}
				else if(अतिक्रमः<अवकाशः)
				{
					int लक्ष्यः=स्थानम्+अतिक्रमः;
					if(लक्ष्यः>=अवकाशः)लक्ष्यः-=अवकाशः;
					while(अन्तः!=लक्ष्यः)
					{
						वृद्धिः(अन्तः);
						if(अन्तः==आदिः){वृद्धिः(आदिः);लोपः=true;}
						सङ्ग्रहः[अन्तः]=वर्णाः.क्रमणम्(वर्णाः.अन्वयः);
					}
					return सङ्ग्रहः[लक्ष्यः];
				}
				else throw(अतिक्रमः);
			}
		}
		void क्रमणम्()
		{
			if(स्थानम्!=अन्तः)वृद्धिः(स्थानम्);
			else
			{
				वृद्धिः(अन्तः);
				स्थानम्=अन्तः;
				if(अन्तः==आदिः){वृद्धिः(आदिः);लोपः=true;}
				सङ्ग्रहः[अन्तः]=वर्णाः.क्रमणम्(वर्णाः.अन्वयः);
			}
		}
	};
	वर्णसङ्ग्रहः पाठः;
	
	वाचकम्(वर्णसङ्ग्रहः::वर्णक्रमः यद्वर्णाः):पाठः(यद्वर्णाः)
	{
	}
	वाचकम्(const वाचकम् &)=delete;
	वाचकम्& operator=(const वाचकम् &)=delete;
	
#ifdef EMSCRIPTEN0
	std::list<std::string>
#else
#ifdef EMSCRIPTEN
	std::string
#else
	void
#endif
#endif
	वाचनम्()
	{
		/*unsigned long int कालः=0;
		
		std::ofstream कण्ठ्यान्तरम्("x1",std::ios::binary);
		std::ofstream गुणः("x2",std::ios::binary);
		*/
		const int देशः=1;
		
		
		
#ifdef EMSCRIPTEN
		std::string परमोत्पत्तिः="[[";		
#else
		std::cout<<"[[";//<prosody rate=\"1\"> 
#endif
		bool loph=false;
		while(true)
		{
			std::string उदात्तस्य="130",अनुदात्तस्य="100";
			वर्णः पूर्वः=पाठः.पठनम्(-1).first,पश्चिमः=पाठः.पठनम्(1).first,उपस्थितः=पाठः.पठनम्().first;
			int स्वरः_=पाठः.पठनम्().second;
			int पूर्वस्वरः=पाठः.पठनम्(-1).second;
			
			std::string उत्पत्तिः=anulekh(पूर्वः,उपस्थितः,पश्चिमः,स्वरः_,पूर्वस्वरः,loph);
			
			if(पश्चिमः==(वर्णः)-2)
			{
				उत्पत्तिः+=" ";
				#ifndef EMSCRIPTEN
				std::cout<<उत्पत्तिः;
				#else
				परमोत्पत्तिः+=उत्पत्तिः;
				#endif
				break;
			}
			else पाठः.क्रमणम्();
			//std::cout<<अङ्कनम्[उपस्थितः]<<std::endl;
			
#ifdef EMSCRIPTEN
			परमोत्पत्तिः+=उत्पत्तिः;
#else
			std::cout<<उत्पत्तिः;
#endif
		}
#ifdef EMSCRIPTEN
			परमोत्पत्तिः+=std::string("]]");
#else
		std::cout<<"]]\n";// </prosody>\n";
#endif
#ifdef EMSCRIPTEN
		return परमोत्पत्तिः;
#endif
	}
};
std::vector<int16_t> शब्दः;
#ifdef EMSCRIPTEN0
extern "C"
{
char *शब्दनम्(const char *लेखः);
}
char *शब्दनम्(const char *लेखः)
{
	std::string सुलेखः(लेखः);
	auto वर्णस्वराः=वर्णनिर्णयः(सुलेखः.c_str());
	std::list<वर्णः> क्रमः=वर्णस्वराः.first;
	std::list<int> स्वरक्रमः=वर्णस्वराः.second;
	क्रमः.push_back((वर्णः)-2);
	स्वरक्रमः.push_back(0);
	std::list<वर्णः>::iterator स्थानम्=क्रमः.begin();
	std::list<int>::iterator स्वरस्थानम्=स्वरक्रमः.begin();
	auto क्रमणम्=[&क्रमः,&स्थानम्,&स्वरक्रमः,&स्वरस्थानम्]()
	{
		वर्णः उपस्थितः=*स्थानम्;
		int स्वरः=*स्वरस्थानम्;
		स्थानम्++;
		स्वरस्थानम्++;
		if(स्थानम्==क्रमः.end()){स्थानम्=क्रमः.begin();स्वरस्थानम्=स्वरक्रमः.begin();}
		return std::make_pair(उपस्थितः,स्वरः);
	};
	वाचकम् मुखम्({(std::pair<वर्णः,int> (*)(void*))([](void* d){return (*static_cast<decltype(क्रमणम्)*>(d))();}),&क्रमणम्});
	std::list<std::string> bola=मुखम्.वाचनम्();
	std::list<std::string>::iterator i=bola.begin();
	int s=0;
	while(i!=bola.end())
	{
		if(write_MBR((char*)(i->c_str()))==0)
			{std::cout<<"write0";break;}
		i++;
		int r=0;
		int16_t b[16000]; 
		while(true)
		{
			r=readtype_MBR((void*)b,16000-r,LIN16);
			s+=r;
			if(!r)break;
		}
		std::vector<int16_t> उपशब्दः(b,b+s);
		शब्दः.insert(शब्दः.end(),उपशब्दः.begin(),उपशब्दः.end());
	}
	return (char *)(&शब्दः[0]);
}
#endif

#ifndef EMSCRIPTEN0
#ifndef EMSCRIPTEN
int main()
#else
extern "C"{

int main()
{
	EM_ASM(
	window.suvacnm='1';
	if(window.espeak=='1')window.cb()
	);
}
const char* anulekh(char *lekh);

}
std::string vilekh;
const char* anulekh(char *lekh)
#endif
{
	std::string लेखः="";
	#ifndef EMSCRIPTEN
	while(!std::cin.eof())
	{
		std::getline(std::cin,लेखः);
	#else
	लेखः=std::string(lekh);
	#endif
	
		//if(लेखः=="0")break;
		auto वर्णस्वराः=वर्णनिर्णयः(लेखः.c_str());
		std::list<वर्णः> क्रमः=वर्णस्वराः.first;
		std::list<int> स्वरक्रमः=वर्णस्वराः.second;
		क्रमः.push_back((वर्णः)-2);
		स्वरक्रमः.push_back(0);
		std::list<वर्णः>::iterator स्थानम्=क्रमः.begin();
		std::list<int>::iterator स्वरस्थानम्=स्वरक्रमः.begin();
		auto क्रमणम्=[&क्रमः,&स्थानम्,&स्वरक्रमः,&स्वरस्थानम्]()
		{
			वर्णः उपस्थितः=*स्थानम्;
			int स्वरः=*स्वरस्थानम्;
			स्थानम्++;
			स्वरस्थानम्++;
			if(स्थानम्==क्रमः.end()){स्थानम्=क्रमः.begin();स्वरस्थानम्=स्वरक्रमः.begin();}
			return std::make_pair(उपस्थितः,स्वरः);
		};
		वाचकम् मुखम्({(std::pair<वर्णः,int> (*)(void*))([](void* d){return (*static_cast<decltype(क्रमणम्)*>(d))();}),&क्रमणम्});
		#ifdef EMSCRIPTEN
		vilekh=मुखम्.वाचनम्();
		free(lekh);
		return vilekh.c_str();
		#else
		मुखम्.वाचनम्();
	}
	#endif
}
#else
int main()
{
}
#endif
