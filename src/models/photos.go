package models

import (
// "github.com/nu7hatch/gouuid"
)

type Photo struct {
	Id            int32  `db:"id"`
	JournalId     int    `db:"journal_id" json:"journal_id"`
	Filename      string `db:"filename" json:"filename"`
	Type          int    `db:"type" json:"type"`
	ImageLocation string `db:"image_location" json:"image_location"`
	CreateDate    int64  `db:"create_date" json:"create_date"`
}
