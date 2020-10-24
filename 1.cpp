#include<iostream>
extern "C"
{
#include "common.h"
#include "parser_export.h"
#include "onechannel.h"
#include "incdll.h"
#include "database.h"
#include "phone.h"
extern Database* my_dba;
}

int main()
{
	init_MBR("sa1");
	DiphoneSynthesis *dp=init_DiphoneSynthesis(MBRPeriod(my_dba),max_frame(my_dba),max_samples(my_dba));
	Phone *ph1=init_Phone("v",10),*ph2=init_Phone("A",10);
	dp->RightPhone=ph2;
	dp->LeftPhone=ph1;
	//my_dba->getdiphone_Database( my_dba, dp);
	init_common_Database(my_dba,dp);
	int len_anal = ( nb_frame_diphone(dp)) * MBRPeriod(my_dba);
	int len_left= len_anal -  halfseg_diphone(dp);
	int len_right= halfseg_diphone(dp) ;
	std::cout<<(float)len_anal*1000.0/(float)Freq(my_dba)<<std::endl;
	return 0;
}
