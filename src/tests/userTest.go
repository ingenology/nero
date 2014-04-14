package tests

import (
	"fmt"
	"models"
)

func RegisterTest() {
	user := &models.User{
		Email:      "test@gmail.com",
		Password:   "test",
		First_name: "test",
		Last_name:  "test"}
	fmt.Println(models.Register(user))
}

func LoginTest() {
	fmt.Println(models.Login("test@gmail.com", "test"))
}
