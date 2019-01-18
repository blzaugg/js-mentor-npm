# js-mentor-npm

Example utility for:

- parsing file and string input
- providing metrics about input
- transforming input

## Installation

```bash
npm install -g js-mentor-npm
```

## Usage

```bash
js-mentor-npm [OPTION]... [INPUT|FILE]
```

## Options

| Option | Description                       |
| ------ | --------------------------------- |
| -d     | Report duplicate word count.      |
| -u     | Report unique word count.         |
| -w     | Report word count.                |
| -r     | Reverse words and display result. |
| -s     | Sort words and display result.    |
| -h     | Display this help info.           |
| -v     | Output version info.              |

## Examples

```bash
# Read from file
$ js-mentor-npm file-path/file.txt
apple orange bannana crab apple pine apple blue berry black berry

$ myString="apple orange bannana crab apple pine apple blue berry black berry"

# Read from string. Report duplicates and unique count.
$ js-mentor-npm -d -uw $myString
Duplicate Word Count: apple (3), berry (2)
Unique Word Count: 8
Word Count: 11

apple orange bannana crab apple pine apple blue berry black berry

# Read from string. Sort and reverse.
$ js-mentor-npm -sr $myString
pine orange crab blue black berry berry bannana apple apple apple
```