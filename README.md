# **Calculating Spectral Indices in Google Earth Engine (GEE)**
This repository contains scripts to calculate commonly used spectral indices, including NDVI (Normalized Difference Vegetation Index), NDWI (Normalized Difference Water Index), and NDSI (Normalized Difference Snow Index) using Google Earth Engine (GEE) platform.

##**1.NDVI (Normalized Difference Vegetation Index):**

NDVI is a simple graphical indicator used to assess whether the target area contains live green vegetation or not. It is calculated using the formula:
**NDVI=(NIR-Red)/(NIR+Red)**.
Here,i have prepared an NDVI map for Boalkhali upazilla by using Landsat 9 imagery for 2022.Also i have calculated the maximum and minimum NDVI value of my NDVI map.
*   [GEE LINK](https://code.earthengine.google.com/30245a4531867ac316aa6b4850e3d366)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-4/blob/main/NDVI.js)
*   [NDVI MAP IMAGE](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-4/blob/main/NDVI.png)
*   [NDVI MIN-MAX CALCULATION](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-4/blob/main/min-max-NDVI.png)

##**2.NDWI (Normalized Difference Water Index):**

NDWI is used to detect the presence of water. It utilizes the absorption features of water in the near-infrared region and the reflectance properties in the green region. The formula for NDWI is:**NDWI=(Green-NIR)/(Green+NIR)**.
Here,i have prepared an NDWI map of my Upazila by using Sentinel-2 imagery for 2023.
*   [GEE LINK](https://code.earthengine.google.com/70e9d020046c09cc6389a004f7956670)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-4/blob/main/NDWI.js)
*   [NDWI MAP IMAGE](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-4/blob/main/NDWI.png)

## **3.NDSI (Normalized Difference Snow Index):**

NDSI is specifically designed to detect snow-covered areas. It uses the difference in reflectance between visible and shortwave infrared bands. The formula for NDSI is:**NDSI=(Green-SWIR)/(Green+SWIR)**.
Here,i have prepared an NDSI map of Boalkhali Upazila by using Sentinel-2 imagery for 2021.
*   [GEE LINK](https://code.earthengine.google.com/5cd9ede7fb06079854d5b4cb13d7f571)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-4/blob/main/NDSI.js)
*   [NDSI MAP IMAGE](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-4/blob/main/NDSI.png)


