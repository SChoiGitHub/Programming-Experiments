#include <iostream>
#include <fstream>
#include <string>
#include <exception>

template <typename Num>
class Matrix{
	public:
		Matrix();
		Matrix(int r, int c);
		Matrix(std::string nameOfFileContainingMatrix);
		~Matrix();
		void setValueAt(Num v, int r, int c);
		Num getValueAt(int r, int c);
		std::string printable();
		
		Matrix<Num> operator+(Matrix<Num> rhs);
		Matrix<Num> operator-(Matrix<Num> rhs);
		Matrix<Num> operator*(Matrix<Num> rhs);
	private:
		Num dotProduct(Matrix<Num> a, Matrix<Num> b, int r, int c, int s);
		
		int row, col;
		Num** contents;
};

#include "Matrix.hpp"
