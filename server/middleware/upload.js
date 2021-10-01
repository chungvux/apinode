const path = require('path')
const multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/uploads/')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

let uploads = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg'
        ) {
            cb(null, true)
        } else {
            console.log("Only JPEG PNG, JPG supported")
            cb(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 10
    }
})

module.exports = uploads