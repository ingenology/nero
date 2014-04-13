package main

import (
	"fmt"
	"models"
	"tests"
)

func main() {
	models.Init()
	tests.RegisterTest()
	tests.LoginTest()
	fmt.Println("Init server")
}
