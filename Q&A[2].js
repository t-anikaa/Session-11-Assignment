//*Make a NDWI map of your upazila by using Sentinel-2 imagery for 2023. 
//*Upload the code, code link, and screenshot in your github repo.
//*Submit the repo link.

var adm3 = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/BGD_adm3");
//Filtering out desired upazila:
var myRegion = adm3.filter(ee.Filter.eq("NAME_3", "Teknaf"));
print(myRegion);
Map.addLayer(myRegion,{}, "Teknaf");
Map.centerObject(myRegion);

// Filtering desired area & time:
var s2 = ee.ImageCollection("COPERNICUS/S2_HARMONIZED")
         .filterBounds(myRegion)
         .filterDate("2023-01-01","2023-12-31")
         .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
         .mean();
print(s2);
Map.addLayer(s2.clip(myRegion));

// Calculating ndwi:
var ndwi = s2.normalizedDifference(["B3","B8"]).rename("NDWI");
var visparams = {
  min:-1,
  max: 1,
  palette:["blue","yellow","green"]
};
print(ndwi, "NDWI Image");

// Visualizing on the map:
Map.addLayer(ndwi.clip(myRegion), visparams, 'NDWI Image');
