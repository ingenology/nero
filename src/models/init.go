package models

import (
	"database/sql"
	"github.com/coopernurse/gorp"
	_ "github.com/ziutek/mymysql/godrv"
)

var (
	DBPOOL = &ConnectionPoolWrapper{}
)

func Init() {
	DBPOOL.InitPool(100, initDb)

	conn := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(conn)
}

func initDb() (*gorp.DbMap, error) {
	db, connectionError := sql.Open("mymysql", "tcp:localhost:8889*nero/root/root")

	if connectionError != nil {
		panic(connectionError)
	}

	dbmap := &gorp.DbMap{Db: db, Dialect: gorp.MySQLDialect{"InnoDB", "LATIN_SWEDISH_CI"}}

	dbmap.AddTableWithName(Journal{}, "journals").SetKeys(true, "Id")
	dbmap.AddTableWithName(User{}, "users").SetKeys(true, "Id")
	dbmap.CreateTables()

	return dbmap, nil
}

type InitFunction func() (*gorp.DbMap, error)

type ConnectionPoolWrapper struct {
	size int
	conn chan *gorp.DbMap
}

/**
Call the init function 'size' times. If the init function fails during any call, then
the creation of the pool is considered a failure. We don't return size because a nil
return value indicates 'size' connections were successfully created.

We call the init function 'size' times to make sure each connection shares the same
state. The init function should set defaults such as character encoding, timezone,
anything that needs to be the same in each connection.
*/
func (p *ConnectionPoolWrapper) InitPool(size int, initfn InitFunction) error {
	// Create a buffered channel allowing 'size' senders
	p.conn = make(chan *gorp.DbMap, size)
	for x := 0; x < size; x++ {
		conn, err := initfn()
		if err != nil {
			return err
		}

		// If the init function succeeded, add the connection to the channel
		p.conn <- conn
	}
	p.size = size
	return nil
}

/**
Ask for a connection interface from our channel. If there are no
connections available, we block until a connection is ready
*/
func (p *ConnectionPoolWrapper) GetConnection() *gorp.DbMap {
	return <-p.conn
}

/**
Return a connection we have used to the pool
*/
func (p *ConnectionPoolWrapper) ReleaseConnection(conn *gorp.DbMap) {
	p.conn <- conn
}
