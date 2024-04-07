// NDVI map of my upazila by using Landsat 9 imagery for 2022
var dataset=ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
var upzla=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry()
var Dataset=dataset
.filterBounds(upzla)
.filterDate("2022-01-01","2022-12-30")
.filter(ee.Filter.lt('CLOUD_COVER',10))
.mean()
print(Dataset)

// selecting bands
var b5=Dataset.select("SR_B5")
var b4=Dataset.select("SR_B4")

// calculating ndvi
var ndvi=b5.subtract(b4).divide(b5.add(b4)).rename("NDVI")
print(ndvi)
Map.centerObject(upzla)
Map.addLayer(ndvi.clip(upzla),{min:-1,max:1,palette:["blue","green","yellow"]},"NDVI")

// NDVI min-max
var stat=ndvi.reduceRegion({
  reducer:ee.Reducer.minMax(),
  geometry:upzla,
  scale:10})
print(stat)