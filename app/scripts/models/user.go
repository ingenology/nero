package models

import(
    "strings"
    "encoding/json"
    "fmt"
    "github.com/coopernurse/gorp"
    "strconv"
    // "utilities"
    
)

func SaveUser(userInfo *User)(string, string){

    dbmap := dbPool.GetConnection()
    defer dbPool.ReleaseConnection(dbmap)
    error:=dbmap.Insert(userInfo);
    
    // go func(fbid string, picture string){
    //  utilities.SaveImagePath(fbid,picture)
    // }(userInfo.FBid,userInfo.Lpicture)

    if isDbQueryError(error){
        if strings.Contains(error.Error(), "1062") {
            query:=`UPDATE User 
                    SET password=?, first_name=?, last_name=?, email=? 
                    WHERE id=?;`
            _,uerror:=dbmap.Exec(query,userInfo.password,userInfo.first_name,userInfo.last_name,userInfo.email,userInfo.id)
            if isDbQueryError(uerror){
                return "false","database error"
            }           
            return "true","updated user successfully"
        }
    }
    return "true","add user successfully"
}

func ResetPassword(email string, password string)(string, string){

    dbmap := dbPool.GetConnection()
    defer dbPool.ReleaseConnection(dbmap)

    query:=`UPDATE User 
            SET password=?
            WHERE email=?;`
    fmt.Println(userInfo)
    _,error:=dbmap.Exec(query,password,email)
    if(isDbQueryError(error)){
        return "false","database error"
    }
    return "true","password Reset was successfully"
}

func Login(email string, password string)(User, error){
    var userInfo []*User
    query:=`SELECT user.id,
                   user.first_name,
                   user.last_name,
                   user.email 
            FROM user  
            WHERE user.email = ?
            AND user.password = ?;`
    error := dbmap.Select(&userInfo, email, password)
    return userInfo, error
}

