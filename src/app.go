package main

import (
	"fmt"
	"models"
	"tests"
)

func main() {
	models.Init()
	tests.RegisterTest()
	fmt.Println("Init server")
}
