# 🗺 Reconstrucción Cartográfica Digital  
## El Pelón – San Antonio (1939)

## 📌 Descripción

Este proyecto presenta una **reconstrucción cartográfica digital georreferenciada** basada en la interpretación de un plano mural histórico fechado en 1939 correspondiente a la zona de El Pelón – San Antonio, Guanacaste, Costa Rica.

El trabajo no constituye una reproducción del mural original, sino una **digitalización vectorial interpretativa** de los elementos territoriales representados en la obra histórica, tales como:

- Límites y subdivisiones de lotes  
- Ríos y cuerpos de agua  
- Caminos y senderos  
- Toponimia histórica  

---

## 🛠 Metodología

1. **Fuente base:** Observación e interpretación de plano mural fechado en 1939, ubicado en propiedad privada en Guanacaste, Costa Rica.  
2. **Digitalización:** Vectorización manual en QGIS.  
3. **Georreferenciación:** Ajuste mediante puntos de control comparados con cartografía contemporánea.  
4. **Sistema de referencia:** WGS84 EPSG:4326 
5. **Publicación web:** Generación de visor interactivo mediante QGIS2Web.  

La cartografía resultante representa una **reconstrucción histórica aproximada**, sujeta a las limitaciones propias de la fuente original.

---

## ⚖️ Naturaleza del trabajo

Este repositorio contiene:

- Capas vectoriales tipo js y teselas de imágenes tipo {z}/{x}/{y}.png generadas digitalmente.  
- Procesamiento cartográfico propio.  
- Visualización web desarrollada en 2026.  

No se incluyen reproducciones fotográficas del mural original.

El presente proyecto constituye un trabajo de análisis territorial e interpretación histórica realizado por:

**Alejandro Soto Barquero, 2026**

---

## 📚 Alcance histórico

Previamente son buscados planos de la Hacienda antes de esta fecha:

- Hay referencia de 1880 de ubicación de Grandes Haciendas en este mismo Git de asoto59g.
- En mapa de 1889 (Montes de Oca aparece anotado Hacienda).
- En mapa de 1898 topográfico de Pittier se anota Hacienda.
- En 1921 y 1926 aparece en Archivo Nacional dos planos El Pelón pero son Hacienda Cacao (El Pelón de la Altura) de Minor C. Keith. Con   ref. arch. CR AN CR-AN-AH-MYP-000285 y CR-AN-CR-AN-AH-MYP-021253
- En 1924 aparece la desembocadura río Salto, digitalizado en este mismo Git de asoto59g.

El plano de 1939 permite analizar:

- Configuración histórica de propiedades rurales.  
- Relación territorial con el río Tempisque.  
- Transformaciones del paisaje en la cuenca baja guanacasteca.  
- Evolución de caminos y asentamientos.

  
---

## ⚠️ Limitaciones

- La cartografía digital es una interpretación técnica.  
- Las posiciones y superficies deben considerarse aproximadas.  
- No sustituye información catastral oficial.  

---


## :mag: Visor geográfico de Mapa de El Pelón 1939

### Dar clic en siguiente link

https://asoto59g.github.io/El_Pelon_1939/


<img width="292" height="415" alt="image" src="https://github.com/user-attachments/assets/d30bd881-be88-4e8a-8795-de726a4194da" />

## :b: Fuentes tipográficas

Este proyecto utiliza la fuente **Pretendard**.

Pretendard está distribuida bajo la licencia **SIL Open Font License 1.1**.

Copyright (c) The Pretendard Project Authors.

La licencia completa se encuentra en:

/webfonts/OFL.txt

## 🖼️ Simbologías y texturas para Qgis

Se encuentran:

/estilos/*.qml

/texturas/*.png

