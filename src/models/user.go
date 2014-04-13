package models

import (
	"crypto/sha1"
	"fmt"
)

type User struct {
	Id         int
	Email      string
	Password   string
	First_name string
	Last_name  string
}

func Register(user *User) (bool, int, string) {
	dbmap := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(dbmap)
	userFromDb := getUserByEmail(user.Email)
	if userFromDb != nil {
		return false, 401, "Account with that email already exists."
	}
	user.Password = hashString(user.Password)
	if insertError := dbmap.Insert(user); insertError != nil {
		return false, 500, insertError.Error()
	} else {
		return true, 200, "Successfully created user account."
	}
}

func Login(email, password string) (bool, int, string, *User) {
	dbmap := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(dbmap)
	user := getUserByEmail(email)
	if user == nil {
		return false, 300, "User not found", nil
	}
	if user.Password == hashString(password) {
		return true, 200, "Successfully found user", user
	} else {
		return false, 401, "Password does not match.", nil
	}
}

func hashString(password string) string {
	passwordBytes := []byte(password)
	hasher := sha1.New()
	hasher.Write(passwordBytes)
	return string(hasher.Sum(nil))
}

func getUserByEmail(email string) (user *User) {
	dbmap := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(dbmap)
	query := "select * from users where users.email =? limit 1"
	var results []*User
	_, userSearchErr := dbmap.Select(&results, query, email)
	if userSearchErr != nil || len(results) == 0 {
		fmt.Println(userSearchErr)
		return nil
	}
	return results[0]
}