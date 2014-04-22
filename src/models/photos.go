package models

import (
	"fmt"
	"github.com/nu7hatch/gouuid"
	"strconv"
	"strings"
	"time"
	"utils"
)

type Photo struct {
	Id            int32  `db:"id" json:"id"`
	JournalId     int    `db:"journal_id" json:"journal_id"`
	Filename      string `db:"filename" json:"filename"`
	Type          int    `db:"type" json:"type"`
	ImageLocation string `db:"image_location" json:"image_location"`
	CreateDate    int64  `db:"create_date" json:"create_date"`
}

func CreateNewPhotoForJournal(userId string, journalId string, file []byte, rawFileName string, contentType string, inputType string) {
	dbmap := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(dbmap)
	splitFileName := strings.Split(rawFileName, ".")
	guid, _ := uuid.NewV4()
	filename := guid.String() + "." + splitFileName[len(splitFileName)-1]
	go utils.FileUploader(file, contentType, filename, aws_access_key, aws_secret_key)
	journalIdInt, journalIdConversionError := strconv.Atoi(journalId)
	inputTypeInt, inputTypeConversionError := strconv.Atoi(inputType)
	if journalIdConversionError != nil || inputTypeConversionError != nil {
		fmt.Println(journalIdConversionError, inputTypeConversionError)
		return
	}
	photo := &Photo{
		JournalId:     journalIdInt,
		Filename:      filename,
		Type:          inputTypeInt,
		CreateDate:    time.Now().Unix(),
		ImageLocation: s3Location + filename}
	if photoInsertError := dbmap.Insert(photo); photoInsertError != nil {
		fmt.Println(photoInsertError)
	}

}
