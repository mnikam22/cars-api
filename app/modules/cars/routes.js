const router = require("express").Router();
const add = require('./add');
router.get('/makes', add.listMakes);
router.get('/makes/models/:makeId', add.listAllModelsByMakeId);
router.get('/fetch_all_makes', add.fetchAllMakes);
router.get('/fetch_make_models/:makeId', add.fetchModelsByMakeId);
router.post('/upload_model_image/:modelId', add.uploadModelImage)
module.exports = router;