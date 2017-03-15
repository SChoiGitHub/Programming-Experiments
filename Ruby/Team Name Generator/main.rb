if(ARGV[0] == "-h")
	#help display
	puts "This is a team name generator."
	puts "If you type in your teammates names as arguements, this program will search through the dictionary file for suitable names based on the first letters of your names."
	puts "Important Flags:"
	puts "\t\"-n\" If you use any of these flags, you must use this after all the other flags. The program will treat all arguements after this as the names you are putting in as an arguement."
	puts "\t\"-o\" This adds the order restriction. With this, the name generator will find words that has the letters in the order you put them in as arguments."
	puts "\t\"-f\" This adds the first letter restriction. This makes it so that the first letter of the name to be generated has to be the letter that you gave it"
	puts "\t\"-d\" This flag requires an additional argument after it. This overrides the dictionary file to be searched. The format should be a word in every new line."
	puts "RWBY? I believe you meant Ruby. I programmed this in Ruby."
elsif(ARGV.length > 0)
	#varible initialization
	ordered = false
	firstLetterRestriction = false
	usedFlags = false
	dictionaryFile = "Dictionary.txt"
	namesBeginAt = 0
	
	
	for x in 0..ARGV.length-1
		#flag parsing
		searching = ARGV[x]
		if(searching[0] == '-')
			usedFlags = true
			if(searching[1] == 'o')
				ordered = true
				counter-=1
			elsif(searching[1] == 'f')
				firstLetterRestriction = true
				counter-=1
			elsif(searching[1] == 'd')
				dictionaryFile = ARGV[x+1]
				counter-=2
			end
		end
	end

	if(usedFlags)
		#flags are being
		namesBeginAt = -1 #will indicate if we find the -n flag or not.
		for x in (ARGV.length-1).downto(0)
			if(ARGV[0] = '-')
				if(ARGV[1] = 'n')
					namesBeginAt = x+1 #This is where the names begin
				else
					puts "You must use \"-n\" after all your flags to indicate which names are used."
					break;
				end
			end
		end
	end

	if(namesBeginAt != -1) #it must pass this requirement in order to execute
		#second batch of varibles
		dictionary = File.open(dictionaryFile,"r")
		counter = 0
		size = ARGV.length-namesBeginAt
		charToSearch = Array.new(size)

		#fill the varible of letters we are searching for
		for x in 0..ARGV.length-1
			charToSearch[counter] = a[0].downcase
			counter+=1
		end

		if(ordered)
			#ordered process
			while (line = dictionary.gets)
				temp = 0
				line.each_char do|b|		
					if(temp == ARGV.length)
						puts line
						break;
					end
					charToSearch.each do|c|
						#searches all the characters
						if(charToSearch[temp] == b.downcase)
							temp+=1
							break;
						end
					end
				end
			end
		else
			#unordered process
			while (line = dictionary.gets)
				temp = 0
				line.each_char do|b|		
					if(temp == ARGV.length)
						puts line
						break;
					end
					if(charToSearch[temp] == b.downcase)
						temp+=1
					end
				end
			end
		end

		dictionary.close #close the file
	end
else
	puts "Use \"-h\" as an arguement to see the help."
end
