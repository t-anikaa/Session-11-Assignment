//*Calculate the maximum and minimum NDVI value of your NDVI map. Upload the 
//*code, code link, and screenshot in your github repo. Submit the repo link.

var adm3 = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/BGD_adm3");
//Filtering out desired upazila:
var myRegion = adm3.filter(ee.Filter.eq("NAME_3", "Teknaf"));
print(myRegion);
Map.addLayer(myRegion,{}, "Tekaf");
Map.centerObject(myRegion);

//Using LANDSAT 9 data for desired region & time:
var l9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_TOA")
           .filterBounds(myRegion)
           .filterDate("2022-01-01", "2023-01-01")
           .filterMetadata('CLOUD_COVER','less_than',1)
           .mean()
           .clip(myRegion);
print(l9);
//Visualizing on the map: 
Map.addLayer(l9);

//Calculating NDVI:
var ndvi = l9.normalizedDifference(["B5","B4"]).rename("NDVI");
var visparams = {
  min: -1,
  max: 1,
  palette: ["blue", "green"]
};
print(ndvi, "NDVI Image");
//Visualizing on the map:
Map.addLayer(ndvi.clip(myRegion), visparams, 'NDVI Image');

//Calculating Max & Min value of NDVI:
var maxmin = ndvi.reduceRegion({
  reducer: ee.Reducer.minMax(),
  geometry: myRegion,
  scale: 10,
  bestEffort: true
});
print(maxmin);

// Getting the Max value individually:
print(maxmin.get("NDVI_max"));

// Getting the Min value individually:
print(maxmin.get("NDVI_min"));

