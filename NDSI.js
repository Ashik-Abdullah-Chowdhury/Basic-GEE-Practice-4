// NDSI map of my upazila by using Sentinel-2 imagery for 2021.
var dataset=ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
var upzla=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry()
var image=dataset
.filterBounds(upzla)
.filterDate("2021-01-01","2023-12-31")
.filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",10))
.median()
print(image)
var ndsi=image.normalizedDifference(["B3","B11"])
print(ndsi)
var visparams={
  min:-1,
  max:1,
  palette:['#ff0004', '#868686', '#774b0a',
           '#10d22c','#ffff52','#818181',
           '#c0c0c0','#f1f1f1','#bac5eb','#52fff9'],
  scale:10         
}
Map.centerObject(upzla)

Map.addLayer(ndsi.clip(upzla),visparams,"NDSI")