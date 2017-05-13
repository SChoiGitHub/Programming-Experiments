#include "Matrix.h"
#include <string>
int main(int argc, char** argv){
	Matrix<int> myM1("myDoc1");
	Matrix<int> myM2("myDoc2");
	std::cout << myM1.printable() << '\n';
	std::cout << myM2.printable() << '\n';
	Matrix<int> myM3(2,2);
	myM3.setValueAt(0,0,0);
	myM3.setValueAt(1,0,1);
	myM3.setValueAt(2,1,0);
	myM3.setValueAt(3,1,1);
	std::cout << (myM3).printable() << '\n';
	
}
