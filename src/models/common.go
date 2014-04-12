package models

import (
	"fmt"
	"github.com/coopernurse/gorp"
)

type dbAccess func(datasource *gorp.DbMap) (interface{}, error)

func dbTemplate(access dbAccess) (interface{}, error) {
	datasource := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(datasource)

	rst, err := access(datasource)

	// default error handling
	if err != nil {
		fmt.Println(err)
	}

	return rst, err
}
