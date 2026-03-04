<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis styleCategories="Symbology" version="3.40.15-Bratislava">
  <pipe>
    <rasterrenderer type="singlebandcolordata" opacity="0.25" band="1" alphaBand="-1">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>None</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0"/>
    <huesaturation colorizeBlue="163" grayscaleMode="0" colorizeStrength="100" colorizeRed="189" colorizeGreen="182" saturation="0" colorizeOn="1"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
  <blendMode>5</blendMode> <!-- Overlay blend mode -->
</qgis>
