#ifndef CORGI_H
#define CORGI_H

#include "Dog.h"

class Corgi : public Dog{
	public:
		Corgi(std::string name, int age);
		~Corgi();
		void playWith(Animal& who);
		void move();
		void eat(std::string food);
};


#endif
