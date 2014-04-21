package utils

func FileUploader(file []bytes, contentType string, filename string) {
	auth, err := aws.EnvAuth()
	if err != nil {
		fmt.Println(err)
	}
	s := s3.New(auth, aws.USWest2)
	bucket := s.Bucket("neroimages")
	bucket.Put("image.jpg", fileBytes, contentType, s3.BucketOwnerFull, s3.Options{})
}
