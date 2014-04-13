package models

import (
    "database/sql"
    "github.com/DATA-DOG/go-sqlmock"
    "testing"
    "fmt"
)

// user registration
func TestResetPassword(t *testing.T) {
    // open database stub
    db, err := sql.Open("mock", "")
    if err != nil {
        t.Errorf("An error '%s' was not expected when opening a stub database connection", err)
    }

    // columns to be used for result
    columns := []string{"id","first_name", "last_name", "email", "password"}
    // expect transaction begin
    sqlmock.ExpectBegin()
    sqlmock.ExpectQuery("SELECT (.+) FROM user FOR UPDATE").
    WithArgs(1).
     WillReturnRows(sqlmock.NewRows(columns).AddRow(1, "John", "Doe", "John.Doe@johndoe.com", "password"))
    // expect query to fetch order, match it with regexp
    sqlmock.ExpectExec("UPDATE user SET PASSWORD").
        WithArgs("John.Doe@johndoe.com", "newpassword").
        WillReturnRows(sqlmock.NewResult(0, 1))
    // expect transaction rollback, since order status is "cancelled"
    sqlmock.ExpectCommit()

    // call a function which executes expected database operations
    err = ResetPassword("John.Doe@johndoe.com", "password", db)
    if err != nil {
        t.Errorf("Expected no error, but got %s instead", err)
    }
    // db.Close() ensures that all expectations have been met
    if err = db.Close(); err != nil {
        t.Errorf("Error '%s' was not expected while closing the database", err)
    }
}