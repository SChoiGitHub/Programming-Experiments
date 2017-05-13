template <typename Num>
Matrix<Num>::Matrix(){
	row = -1;
	col = -1;
}
template <typename Num>
Matrix<Num>::Matrix(int r, int c){
	row = r;
	col = c;
	contents = new Num*[row];
	for(int y = 0; y < row; y++){
		contents[y] = new Num[col];
	}
}
template <typename Num>
Matrix<Num>::Matrix(std::string fileName){
	std::ifstream inFile;
	inFile.open(fileName);
	
	inFile >> row;
	inFile >> col;
	
	contents = new Num*[row];
	
	if(inFile.is_open()){
		std::string parseThis = "";
		getline(inFile,parseThis); //Clear old line.
		for(int y = 0; y < row; y++){
			contents[y] = new Num[col];
			getline(inFile,parseThis);
			int start = 0;
			for(int x = 0; x < col; x++){
				contents[y][x] = (Num) std::stod(parseThis.substr(start,(signed)parseThis.find_first_of(" \n\r",start)-start));
				start = parseThis.find_first_of(" \n\r",start) + 1;
			}
		}
	}else{
		throw(std::runtime_error("File not found"));
	}
}
template <typename Num>
Matrix<Num>::~Matrix(){
	for(int r = 0; r < row; ++r){
		delete contents[r];
	}
	delete contents;
}
template <typename Num>
void Matrix<Num>::setValueAt(Num v, int r, int c){
	if(r > row || c > col){
		throw(std::runtime_error("Out of bounds."));
	}else{
		contents[r][c] = v;
	}
}
template <typename Num>
Num Matrix<Num>::getValueAt(int r, int c){
	if(r > row || c > col){
		throw(std::runtime_error("Out of bounds."));
	}else{
		return contents[row][col];
	}
}
template <typename Num>
std::string Matrix<Num>::printable(){
	std::string matrix = "";
	for(int r = 0; r < row; ++r){
		matrix += "[ ";
		for(int c = 0; c < col; ++c){
			matrix += std::to_string(contents[r][c]);
			matrix += " ";
		}
		matrix += "]\n";
	}
	return matrix;
}
template <typename Num>
Matrix<Num> Matrix<Num>::operator+(Matrix<Num> rhs){
	if(rhs.row == row && rhs.col == col){
		Matrix<Num> result(row,col);
		for(int y = 0; y < row; ++y){
			for(int x = 0; x < col; ++x){
				result.contents[y][x] = contents[y][x] + rhs.contents[y][x];
			}
		}
		return result;
	}else{
		throw(std::runtime_error("Cannot add matrices of different sizes."));
	}
}
template <typename Num>
Matrix<Num> Matrix<Num>::operator-(Matrix<Num> rhs){
	if(rhs.row == row && rhs.col == col){
		Matrix<Num> result(row,col);
		for(int y = 0; y < row; ++y){
			for(int x = 0; x < col; ++x){
				result.contents[y][x] = contents[y][x] - rhs.contents[y][x];
			}
		}
		return result;
	}else{
		throw(std::runtime_error("Cannot subtract matrices of different sizes."));
	}
}
template <typename Num>
Matrix<Num> Matrix<Num>::operator*(Matrix<Num> rhs){
	if(col == rhs.row){
		Matrix<Num> result(row,rhs.col);
		for(int y = 0; y < row; ++y){
			for(int x = 0; x < rhs.col; ++x){
				result.contents[y][x] = dotProduct(*this, rhs, y, x, col);
			}
		}
		return result;
	}else{
		throw(std::runtime_error("Multiplication between these matrices are impossible, the left matrix's column count is not equal to the right matrix's row count."));
	}
}
template <typename Num>
Num dotProduct(Matrix<Num> a, Matrix<Num> b, int r, int c, int s){
	Num holder;
	for(int w = 0; w < s; ++w){
		holder += a.contents[r][s] * b.contents[s][c];
	}
	return holder;
}
