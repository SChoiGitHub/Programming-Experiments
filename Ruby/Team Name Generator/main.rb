#The Dictionary here was generated from using the "Trim Words After First Word In Line" program in the Ruby Folder.
#The Dictionary used to deal generate the dictionary here is from: https://raw.githubusercontent.com/sujithps/Dictionary/master/Oxford%20English%20Dictionary.txt

def findDictionary(arguments)
	for x in 0 .. arguments.length-1
		if(arguments[x] == "-d")
			return arguments[x+1]
		end
	end
	
	return "Dictionary.txt"
end

def findNameList(arguments)
	foundN = -1
	lastDashed = -1
	for x in 0 .. arguments.length-1
		
		if(arguments[x][0] == "-")
			if(arguments[x][1] == "n")
				foundN = x
			else
				lastDashed = x
			end
		end
	end
	
	if(lastDashed <= foundN)
		#the last dashed is the found N; it will work
		#in the case that neither dashes exist, it will still work
		return ARGV[(foundN + 1) .. (arguments.length-1)]
	else
		#foundN is no the last one...
		raise 'An error has occured.'
	end
	
end

if(ARGV[0] == "-h")
	#help display
	puts "This is a team name generator."
	puts "If you type in your teammates names as arguements, this program will search through the dictionary file for suitable names based on the first letters of your names."
	puts "Important Flags:"
	puts "\t\"-n\" If you use any of these flags, you must use this after all the other flags. The program will treat all arguements after this as the names you are putting in as an arguement."
	puts "DOES NOT WORK AT THE MOMENT \t\"-o\" This adds the order restriction. With this, the name generator will find words that has the letters in the order you put them in as arguments."
	puts "DOES NOT WORK AT THE MOMENT \t\"-f\" This adds the first letter restriction. This makes it so that the first letter of the name to be generated has to be the letter that you gave it"
	puts "\t\"-d\" This flag requires an additional argument after it. This overrides the dictionary file to be searched. The format should be a word in every new line."
	puts "RWBY? I believe you meant Ruby. I programmed this in Ruby."
elsif(ARGV.length > 0)
	#varible initialization
	
	
	
	begin
		nameList = findNameList(ARGV)
		dictionaryFile = findDictionary(ARGV)
		
		puts "Searching using the dictionary file: "
		puts dictionaryFile
		puts "Searching words using the following names: "
		puts nameList
		puts
		

		
		myFile = File.open(dictionaryFile,"r")
		myFile.each_line do |lookingAt|
			#every word in the file
			#puts lookingAt #DEBUG
			a = 0
			lookingAt.each_char do |compareThis|
				if(a == nameList.length)
					puts lookingAt
					break
				elsif(compareThis.downcase == nameList[a][0].downcase)
					a+=1
				end
			end
			
		end
		myFile.close
	rescue
		puts "An error has occured."
	end
else
	puts "Use \"-h\" as an arguement to see the help."
end


