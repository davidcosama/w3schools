# The File System module has methods for creating new files:

## fs.appendFile()
Appends specified content to a file. If the file does not exist, the file will be created

## fs.open()
Takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created

## fs.writeFile()
Replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
