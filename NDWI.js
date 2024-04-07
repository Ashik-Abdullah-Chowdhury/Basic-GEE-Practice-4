// NDWI map of my upazila by using Sentinel-2 imagery for 2023.
var dataset=ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
var upzla=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry()
var Dataset=dataset
.filterBounds(upzla)
.filterDate("2023-01-01","2023-12-31")
.filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",10))
.mean()
print(Dataset)
var b3=Dataset.select("B3")
var b8=Dataset.select("B8")
var ndwi=b3.subtract(b8).divide(b3.add(b8)).rename("NDWI")
var ndwiparams={
  min:-1,
  max:1,
  palette: ['blue', 'white', 'green']
}
Map.addLayer(ndwi.clip(upzla),ndwiparams,"NDWI")
Map.centerObject(upzla)
print(ndwi)
