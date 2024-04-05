# Session-11-Assignment
**Q[1]**: **Make a NDVI map of your upazila by using Landsat 9 imagery for 2022. Upload the code, code link, and screenshot in your github repo. Submit the repo link.**

Here, I've created an NDVI (Normalized Difference Vegetation Index) map for Teknaf upazila in 2022 using Landsat 9 imagery. NDVI measures vegetation density and health by comparing near-infrared (NIR) and red bands. NDVI ranges from -1 to 1, where different values indicate- 

**Values Near -1:** These represent non-vegetated or barren surfaces such as
water bodies, bare soil, or urban areas. These surfaces typically reflect more in the red band than in the near-infrared band, resulting in negative NDVI values.

**Values Near 0:** These suggest sparse or stressed vegetation, such as areas with limited vegetation cover, vegetation experiencing drought, or areas with sparse vegetation density.

**Values Near 1:** These indicate dense and healthy vegetation. Dense vegetation absorbs most of the incoming visible light and reflects a large portion of the incoming near-infrared radiation, resulting in high NDVI values.

I filtered Landsat 9 imagery for Teknaf in 2022, selected NIR (Band 5) and red (Band 4) bands, calculated NDVI, and visualized it. This provides insights into vegetation health, with higher NDVI values indicating denser and healthier vegetation, aiding in environmental monitoring and agricultural assessments. The required links are attached here:


*   [GEE link](https://code.earthengine.google.com/52d2fc35b844df6939d201c770f6bfa9)
*   [Code file](https://github.com/t-anikaa/Session-11-Assignment/blob/main/Q%26A%5B1%5D.js)
![Capture 1 PNG](https://github.com/t-anikaa/Session-11-Assignment/assets/161161157/bce5c0d2-2296-4111-a869-a52aeef6aa5c)




**Q[2]:Make a NDWI map of your upazila by using Sentinel-2 imagery for 2023. Upload the code, code link, and screenshot in your github repo. Submit the repo link.**

Here, I've created an NDWI (Normalized Difference Water Index) map for Teknaf upazila in 2023 using Sentinel-2 imagery. NDWI is a spectral index designed to highlight water bodies by leveraging the differences in the absorption and reflection of green and near-infrared light.

NDWI values range from -1 to 1:

**Values Near -1:** These indicate water bodies, as water absorbs near-infrared light and reflects green light, resulting in low green and high near-infrared values.

**Values Near 0:** These represent non-water surfaces, such as land, vegetation, or built-up areas, where there's little contrast between green and near-infrared reflectance.

**Values Near 1:** Although less common in water detection applications, these values may occur in certain scenarios where there's significant contrast between green and near-infrared reflectance, possibly due to unique surface properties.

I filtered Sentinel-2 imagery for Teknaf in 2023, selected the green (B3) and near-infrared (B8) bands, calculated NDWI, and visualized it. This map facilitates the identification and mapping of water bodies, aiding in water resource management, environmental monitoring, and disaster response efforts for the region. Here are the links:


*   [GEE link](https://code.earthengine.google.com/26541a1b19062abce06e8c9eb04306d9)
*   [Code file](https://github.com/t-anikaa/Session-11-Assignment/blob/main/Q%26A%5B2%5D.js)
![Capture 2](https://github.com/t-anikaa/Session-11-Assignment/assets/161161157/63bb1934-bf5a-4747-b9a4-b7bb7210671e)



**Q[3]: Make a NDSI map of your upazila by using Sentinel-2 imagery for 2021. Upload the code, code link, and screenshot in your github repo. Submit the repo link.**
In this case, I've utilized Sentinel-2 satellite imagery to create a NDSI (Normalized Difference Snow Index) map for the Teknaf upazila in 2021. The NDSI is a metric used to detect snow and ice cover by comparing the reflectance of visible and shortwave infrared bands.

The NDSI values range from -1 to 1:

**Values Near -1: **These indicate non-snow surfaces, such as land, vegetation, or water bodies, where there's minimal contrast between the reflectance of visible and shortwave infrared bands.

**Values Near 0:** Represent areas with mixed or ambiguous conditions, where it's challenging to determine whether snow or ice is present. These areas may include partially snow-covered regions or surfaces with varying degrees of reflectance.

**Values Near 1:** Signify the presence of snow or ice cover, as these areas exhibit a strong contrast between the reflectance of visible and shortwave infrared bands. Snow-covered surfaces typically reflect more visible light and less shortwave infrared light compared to non-snow surfaces.

By visualizing the NDSI map, we can identify and map snow and ice cover within the Teknaf upazila, aiding in snow monitoring, environmental assessment, and disaster management efforts. The links are attached below:


*   [GEE link](https://code.earthengine.google.com/0bd83d024fd66225f76fbe919640696b)
*   [Code file](https://github.com/t-anikaa/Session-11-Assignment/blob/main/Q%26A%5B3%5D.js)
![Capture 03 PNG](https://github.com/t-anikaa/Session-11-Assignment/assets/161161157/bc816a32-46b9-4ffc-9651-439cb2c596cc)


**Q[4]: Calculate the maximum and minimum NDVI value of your NDVI map. Upload the code, code link, and screenshot in your github repo. Submit the repo link.**

Here, the script analyzes vegetation health in the Teknaf upazila using Landsat 9 imagery from 2022. It computes both the maximum and minimum NDVI values within the region of interest, providing insights into the range of vegetation density. Utilizing the 'reduceRegion()' function, it calculates these statistics efficiently, contributing to a comprehensive understanding of vegetation dynamics. Finally, the script prints and extracts the maximum and minimum NDVI values, enabling further analysis and interpretation of vegetation conditions. The links are here: 


*   [GEE link](https://code.earthengine.google.com/c018f961b67aa683679ae7f1294ee5dc)
*   [Code file](https://github.com/t-anikaa/Session-11-Assignment/blob/main/Q%26A%5B4%5D.js)
![Capture 04](https://github.com/t-anikaa/Session-11-Assignment/assets/161161157/90cf5cf8-4ed2-4088-86cd-714197c5dfa3)
