package main

import (
	"fmt"
	"time"
)

func main() {
	value := "04/19/1979" // my birthday
	parseFormat := "01/02/2006"

	// parse the string into a time object
	time, _ := time.Parse(parseFormat, value)

	printFormat := "02.01.2006"

	// and print it with the desired format
	fmt.Println(time.Format(printFormat))
}

// => "19.04.1979"
