package main

import ( 
  "fmt"
)

func main() {
	vertices := make (map[string]int)
	// Declares new elements in a map
	vertices["triangle"] = 2
	vertices["square"] = 3
	vertices["dodecagon"] = 12
	
	delete(vertices, "square") // Deletes an element in a map
	
	fmt.Println(vertices)
}