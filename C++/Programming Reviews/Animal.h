#ifndef ANIMAL
#define ANIMAL

#include "Tuple.h"
#include <string>
#include <iostream>



class Animal{
	public:
		virtual ~Animal();
		virtual void playWith(Animal& who) = 0;
		virtual void move() = 0;
		virtual void eat(std::string) = 0;
		virtual std::string getName() = 0;
		virtual int getAge() = 0;
		virtual void gotToHaveFun() = 0;
	protected:
		bool hadFun, exercised, hungry;
		Tuple<std::string, int>* information;
};


#endif
