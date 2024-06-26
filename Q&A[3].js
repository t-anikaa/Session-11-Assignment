// *Make a NDSI map of your upazila by using Sentinel-2 imagery for 2021. 
// *Upload the code, code link, and screenshot in your github repo. 
// *Submit the repo link.

var adm3 = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/BGD_adm3");
//Filtering out desired upazila:
var myRegion = adm3.filter(ee.Filter.eq("NAME_3", "Teknaf"));
print(myRegion);
Map.addLayer(myRegion,{}, "Teknaf");
Map.centerObject(myRegion);

//Filtering the area and time:
var s2 = ee.ImageCollection("COPERNICUS/S2_HARMONIZED")
         .filterBounds(myRegion)
         .filterDate("2021-01-01","2022-01-01")
         .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',5))
         .mean();
print(s2);  
//Visualizing on the map:
Map.addLayer(s2.clip(myRegion));

//Calculating NDSI:
var ndsi = s2.normalizedDifference(["B3","B11"]).rename("NDSI");
var visparams = {
  min:-1,
  max: 1,
  palette:["red","yellow","green"]
};
print(ndsi, "NDSI Image");
//Visualizing on the map:
Map.addLayer(ndsi.clip(myRegion), visparams, 'NDSI Image');
